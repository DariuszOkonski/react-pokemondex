import React from 'react';
import pokemons from '../data/pokemons';
import Card from './Card/Card';

function App() {
  console.log(pokemons)

  return (
    <div className="App">
      <Card name="Pokemon" type="water" exp={63} id={156} />
    </div>
  );
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// API do charakterów pokemonów muszę znaleźć albo stworzyć taką tablicę
