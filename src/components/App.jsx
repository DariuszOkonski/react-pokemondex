import React, { Component } from 'react';
import styles from './App.module.css';
import PlayGame from './PlayGame/PlayGame';
import Loading from './Loading/Loading';
import Button from './Button/Button';

class App extends Component {
  state = {
    isLoading: false,
  }

  handleClick = () => {
    this.setState({
      isLoading: true,
    })

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, (Math.floor(Math.random() * 1000) + 1000));
  }

  render() {
    return (
      <div className={styles.container}>

        {!this.state.isLoading &&
          <Button handleClick={this.handleClick} />
        }

        {
          this.state.isLoading
            ?
            <Loading />
            :
            <PlayGame pokemons={this.props.pokemons} />
        }

      </div>
    )
  }
}

export default App;

// https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// API do charakterów pokemonów muszę znaleźć albo stworzyć taką tablicę
