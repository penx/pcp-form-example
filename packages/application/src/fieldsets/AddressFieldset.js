import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Field, change } from 'redux-form';

import { TextField, PostcodeField, Panel } from 'presentational-components';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);

const AddressFieldset = ({ handlePostcodeClick }) => (
  <Panel title="UK Address">
    <Field
      name="postcode"
      type="text"
      component={PostcodeField}
      label="Postcode"
      buttonLabel="Search"
      validate={[required, maxLength15]}
      buttonOnClick={handlePostcodeClick}
    />
    <Field
      name="line1"
      type="text"
      component={TextField}
      label="Line 1"
      validate={[required, maxLength15]}
    />
    <Field
      name="line2"
      type="text"
      component={TextField}
      label="Line 2"
      validate={[maxLength15]}
    />
  </Panel>
);

AddressFieldset.propTypes = {
  handlePostcodeClick: PropTypes.func,
};

AddressFieldset.defaultProps = {
  handlePostcodeClick: null,
};

const mapDispatchToProps = dispatch => ({
  handlePostcodeClick: () => dispatch(change('example', 'address.line1', 'test')),
});

export default connect(null, mapDispatchToProps)(AddressFieldset);
