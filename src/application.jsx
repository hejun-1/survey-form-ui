import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Survey } from './components/wizard';
import { ReportSearch } from './components/result-report';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height:"100%"}}>
        <Meun></Meun>
      </div>
    );
  }
};

const rootContainer = document.getElementById('app-container');

ReactDOM.render(
                <Router history={hashHistory}>
                  <Route path="/" component={App}>
                    <IndexRedirect to="/survey" />
                  </Route>
                  <Route path="/survey/:name" component={Survey} getData={() => new Promise((r) => r({}))}/>
                  <Route path="/survey" component={Survey} getData={() => new Promise((r) => r({}))}/>
                  <Route path="/report" component={ReportSearch}/>
                </Router>,
                rootContainer
);
