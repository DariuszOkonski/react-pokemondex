import React from 'react';
import CardsList from '../CardsList/CardsList';
import styles from './Player.module.css';
import PropTypes from 'prop-types';

const Player = ({ list, name, exp }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{name}</h2>
      <p className={styles.paragraph}>Total Experience: {exp}</p>
      <CardsList list={list} />
    </div>
  );
}

Player.propTypes = {
  list: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  exp: PropTypes.number.isRequired
}

export default Player;