describe('Geld overmaken', () => {
  it('maakt 1 euro over naar Cem', () => {
    cy.visit('http://localhost:3000/login');
    cy.contains('button', 'Sara').click();
    cy.contains('Overboeken').click();

    cy.get('select[name="toaccount"]').select('3');
    cy.get('select[name="currency"]').select('EURO');
    cy.get('input[name="amount"]').type('1');
    cy.get('textarea[name="description"]').type('Cypress test');
    cy.contains('button', 'Overboeken').click();

    cy.contains('h1', 'Gelukt!').should('be.visible');
    cy.contains('Het is gelukt om € 1 over te maken!').should('be.visible');
  });
});
