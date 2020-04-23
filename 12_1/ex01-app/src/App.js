import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = ['estudar', 'limpar casa', 'cozinhar'];

const App = () => ( <ul>{task.map(task => <li>{task}</li>)}</ul>)

export default App;
