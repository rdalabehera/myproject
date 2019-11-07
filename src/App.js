import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import ViewStudents from './Components/ViewStudents';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: 'modules'});

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registration" component={AddStudent} />
            <Route exact path="/details" component={ViewStudents} />
          </div>
        </Router>
        <div>
        <h3>&copy; 2019-Rashmiranjan Dalabehera</h3>
        </div>
      </div>
    );
  }
}

export default (App);
