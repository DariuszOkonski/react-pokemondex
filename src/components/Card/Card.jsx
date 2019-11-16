import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ name, type, exp, id }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{name}</h2>
      <div className={styles.image}>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="" />
      </div>
      <p className={styles.paragraph}>Type: <span>{type}</span></p>
      <p className={styles.paragraph}>Exp: <span>{exp}</span></p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  exp: PropTypes.number.isRequired
}

export default Card;