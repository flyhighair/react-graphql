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
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return <p>No Data</p>;
  }

  const rateList = data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));

  return <section>{rateList}</section>;
};

export default App;
