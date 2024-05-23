import React, { useState, useEffect } from 'react';
import PokemonDetails from './PokemonDetails';
import styles from './pokemonList.module.css';

// const PokemonList = () => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);

//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
//       .then(response => response.json())
//       .then(data => setPokemonData(data.results));
//   }, []);

//   const handlePokemonClick = (name) => {
//     setSelectedPokemon(name);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Pokemon List</h1>
//       <ul className={styles.list}>
//         {pokemonData.map(pokemon => (
//           <li
//             key={pokemon.name}
//             className={styles.listItem}
//             onClick={() => handlePokemonClick(pokemon.name)}
//           >
//             {pokemon.name}
//           </li>
//         ))}
//       </ul>
//       <PokemonDetails pokemonName={selectedPokemon} />
//     </div>
//   );
// };

// export default PokemonList;
const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [hoveredPokemon, setHoveredPokemon] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => setPokemonData(data.results));
  }, []);

  const handlePokemonClick = (name) => {
    setSelectedPokemon(name);
  };

  const handlePokemonHover = (name) => {
    setHoveredPokemon(name);
  };

  const handlePokemonLeave = () => {
    setHoveredPokemon(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pokemon List</h1>
      <ul className={styles.list}>
        {pokemonData.map(pokemon => (
          <li
            key={pokemon.name}
            className={styles.listItem}
            onClick={() => handlePokemonClick(pokemon.name)}
            onMouseEnter={() => handlePokemonHover(pokemon.name)}
            onMouseLeave={handlePokemonLeave}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
      <PokemonDetails pokemonName={selectedPokemon || hoveredPokemon} />
    </div>
  );
};

export default PokemonList;