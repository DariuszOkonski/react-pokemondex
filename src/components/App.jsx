import React from 'react';
import pokemons from '../data/pokemons';
import Player from './Player/Player';

function App() {
  // console.log(pokemons);

  return (
    <div className="App">
      <Player list={pokemons} name="Human" exp={110} />
      <Player list={pokemons} name="Cpu" exp={230} />
    </div>
  );
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// API do charakterów pokemonów muszę znaleźć albo stworzyć taką tablicę
