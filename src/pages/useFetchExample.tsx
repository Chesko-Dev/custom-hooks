// useFetchExample.tsx
import React from 'react';
import {useFetch} from '../hooks/useFetch';

const UseFetchExample: React.FC = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <div>
      <h2>useFetch Example</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      )}
    </div>
  );
};

export default UseFetchExample;
