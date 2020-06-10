// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    );
  }
}

export default App;