import { useEffect, useState } from "react";

export const useKeyPress = (targetKey: string) => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(true);
      }
    };
  
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("keyup", onKeyUp);
  
      return () => {
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
      };
    }, [targetKey]);
  
    return keyPressed;
  };
  