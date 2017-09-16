import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link } from 'react-router';
import { SurveyListing, SurveyDetails,  SurveyActionReducer} from './components/survey-listing';
import { Login as LoginForm } from './components/login-form';
import { validateAdminCredential } from './components/credentials';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Link to="/listing">Listing Link</Link>
        <Link to="/login">Login Link</Link>
      </div>
    );
  }
};

const rootContainer = document.getElementById('app-container');

const store = createStore(combineReducers({
  SurveyActionReducer
}));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/listing" component={SurveyListing} onEnter={validateAdminCredential}/>
      <Route path="/listing/details/:id" component={SurveyDetails} />
      <Route path="/login" component={LoginForm}></Route>
    </Router>
  </Provider>,
  rootContainer);