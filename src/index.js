import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import pokemons from './data/pokemons';

ReactDOM.render(<App pokemons={pokemons} />, document.getElementById('root'));
