import React from 'react';
import data from './data';
import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div>
      <Pokedex pokemons={data} />
    </div>
  );
}

export default App;
