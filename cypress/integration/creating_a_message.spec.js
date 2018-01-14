describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:8080');

    cy.get("[data-test='messageText']")
      .type('New message');

    cy.get("[data-test='saveButton']")
      .click();

    cy.get("[data-test='messageText']")
      .should('have.value', '');

    cy.contains('New message');
  });
});
