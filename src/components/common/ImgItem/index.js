import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент, отвечающий за отрисовку кликабельного изображения.
 */

function ImgItem({ logo, alt, link }) {
  return (
    <a href={link}>
      <img src={logo} alt={alt} />
    </a>
  );
}

ImgItem.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ImgItem;
