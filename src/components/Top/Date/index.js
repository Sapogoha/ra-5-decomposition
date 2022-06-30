import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

function Date({ date }) {
  return <div className={styles.date}>{date}</div>;
}

Date.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Date;
