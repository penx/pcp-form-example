// from https://reactjs.org/docs/lifting-state-up.html

import React from 'react';

import MixedTemperatureInput from './MixedTemperatureInput';
import BoilingVerdict from './BoilingVerdict';

import toCelsius from '../util/toCelsius';
import tryConvert from '../util/tryConvert';
// import toFahrenheit from '../util/toFahrenheit';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: {
        value: '',
        scale: 'c',
      },
    };
  }

  handleTemperatureChange(temperature) {
    this.setState(prevState => ({
      temperature: {
        ...prevState.temperature,
        ...temperature,
      },
    }));
  }

  render() {
    const { temperature } = this.state;
    const celsius = temperature.scale === 'f' ? tryConvert(temperature.value, toCelsius) : temperature.value;

    return (
      <div>
        <MixedTemperatureInput
          value={temperature}
          onChange={this.handleTemperatureChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)}
        />
      </div>
    );
  }
}

export default Calculator;
