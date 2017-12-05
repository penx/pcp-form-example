import React from 'react';
import PropTypes from 'prop-types';

import multiInputInput from '../../hoc/multiInputInput';

class OptionalDateInput extends React.Component {
  inputs = {}

  renderInput(label, key) {
    return (
      <label>
        {label}:
        <input
          value={(this.props.value && this.props.value[key]) || ''}
          onChange={e => this.props.onChange(e, key)}
          onBlur={e => this.props.onBlur(e, key)}
          onFocus={e => this.props.onFocus(e, key)}
          ref={(input) => { this.inputs[key] = input; this.props.refs(this.inputs); }}
        />
      </label>);
  }

  render() {
    return (
      <div>
        {this.renderInput('Day', 'day')}
        {this.renderInput('Month', 'month')}
        {this.renderInput('Year', 'year')}
      </div>
    );
  }
}

OptionalDateInput.propTypes = {
  value: PropTypes.shape({
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
  refs: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

OptionalDateInput.defaultProps = {
  value: {
    day: null,
    month: null,
    year: null,
  },
  refs: () => null,
  onChange: () => null,
  onBlur: () => null,
  onFocus: () => null,
};

// This component is dependent on multiInputInput HOC so we always export with HOC
export default multiInputInput(OptionalDateInput);
