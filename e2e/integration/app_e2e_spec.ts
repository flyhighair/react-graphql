/// <reference types="Cypress" />

const getTarget = (id: string) => `[data-testId="${id}"]`;

describe('App Component', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://48p1r2roz4.sse.codesandbox.io', (req) => {
      req.alias = 'gqlGetRatesQuery';
    });
  });

  it('Return API Data', () => {
    cy.visit('/');
    cy.wait('@gqlGetRatesQuery').get(getTarget('result')).not('p');
  });
});
