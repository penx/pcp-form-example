import React from 'react';
import { Panel } from 'presentational-components';

import { Provider } from 'react-redux';

import store from './store';

import Calculator from './forms/Calculator';

class App extends React.Component {
  handleSubmit = (formState) => {
    this.setState({ lastSubmit: `${formState.temperature.value}º${formState.temperature.scale.toUpperCase()}` });
  }

  render() {
    return (
      <Provider store={store}>
        <Panel>
          <Panel title="PCM Form Example - Application">
            <Calculator onSubmit={this.handleSubmit} />
          </Panel>
          {this.state && this.state.lastSubmit &&
            <Panel title="Last Submit">
              {this.state.lastSubmit}
            </Panel>}
        </Panel>
      </Provider>
    );
  }
}

export default App;
