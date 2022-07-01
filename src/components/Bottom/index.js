import React from 'react';

import Widget from './Widget';

import styles from './index.module.css';

/**
 * Компонент, отвечающий за отрисовку нижней трети страницы.
 * В Widget должны передаваться href и text для отрисовки заголовка, и другие данные для наполнения каждого контейнера. Наверное, логично реализовать при помощи props.children
 */

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
