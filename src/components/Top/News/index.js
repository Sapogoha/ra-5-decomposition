import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import NewsItem from '../../common/NewsItem';

function News({ news }) {
  return (
    <div className={styles.news}>
      {news.map((item) => (
        <NewsItem
          className={styles.item}
          key={item.id}
          logo={item.logo}
          alt={item.alt}
          link={item.link}
          href={item.href}
          text={item.text}
        />
      ))}
    </div>
  );
}

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default News;
