import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import manageState from 'manage-state';

import {
  TemperatureInput,
  MixedTemperatureInput,
  PostcodeInput,
  TextInput,
  TextField,
  OptionalDateInput,
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

const ManagedOptionalDateInput = manageState(OptionalDateInput, {
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

storiesOf('OptionalDateInput', module)
  .add('default', () => (<ManagedOptionalDateInput
    onChange={action('onChange')}
    onBlur={action('onBlur')}
    onFocus={action('onFocus')}
  />));

storiesOf('TextInput', module)
  .add('default', () => <TextInput />);

storiesOf('TextField', module)
  .add('default', () => <TextField label="Text Field" />);
