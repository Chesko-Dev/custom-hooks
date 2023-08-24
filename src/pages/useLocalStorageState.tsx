// useLocalStorageExample.tsx
import React from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState'; 

const UseLocalStorageExample: React.FC = () => {
  const [name, setName] = useLocalStorageState('name', '');

  return (
    <div>
      <h2>useLocalStorage Example</h2>
      <p>Name: {name || 'No name stored'}</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseLocalStorageExample;
