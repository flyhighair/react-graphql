const getTarget = (id: string) => `[data-testId="${id}"]`;

describe('App Component', () => {
  it('Match title text', () => {
    cy.visit('/');

    cy.get(getTarget('title')).contains('Hello World');
  });
});
