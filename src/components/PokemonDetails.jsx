import React, { useState, useEffect } from 'react';
import styles from './pokemonDetails.module.css';

// const PokemonDetails = ({ pokemonName }) => {
//     const [pokemonDetails, setPokemonDetails] = useState(null);
  
//     useEffect(() => {
//       if (pokemonName) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//           .then(response => response.json())
//           .then(data => setPokemonDetails(data));
//       } else {
//         setPokemonDetails(null);
//       }
//     }, [pokemonName]);
  
//     return (
//       <div className={styles.container}>
//         {pokemonDetails ? (
//           <div>
//             <h2 className={styles.name}>{pokemonDetails.name}</h2>
//             <img
//               src={pokemonDetails.sprites.front_default}
//               alt={pokemonDetails.name}
//               className={styles.image}
//             />
//             <div className={styles.details}>
//               <div className={styles.detail}>
//                 <h3>Height</h3>
//                 <p>{pokemonDetails.height}</p>
//               </div>
//               <div className={styles.detail}>
//                 <h3>Weight</h3>
//                 <p>{pokemonDetails.weight}</p>
//               </div>
//               {/* Add more details as needed */}
//             </div>
//           </div>
//         ) : (
//           <p>Select a Pokemon to see its details.</p>
//         )}
//       </div>
//     );
//   };
  
//   export default PokemonDetails;

const PokemonDetails = ({ pokemonName }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (pokemonName) {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(
            data => {
              setPokemonDetails(data);
              setLoading(false);
              setError(null);
            },
            error => {
              setPokemonDetails(null);
              setLoading(false);
              setError(error.message);
            }
          );
      } else {
        setPokemonDetails(null);
        setLoading(false);
        setError(null);
      }
    }, [pokemonName]);
  
    return (
      <div className={`${styles.container} ${pokemonDetails ? styles.visible : ''}`}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : pokemonDetails ? (
          <div>
            <h2 className={styles.name}>{pokemonDetails.name}</h2>
            <img
              src={pokemonDetails.sprites.front_default}
              alt={pokemonDetails.name}
              className={styles.image}
            />
            <div className={styles.details}>
              <div className={styles.detail}>
                <h3>Height</h3>
                <p>{pokemonDetails.height}</p>
              </div>
              <div className={styles.detail}>
                <h3>Weight</h3>
                <p>{pokemonDetails.weight}</p>
              </div>
              {/* Add more details as needed */}
            </div>
          </div>
        ) : (
          <p>Hover over a Pokemon to see its details.</p>
        )}
      </div>
    );
  };
  
  export default PokemonDetails;