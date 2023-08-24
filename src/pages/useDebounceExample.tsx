import React, { useEffect, useState } from 'react';
import {useDebounce} from '../hooks/useDebounce';

const UseDebounceExample: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    console.log("API call")
  }, [debouncedInputValue])
  
  return (
    <div>
      <h2>useDebounce</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Debounced Value: {debouncedInputValue}</p>


    </div>
  );
};

export default UseDebounceExample;
