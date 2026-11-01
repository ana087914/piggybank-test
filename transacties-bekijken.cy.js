describe('Transacties bekijken', () => {
  it('toont het transactieoverzicht van Sara', () => {
    cy.visit('http://localhost:3000/login');
    cy.contains('button', 'Sara').click();
    cy.contains('Transacties').click();

    cy.url().should('include', '/transactions');
    cy.contains('h1', 'Transactie overzicht').should('be.visible');
    cy.get('main').should('contain.text', '€');
  });
});
