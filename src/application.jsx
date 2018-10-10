import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';
import { Survey } from './components/wizard';
import { ReportSearch } from './components/result-report';
import { Menu } from './components/menu';

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
                <Router history={browserHistory}>
                  <Route path="/" component={App}>
                    <IndexRedirect to="/survey" />
                  </Route>
                  <Route path="/survey/:name" component={Survey} getData={() => new Promise((r) => r({}))}/>
                  <Route path="/survey" component={Survey} getData={() => new Promise((r) => r({}))}/>
                  <Route path="/report" component={ReportSearch}/>
                </Router>,
                rootContainer
);