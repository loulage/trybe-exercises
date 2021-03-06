// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/users/:id" render={ (props) => <Users {...props} greetingMessage='Good Morning!' />} />
      <Route path="/users" render={ (props) => <Users {...props} greetingMessage='Good Morning!' />} />
      <Route exact path="/" component={Home} />
      </Switch>
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </BrowserRouter>
    );
  }
}

export default App;