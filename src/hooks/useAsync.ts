import { useState } from "react";

export const useAsync = <T, E = any>(
    asyncFunction: () => Promise<T>
  ): [T | null, boolean, E | null,  () => Promise<void>] => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<E | null>(null);
  
    const execute = async () => {
      setLoading(true);
      try {
        const response = await asyncFunction();
        setData(response);
      } catch (err:any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    return [data, loading, error, execute];
  };
  