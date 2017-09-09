import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { Wizard} from './components/wizard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Wizard></Wizard>
      </div>
    );
  }
};

const store = createStore(combineReducers({}));
const rootContainer = document.getElementById('app-container');

ReactDOM.render(
                <Provider store={store}>
                  <App />
                </Provider>,
                rootContainer
);