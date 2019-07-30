# React useScrollIndicator hook

Create your own scroll indicators using this simple, but very versatile hook.

```
[state, api] =  useScrollIndicator(options);
```

## Simple Usage

### Scroll tracking for the whole page

```js
import * as React from 'react';
import { useScrollIndicator } from 'react-use-scroll-indicator';

export const BlogPost = () => {
  const [state] = useScrollIndicator();

  return (
    <section>
      <div>Percent of page scrolled: {state.width}%</div>
      <article>... Main content ...</article>
    </section>
  );
};
```

### Scroll tracking for the specific element

```js
import * as React from 'react';
import { useScrollIndicator } from 'react-use-scroll-indicator';

export const BlogPost = () => {
  const [state] = useScrollIndicator({ onElement: true });

  return (
    <section>
      <div>Percent of element scrolled: {state.width}%</div>
      <article ref={state.targetElement}>
        ... Scroll percentage will be calculated only on this element ...
      </article>
      <div>This element won't be included in the calculation.</div>
    </section>
  );
};
```

## Options

| Key          | Type    | Default Value | Description                                                                                                           |
| ------------ | ------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| onElement    | boolean | false         | If set to `true`, it will return a ref that needs to be assigned to the element that will be used in scroll indicator |
| precision    | number  | 2             | Decimal places of percentage that will be used for scroll indicator.                                                  |
| initialValue | number  | 0             | Initial value of the percentage for scroll indicator.                                                                 |

## State and API

Hook returns the following variables and methods.

```
[state, api] =  useScrollIndicator(options);
```

### State

| Key           | Description                                                                           |
| ------------- | ------------------------------------------------------------------------------------- |
| value         | Scroll percentage                                                                     |
| targetElement | ref that can be assigned to an element. Returned only if `onElement` is set to `true` |

### API

| Key            | Description                               |
| -------------- | ----------------------------------------- |
| activeListener | Currently active scroll listener.         |
| setScrollState | Method that sets the `value` of the hook. |
