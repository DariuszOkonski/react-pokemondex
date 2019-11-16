import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardsList.module.css';
import Card from './Card/Card';


const CardsList = ({ list }) => {
  return (
    <div className={styles.container}>
      {list.map(item =>
        <Card key={item.id} item={item} />)}
    </div>
  );
}

CardsList.propTypes = {
  list: PropTypes.array.isRequired
}

export default CardsList;

// {/* <Card name="Pokemon" type="water" exp={63} id={156} /> */}