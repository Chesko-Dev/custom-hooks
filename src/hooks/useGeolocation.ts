import { useState, useEffect } from "react";

export const useGeolocation = () => {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      };
  
      const success = (pos: GeolocationPosition) => {
        setPosition(pos);
      };
  
      const failure = (err: GeolocationPositionError) => {
        setError(err.message);
      };
  
      navigator.geolocation.getCurrentPosition(success, failure, options);
    }, []);
  
    return { position, error };
  };
  