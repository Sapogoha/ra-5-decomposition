import React from 'react';
import PropTypes from 'prop-types';

import ImgItem from '../../common/ImgItem';

function Banner({ banner }) {
  return <ImgItem logo={banner.logo} alt={banner.alt} link={banner.link} />;
}

Banner.propTypes = {
  banner: PropTypes.shape({
    logo: PropTypes.string,
    alt: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
};

export default Banner;
