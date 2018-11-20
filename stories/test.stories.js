import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('test', module).add('hello', () => (
  <button onClick={() => alert('clicked')}>Hello Button foo</button>
));
