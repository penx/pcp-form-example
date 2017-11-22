import React from 'react';
import glamorous from 'glamorous';

import TextInput from '../input/TextInput';
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

const TextField = props => (
  <div>
    <Label>
      <InnerLabel>{props.label}</InnerLabel>
      <TextInput {...props.input} />
    </Label>
    <Validation {...props.meta} />
  </div>);

TextField.propTypes = {
  ...fieldPropTypes,
};

export default TextField;
