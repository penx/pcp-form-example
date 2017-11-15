import React from 'react';
import PropTypes from 'prop-types';

import TemperatureInput from './TemperatureInput';

import toCelsius from '../../util/toCelsius';
import toFahrenheit from '../../util/toFahrenheit';
import tryConvert from '../../util/tryConvert';

class MixedTemperatureInput extends React.Component {
  handleCelsiusChange = (value) => {
    this.props.onChange && this.props.onChange({ scale: 'c', value });
  }

  handleFahrenheitChange = (value) => {
    this.props.onChange && this.props.onChange({ scale: 'f', value });
  }

  render() {
    const { value: temperature } = this.props;
    const celsius = temperature.scale === 'f' ? tryConvert(temperature.value, toCelsius) : temperature.value;
    const fahrenheit = temperature.scale === 'c' ? tryConvert(temperature.value, toFahrenheit) : temperature.value;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

MixedTemperatureInput.propTypes = {
  value: PropTypes.shape(),
  onChange: PropTypes.func.isRequired,
};

MixedTemperatureInput.defaultProps = {
  value: {
    scale: "c",
    value: 0,
  }
};

export default MixedTemperatureInput;
