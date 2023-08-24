// useScrollPositionExample.tsx
import React from 'react';
import {useScrollPosition} from '../hooks/useScrollPosition';

const UseScrollPositionExample: React.FC = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div>
      <h2>useScrollPosition Example</h2>
      <p>Scroll Position: {scrollPosition}px</p>
      <div style={{ height: '1000px', background: '#f0f0f0' }}>
        Scroll down to see the effect
      </div>
    </div>
  );
};

export default UseScrollPositionExample;
