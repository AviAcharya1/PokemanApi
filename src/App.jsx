import React from 'react';
import PokemonList from './components/PokemonList';
import './App.css'; // Import your global styles if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
      </header>
      <main>
        <PokemonList />
      </main>
    </div>
  );
}

export default App;