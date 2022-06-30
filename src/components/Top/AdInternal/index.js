import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../common/Link';
import ImgItem from '../../common/ImgItem';

import styles from './index.module.css';

function AdInternal({ ad }) {
  return (
    <div className={styles.ad}>
      <ImgItem logo={ad.logo} alt={ad.alt} link={ad.link} />
      <Link href={ad.href} text={ad.text} />
      <div>{ad.description}</div>
    </div>
  );
}

AdInternal.propTypes = {
  ad: PropTypes.shape({
    logo: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default AdInternal;
