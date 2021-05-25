import { gql } from '@apollo/client';

interface Rate {
  currency: string;
  rate: string;
}

export interface RateData {
  rates: Rate[];
}

export interface RateVars {
  currency: string;
}

export const repositorySearchQuery = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
