import React from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const content = [
    {id: 1, color: 'branco'},
    {id: 2, color: 'azul'},
    {id: 3, color: 'preto'},
    {id: 4, color: 'vermelho'},
    {id: 5, color: 'verde'},
  ];
  return (
    <div className="App">
      <Dropdown content={content}>cores do Mágic</Dropdown>
    </div>
  );
}

export default App;
