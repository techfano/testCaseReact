import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './component/header';
import Manage from './page/manage';
import Request from './page/request';
import Review from './page/review';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/*<Redirect from="/" to="/page/manage" />*/}
          <Switch>
            <Route path="/page/manage" component={Manage} />
            <Route path="/page/request" component={Request} />
            <Route path="/page/review" component={Review} />
          </Switch>
        </div>
      </Router>
    );
  }
}
