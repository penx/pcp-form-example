import React from 'react';

import { storiesOf } from '@storybook/react';

import TemperatureInput from '../components/TemperatureInput';
import Calculator from '../components/Calculator';

storiesOf('TemperatureInput', module)
  .add('Celsius', () => <TemperatureInput scale="c" />)
  .add('Fahrenheit', () => <TemperatureInput scale="f" />)


storiesOf('Calculator', module)
  .add('Celsius', () => <Calculator />)
