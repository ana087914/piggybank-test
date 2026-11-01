describe('Inloggen als Sara', () => {
  it('opent het overzicht van Sara', () => {
    cy.visit('http://localhost:3000/login');

    cy.contains('button', 'Sara').click();

    cy.url().should('eq', 'http://localhost:3000/');
    cy.contains('h1', 'Welkom').should('be.visible');
    cy.contains('h2', 'Jouw account').should('be.visible');
    cy.contains('Rekening van Sara').should('be.visible');
  });
});
