import React from 'react';
import CardsList from '../CardsList/CardsList';

import PropTypes from 'prop-types';

const Player = ({ list }) => {
  return (
    <div>
      <h2>Player</h2>

      <CardsList list={list} />
    </div>
  );
}

Player.propTypes = {
  list: PropTypes.array.isRequired
}

export default Player;