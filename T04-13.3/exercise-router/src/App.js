// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </BrowserRouter>
    );
  }
}

export default App;