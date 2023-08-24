import { useEffect } from "react";

export const useEventListener = (
    eventName: string,
    handler: (event: Event) => void,
    element: EventTarget = window
  ) => {
    useEffect(() => {
      const eventListener = (event: Event) => handler(event);
      element.addEventListener(eventName, eventListener);
  
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, handler, element]);
  };
  