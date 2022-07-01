import React from 'react';

import styles from './index.module.css';

import Search from './Search';
import SearchForm from './SearchForm';
import Banner from './Banner';

import { sections, logo, slogan, banner } from '../data';

/**
 * Компонент, отвечающий за отрисовку средней трети страницы.
 */

function Middle() {
  return (
    <div>
      <Search sections={sections} logo={logo} slogan={slogan} />
      <div>
        <SearchForm logo={logo} />
      </div>
      <div className={styles.slogan}>{slogan}</div>
      <div className={styles.banner}>{<Banner banner={banner} />}</div>
    </div>
  );
}

export default Middle;
