import React from 'react';
import { Panel } from 'presentational-components';

import { Provider } from 'react-redux';

import store from './store';

import ExampleForm from './forms/ExampleForm';

class App extends React.Component {
  handleSubmit = (formState) => {
    if (formState.temperature && formState.temperature.value && formState.temperature.scale) {
      this.setState({ lastSubmit: `${formState.temperature.value}º${formState.temperature.scale.toUpperCase()}` });
    } else {
      this.setState({ lastSubmit: '' });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Panel>
          <Panel title="PCP Form Example - Application">
            <ExampleForm onSubmit={this.handleSubmit} />
          </Panel>
          {this.state && this.state.lastSubmit &&
            <Panel title="Last Valid Submit">
              {this.state.lastSubmit}
            </Panel>}
        </Panel>
      </Provider>
    );
  }
}

export default App;
