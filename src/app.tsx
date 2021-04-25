import { useQuery } from '@apollo/client';
import { repositorySearchQuery } from './infrastructure/repo-search';
import React from 'react';

const App = () => {
  const { loading, error, data } = useQuery(repositorySearchQuery);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};

export default App;
