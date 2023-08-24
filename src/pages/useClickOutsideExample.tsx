// useClickOutsideExample.tsx
import React, { useRef, useState } from 'react';
import {useClickOutside} from '../hooks/useClickOutside';

const UseClickOutsideExample: React.FC = () => {
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  return (
    <div>
      <h2>useClickOutside Example</h2>
      <div
        className="dropdown"
        ref={dropdownRef}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        Dropdown
        {isDropdownOpen && <div className="dropdown-content">Dropdown Content</div>}
      </div>
    </div>
  );
};

export default UseClickOutsideExample;
