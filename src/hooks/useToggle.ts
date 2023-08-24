import { useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
    const [value, setValue] = useState<boolean>(initialValue);
  
    const toggle = () => {
      setValue((prevValue) => !prevValue);
    };
  
    return [value, toggle] as const;
  };
  