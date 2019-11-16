import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleClick }) => {
  return (
    <button className={styles.button}
      onClick={handleClick}
    >Play</button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Button;