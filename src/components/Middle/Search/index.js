import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../common/Link';
import LinksContainer from '../../common/LinksContainer';

function Search({ sections }) {
  return (
    <div>
      <LinksContainer>
        {sections.map((section) => (
          <Link key={section.id} href={section.href} text={section.text} />
        ))}
      </LinksContainer>
    </div>
  );
}

Search.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Search;
