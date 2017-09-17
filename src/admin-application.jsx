import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link, IndexRoute} from 'react-router';
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux'
import { SurveyListing, SurveyDetails,  SurveyActionReducer} from './components/survey-listing';
import { Login as LoginForm } from './components/login-form';
import { ValidateAdminCredential, CredentialReducer } from './components/credentials';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};

const rootContainer = document.getElementById('app-container');

const store = createStore(combineReducers({
  SurveyActionReducer,
  CredentialReducer,
  routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);

history.listen((location) => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ LoginForm }/>
      </Route>

      <Route path="/listing" component={SurveyListing} onEnter={ValidateAdminCredential}/>
      <Route path="/listing/details/:id" component={SurveyDetails} />
      <Route path="/login" component={LoginForm}></Route>
    </Router>
  </Provider>, rootContainer);