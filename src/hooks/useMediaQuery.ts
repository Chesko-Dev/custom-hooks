import { useState, useEffect } from "react";

export const useMediaQuery = (query: string) => {
    const mediaQuery = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaQuery.matches);
  
    useEffect(() => {
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
  
      mediaQuery.addEventListener("change", listener);
  
      return () => {
        mediaQuery.removeEventListener("change", listener);
      };
    }, [query]);
  
    return matches;
  };
  