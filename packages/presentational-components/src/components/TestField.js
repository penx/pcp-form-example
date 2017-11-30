import React from 'react';
import { Field } from 'redux-form';

function TestField() {
  return (
    <Field
      name="searchFirstName"
      component="input"
    />
  );
}

export default TestField;
