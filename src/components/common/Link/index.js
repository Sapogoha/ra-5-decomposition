import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент, отвечающий за отрисовку кликабельной ссылки.
 */
function Link({ href, text }) {
  return <a href={href}>{text}</a>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
