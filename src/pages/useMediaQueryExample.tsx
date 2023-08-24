// useMediaQueryExample.tsx
import React from 'react';
import {useMediaQuery} from '../hooks/useMediaQuery';

const UseMediaQueryExample: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <h2>useMediaQuery Example</h2>
      {isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
};

export default UseMediaQueryExample;
