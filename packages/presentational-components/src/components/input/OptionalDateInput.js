import React from 'react';
import PropTypes from 'prop-types';

class OptionalDateInput extends React.Component {
  getInputs = () => [this.dayInput, this.monthInput, this.yearInput]

  mergeValueFromEvent = (e, key) => ({
    ...this.props.value,
    [key]: e.target.value,
  })

  handleChange(e, key) {
    this.props.onChange(this.mergeValueFromEvent(e, key));
  }

  handleBlur = (e, key) => {
    const inputs = this.getInputs();
    if (!inputs.some(input => e.relatedTarget === input)) {
      this.props.onBlur(this.mergeValueFromEvent(e, key));
    }
  }

  handleFocus = (e, key) => {
    const inputs = this.getInputs();
    if (!inputs.some(input => e.relatedTarget === input)) {
      this.props.onFocus(this.mergeValueFromEvent(e, key));
    }
  }

  renderInput(label, key, value, inputRef) {
    return (
      <label>
        {label}:
        <input
          value={value || ''}
          onChange={e => this.handleChange(e, key)}
          onBlur={e => this.handleBlur(e, key)}
          onFocus={e => this.handleFocus(e, key)}
          ref={(input) => { this[inputRef] = input; }}
        />
      </label>);
  }

  render() {
    const { value: { day, month, year } = {} } = this.props;

    return (
      <div>
        {this.renderInput('Day', 'day', day, 'dayInput')}
        {this.renderInput('Month', 'month', month, 'monthInput')}
        {this.renderInput('Year', 'year', year, 'yearInput')}
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
  onChange: () => null,
  onBlur: () => null,
  onFocus: () => null,
};

export default OptionalDateInput;
