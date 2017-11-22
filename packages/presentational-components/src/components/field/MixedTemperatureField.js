import React from 'react';
import { fieldPropTypes } from '../../propTypes';
import MixedTemperatureInput from '../input/MixedTemperatureInput';

const MixedTemperatureField = props => <MixedTemperatureInput {...props.input} />;
MixedTemperatureField.propTypes = {
  ...fieldPropTypes,
};

export default MixedTemperatureField;
