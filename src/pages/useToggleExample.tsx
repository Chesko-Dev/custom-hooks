// useToggleExample.tsx
import React from 'react';
import {useToggle} from '../hooks/useToggle';

const UseToggleExample: React.FC = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <h2>useToggle Example</h2>
      <p>Toggle: {isToggled ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default UseToggleExample;
