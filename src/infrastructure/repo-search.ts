import { gql } from '@apollo/client';

export const repositorySearchQuery = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
