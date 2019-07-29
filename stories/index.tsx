import React from 'react';
import { storiesOf } from '@storybook/react';
import { DemoBasic } from './demo-basic';

storiesOf('Button', module)
  .add('Basic Demo', () => <DemoBasic />)
  .add('with text', () => <button>Hello Button</button>)
  .add('with emoji', () => (
    <button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </button>
  ));
