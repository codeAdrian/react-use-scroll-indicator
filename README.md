# React useScrollIndicator hook

![npm](https://img.shields.io/npm/v/react-use-scroll-indicator)

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

## Issues and Contributions

Feel free to [report issues](https://github.com/codeAdrian/gatsby-omni-font-loader/issues) you find and feel free to contribute to the project by creating Pull Requests.

Contributions are welcome and appreciated!

## Support

The project is created and maintained by [Adrian Bece](https://codeadrian.github.io/) with the generous help of community contributors. If you have used the plugin and would like to contribute, feel free to [Buy Me A Coffee](https://www.buymeacoffee.com/ubnZ8GgDJ).

<a href="https://www.buymeacoffee.com/ubnZ8GgDJ" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-red.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>