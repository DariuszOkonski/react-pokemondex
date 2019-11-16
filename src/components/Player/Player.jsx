import React from 'react';
import CardsList from '../CardsList/CardsList';
import styles from './Player.module.css';
import PropTypes from 'prop-types';

const Player = ({ list, exp, isWinning }) => {
  const styleHeader = isWinning ? { color: 'green' } : { color: 'red' };

  return (
    <div className={styles.container}>
      <h2
        className={styles.header}
        style={styleHeader}
      >
        {isWinning ? 'Winning Hand' : 'Losing Hand'}
      </h2>
      <p className={styles.paragraph}>Total Experience: {exp}</p>
      <CardsList list={list} />
    </div>
  );
}

Player.propTypes = {
  list: PropTypes.array.isRequired,
  exp: PropTypes.number.isRequired,
  isWinning: PropTypes.bool.isRequired
}

export default Player;