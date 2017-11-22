import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const ValidationWrapper = glamorous.div({
  color: '#F62229',
});

const Validation = ({ touched, warning, error }) => (
  <ValidationWrapper>
    {touched && warning &&
      <div>
        {warning}
      </div>}
    {touched && error &&
      <div>
        {error}
      </div>}
  </ValidationWrapper>
);

Validation.propTypes = {
  touched: PropTypes.bool,
  warning: PropTypes.string,
  error: PropTypes.string,
};

Validation.defaultProps = {
  touched: false,
  warning: null,
  error: null,
};

export default Validation;
