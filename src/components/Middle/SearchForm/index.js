import React from 'react';
import PropTypes from 'prop-types';

import ImgItem from '../../common/ImgItem';

import styles from './index.module.css';

function SearchForm({ logo }) {
  return (
    <div className={styles.searchBlock}>
      <ImgItem logo={logo.logo} alt={logo.alt} link={logo.link} />
      <div className={styles.form}>SearchForm</div>
    </div>
  );
}

SearchForm.propTypes = {
  logo: PropTypes.shape({
    logo: PropTypes.string,
    alt: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default SearchForm;
