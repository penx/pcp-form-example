import React from 'react';

import { storiesOf } from '@storybook/react';
import manageState from 'manage-state';

import {
  TemperatureInput,
  MixedTemperatureInput,
  PostcodeInput,
  TextInput,
  TextField,
} from '../src';


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

storiesOf('PostcodeInput', module)
  .add('default', () => <PostcodeInput />);

storiesOf('TextInput', module)
  .add('default', () => <TextInput />);

storiesOf('TextField', module)
  .add('default', () => <TextField label="Text Field" />);
