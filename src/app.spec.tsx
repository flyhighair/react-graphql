import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import App from './app';
import { repositorySearchQuery } from './infrastructure/repo-search';

test('Display Loading', () => {
  const mocks: MockedResponse[] = [
    {
      request: {
        query: repositorySearchQuery,
      },
      result: {
        data: null,
      },
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  expect(screen.getByText('Loading...')).toBeDefined();
});

test('Display No data Message', async () => {
  const mocks: MockedResponse[] = [
    {
      request: {
        query: repositorySearchQuery,
      },
      result: {
        data: null,
      },
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  await waitFor(() => {
    expect(screen.getByText('No Data')).toBeDefined();
  });
});

test('Display Error Message', async () => {
  const mocks: MockedResponse[] = [
    {
      request: {
        query: repositorySearchQuery,
      },
      error: new Error('Failed'),
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  await waitFor(() => {
    expect(screen.getByText('Error: Failed')).toBeDefined();
  });
});

test('Display rate list', async () => {
  const mocks: MockedResponse[] = [
    {
      request: {
        query: repositorySearchQuery,
      },
      result: {
        data: {
          rates: [
            {
              currency: 'USD',
              rate: '1.02',
            },
            {
              currency: 'JPY',
              rate: '0.95',
            },
          ],
        },
      },
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );

  await waitFor(() => {
    const rateList = screen.getAllByRole('listitem');
    expect(rateList).toHaveLength(2);
    expect(rateList[0].innerHTML).toBe('USD: 1.02');
    expect(rateList[1].innerHTML).toBe('JPY: 0.95');
  });
});
