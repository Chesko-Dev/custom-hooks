import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (err:any) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, loading, error };
  };
  