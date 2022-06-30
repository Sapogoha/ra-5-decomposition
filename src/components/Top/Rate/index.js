import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function Rate({ rates }) {
  return (
    <div className={styles.rates}>
      {rates.map((rate) => (
        <div key={rate.id} className={styles.wraper}>
          <div className={styles.asset}>{rate.asset}</div>
          <div className={styles.rate}>{rate.rate}</div>
          <div className={styles.change}>{rate.change}</div>
        </div>
      ))}
    </div>
  );
}

Rate.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rate;
