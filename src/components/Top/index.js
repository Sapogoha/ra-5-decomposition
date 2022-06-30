import React from 'react';
import Header from './Header';
import News from './News';
import Rate from './Rate';
import AdInternal from './AdInternal';

import styles from './index.module.css';

import { ad, headerData, news, rates, date } from '../data';

function Top() {
  return (
    <div className={styles.header}>
      <div className={styles.top}>
        <Header headerData={headerData} date={date} />
        <div className={styles.main}>
          <div className={styles.news}>
            <News news={news} />
            <Rate rates={rates} />
          </div>
          <div className={styles.img}>
            <AdInternal ad={ad} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
