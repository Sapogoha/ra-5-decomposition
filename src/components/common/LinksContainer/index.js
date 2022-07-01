import React from 'react';

/**
 * Компонент-обертка для группы кликабельных ссылок
 */

function LinksContainer(props) {
  return <div className="linksContainer">{props.children}</div>;
}

export default LinksContainer;
