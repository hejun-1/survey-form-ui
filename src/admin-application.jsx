import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import { SurveyListing, SurveyDetails } from './components/survey-listing';
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

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/listing" component={SurveyListing} onEnter={validateAdminCredential}/>
      <Route path="/listing/details/:id" component={SurveyDetails} />
      <Route path="/login" component={LoginForm}></Route>
  </Router>,
  rootContainer);