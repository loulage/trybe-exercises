// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import {BrowserRouter, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
      <Home />
    </BrowserRouter>
    );
  }
}

export default App;