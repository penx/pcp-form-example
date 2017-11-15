import React from 'react';

import { storiesOf } from '@storybook/react';
import manageState from 'manage-state';

import TemperatureInput from '../components/TemperatureInput';
import MixedTemperatureInput from '../components/MixedTemperatureInput';

const ManagedMixedTemperatureInput = manageState(MixedTemperatureInput, {
  propsToState: ['temperature'],
  singleValue: true,
});

storiesOf('TemperatureInput', module)
  .add('Celsius', () => <TemperatureInput scale="c" />)
  .add('Fahrenheit', () => <TemperatureInput scale="f" />);

storiesOf('MixedTemperatureInput', module)
  .add('default', () => <ManagedMixedTemperatureInput />);
