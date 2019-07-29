export type ScrollIndicatorInput = {
  onElement?: boolean;
  precision?: number;
  initialValue?: number;
};

export type ScrollIndicatorApi = {
  activeListener: () => void;
  setScrollState: (scrolled: number) => void;
};

export type ScrollIndicatorState = {
  value: number;
  targetElement?: React.MutableRefObject<any>;
};

export type ScrollIndicatorOutput = [ScrollIndicatorState, ScrollIndicatorApi];

export type ScrollIndicatorHook = (
  options?: ScrollIndicatorInput
) => ScrollIndicatorOutput;
