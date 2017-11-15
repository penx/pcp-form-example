import React from 'react';

import { storiesOf } from '@storybook/react';
import manageState from 'manage-state';

import TemperatureInput from '../src/components/input/TemperatureInput';
import MixedTemperatureInput from '../src/components/input/MixedTemperatureInput';

const ManagedTemperatureInput = manageState(TemperatureInput, {
  propsToState: ['temperature'],
  singleValue: true,
  changeCallback: 'onTemperatureChange',
});

const ManagedMixedTemperatureInput = manageState(MixedTemperatureInput, {
  propsToState: ['value'],
  singleValue: true,
});

storiesOf('TemperatureInput', module)
  .add('Celsius', () => <ManagedTemperatureInput scale="c" />)
  .add('Fahrenheit', () => <ManagedTemperatureInput scale="f" />);

storiesOf('MixedTemperatureInput', module)
  .add('default', () => <ManagedMixedTemperatureInput />);
