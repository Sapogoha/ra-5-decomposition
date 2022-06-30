import React from 'react';

import Top from '../Top';
import Middle from '../Middle';
import Bottom from '../Bottom';

/**
 * This is the main component.
 * It sticks together all parts of the page:
 * - Top
 * - Middle
 * - Bottom
 */
function Main() {
  return (
    <>
      <Top />
      <Middle />
      <Bottom />
    </>
  );
}

export default Main;
