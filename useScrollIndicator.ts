import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import {
  ScrollIndicatorHook,
  ScrollIndicatorState,
  ScrollIndicatorApi
} from './types';

import {
  VALUE_MIN,
  VALUE_MAX,
  PRECISION_BASE,
  INITIAL_ON_ELEMENT,
  INITIAL_PRECISION,
  INITIAL_VALUE
} from './constants';

export const useScrollIndicator: ScrollIndicatorHook = (options = {}) => {
  const {
    onElement = INITIAL_ON_ELEMENT,
    precision = INITIAL_PRECISION,
    initialValue = INITIAL_VALUE
  } = options;

  const roundFactor = useMemo(() => Math.pow(PRECISION_BASE, precision), [
    precision
  ]);

  const targetElement = useRef<any>(null);
  const [value, setValue] = useState(initialValue);

  const handleValue = useCallback(
    scrolled => {
      const value = Math.round(scrolled * roundFactor) / roundFactor;
      setValue(Math.max(Math.min(value, VALUE_MAX), VALUE_MIN));
    },
    [roundFactor]
  );

  const handleElementScroll = useCallback(() => {
    const { height, top } = targetElement.current.getBoundingClientRect();
    handleValue(((top * -1) / height) * VALUE_MAX);
  }, []);

  const handlePageScroll = useCallback(() => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    handleValue((winScroll / (scrollHeight - clientHeight)) * VALUE_MAX);
  }, []);

  const listener = useMemo(
    () => (onElement ? handleElementScroll : handlePageScroll),
    [onElement]
  );

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return function() {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const state: ScrollIndicatorState = {
    value,
    ...(onElement ? { targetElement } : null)
  };

  const api: ScrollIndicatorApi = useMemo(
    () => ({
      activeListener: listener,
      setScrollState: handleValue
    }),
    [listener, handleValue]
  );

  return [state, api];
};
