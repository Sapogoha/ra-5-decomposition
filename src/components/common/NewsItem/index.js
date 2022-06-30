import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import Link from '../Link';
import ImgItem from '../ImgItem';

function NewsItem({ logo, alt, link, href, text }) {
  return (
    <div className={styles.newsItem}>
      <ImgItem logo={logo} alt={alt} link={link} />
      <Link href={href} text={text} />
    </div>
  );
}

NewsItem.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsItem;
