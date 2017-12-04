import React from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm, FormSection } from 'redux-form';

import { MixedTemperatureField, OptionalDateField, Panel, Button, Form } from 'presentational-components';

import AddressFieldset from '../fieldsets/AddressFieldset';

const yearLessThan2100 = (value = {}) => {
  const { year } = value;
  if (year) {
    if (year > 2100) {
      return 'Year must be less than 2100';
    }
  }
  return undefined;
};

const yearMoreThan1900 = (value = {}) => {
  const { year } = value;
  if (year) {
    if (year < 1900) {
      return 'Year must be greater than 1900';
    }
  }
  return undefined;
};

const dayWithinMonth = (value = {}) => {
  const { day, month } = value;
  if (month && day) {
    if (month === '2' && day > 29) {
      return 'Day in February must be 29 or lower';
    }
  }
  return undefined;
};


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
        <Field
          name="temperature"
          component={MixedTemperatureField}
          type="object"
        />
        <Field
          name="date"
          component={OptionalDateField}
          type="object"
          validate={[yearLessThan2100, yearMoreThan1900, dayWithinMonth]}
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
