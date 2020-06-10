// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </BrowserRouter>
    );
  }
}

export default App;