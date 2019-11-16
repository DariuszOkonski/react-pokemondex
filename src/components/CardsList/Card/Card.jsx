import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ item }) => {
  const { name, type, experience, id } = item;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{name}</h2>
      <div className={styles.image}>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="" />
      </div>
      <p className={styles.paragraph}>Type: <span>{type}</span></p>
      <p className={styles.paragraph}>Exp: <span>{experience}</span></p>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Card;