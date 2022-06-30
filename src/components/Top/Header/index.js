import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

import Link from '../../common/Link';
import Date from '../Date';
import LinksContainer from '../../common/LinksContainer';

function Header({ headerData, date }) {
  return (
    <div className={styles.header}>
      <LinksContainer>
        {headerData.map((section) => (
          <Link key={section.id} href={section.href} text={section.text} />
        ))}
        <Date date={date} />
      </LinksContainer>
    </div>
  );
}

Header.propTypes = {
  headerData: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};

export default Header;
