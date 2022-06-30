import React from 'react';

import Widget from './Widget';

import styles from './index.module.css';

function Bottom() {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <Widget />
        <Widget />
      </div>
      <div className={styles.middleColumn}>
        <Widget />
        <Widget />
      </div>
      <div className={styles.column}>
        <Widget />
      </div>
    </div>
  );
}

export default Bottom;
