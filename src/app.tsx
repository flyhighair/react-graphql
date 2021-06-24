import { useQuery } from '@apollo/client';
import {
  RateData,
  RateVars,
  repositorySearchQuery,
} from './infrastructure/repo-search';
import React from 'react';

const App: React.FC = () => {
  const { loading, error, data } = useQuery<RateData, RateVars>(
    repositorySearchQuery,
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return <p>No Data</p>;
  }

  const rateList = data.rates.map(({ currency, rate }) => (
    <li key={currency}>
      {currency}: {rate}
    </li>
  ));

  return (
    <section>
      <ul>{rateList}</ul>
    </section>
  );
};

export default App;
