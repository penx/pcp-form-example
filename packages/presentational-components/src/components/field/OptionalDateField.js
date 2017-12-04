import React from 'react';
import glamorous from 'glamorous';

import OptionalDateInput from '../input/OptionalDateInput';
import Validation from '../Validation';
import { fieldPropTypes } from '../../propTypes';

const InnerLabel = glamorous.span({
  minWidth: '100px',
  display: 'inline-block',
  textAlign: 'right',
  paddingRight: '20px',
});

const Label = glamorous.label({
  display: 'block',
});

const OptionalDateField = props => (
  <div>
    <Label>
      <InnerLabel>{props.label}</InnerLabel>
      <OptionalDateInput {...props.input} />
    </Label>
    <Validation {...props.meta} />
  </div>);

OptionalDateField.propTypes = {
  ...fieldPropTypes,
};

export default OptionalDateField;
