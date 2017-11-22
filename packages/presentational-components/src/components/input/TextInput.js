// from https://reactjs.org/docs/lifting-state-up.html

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Input = glamorous.input({
  border: '1px solid #8279F6',
  borderRadius: '3px',
});

const TextInput = ({ value, onChange }) => (
  <Input
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
