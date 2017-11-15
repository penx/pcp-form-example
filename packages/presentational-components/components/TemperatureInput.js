// from https://reactjs.org/docs/lifting-state-up.html

import React from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

TemperatureInput.propTypes = {
  temperature: PropTypes.string.isRequired,
  scale: PropTypes.string.isRequired,
  onTemperatureChange: PropTypes.func.isRequired,
};

export default TemperatureInput;
