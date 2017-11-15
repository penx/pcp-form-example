import React from 'react';

import { storiesOf } from '@storybook/react';

import TemperatureInput from '../components/TemperatureInput';

storiesOf('TemperatureInput', module)
  .add('Celsius', () => <TemperatureInput scale="c" />)
  .add('Fahrenheit', () => <TemperatureInput scale="f" />)
