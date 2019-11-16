import React from 'react';
import loading from '../../img/loading.gif';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="loading" />
    </div>
  );
}

export default Loading;