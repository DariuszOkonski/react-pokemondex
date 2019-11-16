import React, { Component } from 'react';
import Player from './Player/Player';

class App extends Component {
  state = {
    isLoading: true,
  }

  drawPokemons(list) {
    let tempArr = [];
    let listLength = list.length / 2;
    for (let i = 0; i < listLength; i++) {
      const index = Math.floor(Math.random() * list.length);
      tempArr.push(list.splice(index, 1)[0]);
    }
    return tempArr;
  }

  getExperience(list) {
    return list.reduce(function (acc, obj) {
      return acc + obj.experience
    }, 0);
  }

  render() {
    const pokemons = [...this.props.pokemons];
    const hand1 = this.drawPokemons(pokemons);
    const hand2 = [...pokemons];

    return (
      <div className="App">
        <Player list={hand1} name="Human" exp={this.getExperience(hand1)} />
        <Player list={hand2} name="Cpu" exp={this.getExperience(hand2)} />
      </div>
    );
  }
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// API do charakterów pokemonów muszę znaleźć albo stworzyć taką tablicę
