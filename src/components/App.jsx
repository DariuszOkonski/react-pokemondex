import React, { Component } from 'react';
import PlayGame from './PlayGame/PlayGame';


class App extends Component {
  state = {
    isLoading: true,
  }

  render() {
    return (
      <PlayGame pokemons={this.props.pokemons} />
    )
  }
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// API do charakterów pokemonów muszę znaleźć albo stworzyć taką tablicę
