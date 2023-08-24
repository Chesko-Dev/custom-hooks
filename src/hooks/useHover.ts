import { useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverRef = useRef<T>(null);
  
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    useEffect(() => {
      const element = hoverRef.current;
      if (element) {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
  
        return () => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, []);
  
    return [hoverRef, isHovered];
  };
  