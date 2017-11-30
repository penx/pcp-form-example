import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm, FormSection } from 'redux-form';
import Collapse from 'react-collapse';

import { MixedTemperatureField, Panel, Button, Form, TestField } from 'presentational-components';

import AddressFieldset from '../fieldsets/AddressFieldset';

const ExampleForm = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;
  return (
    <Panel title="A form in a panel">
      <Form onSubmit={handleSubmit}>
        <FormSection name="address">
          <AddressFieldset />
        </FormSection>
        <Collapse isOpened>
          Collapse
          <TestField />
        </Collapse>
        <Field
          name="temperature"
          component={MixedTemperatureField}
          type="object"
        />
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </Form>
    </Panel>
  );
};

ExampleForm.propTypes = {
  ...reduxForm,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'example',
})(ExampleForm);
