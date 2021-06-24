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
    return <p data-testId="result">Loading...</p>;
  }
  if (error) {
    return <p data-testId="result">Error: {error.message}</p>;
  }

  if (!data) {
    return <p data-testId="result">No Data</p>;
  }

  const rateList = data.rates.map(({ currency, rate }) => (
    <li key={currency}>
      {currency}: {rate}
    </li>
  ));

  return (
    <section data-testId="result">
      <ul>{rateList}</ul>
    </section>
  );
};

export default App;
