import React from 'react';

import TemperatureInput from '../input/TemperatureInput';
import { fieldPropTypes } from '../../propTypes';

const TemperatureField = props => <TemperatureInput {...props.input} />;

TemperatureField.propTypes = {
  ...fieldPropTypes,
};

export default TemperatureField;
