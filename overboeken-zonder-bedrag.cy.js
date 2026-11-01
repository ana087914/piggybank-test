describe('Geld overmaken zonder bedrag', () => {
  it('laat geen overboeking toe zonder bedrag', () => {
    cy.visit('http://localhost:3000/login');

    cy.contains('Sara').click();
    cy.contains('Overboeken').click();

    cy.get('input[type="number"]')
      .should('have.value', '');

    cy.get('textarea').type('niks');

    cy.contains('button', 'Overboeken').click();

    cy.get('input[type="number"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
      expect($input[0].validationMessage).to.not.equal('');
    });

    cy.url().should('include', '/transfer');
  });
});