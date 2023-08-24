// useKeyPressExample.tsx
import React from 'react';
import {useKeyPress} from '../hooks/useKeyPress';

const UseKeyPressExample: React.FC = () => {
  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <h2>useKeyPress Example</h2>
      <p>Press the Enter key: {isEnterPressed ? 'Pressed' : 'Not pressed'}</p>
    </div>
  );
};

export default UseKeyPressExample;
