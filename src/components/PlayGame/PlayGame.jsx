import React, { Component } from 'react';
import Player from '../Player/Player';

class PlayGame extends Component {
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
        <Player list={hand1} exp={this.getExperience(hand1)} isWinning={this.getExperience(hand1) > this.getExperience(hand2)} />

        <Player list={hand2} exp={this.getExperience(hand2)} isWinning={this.getExperience(hand1) < this.getExperience(hand2)} />
      </div>
    );
  }
}

export default PlayGame;