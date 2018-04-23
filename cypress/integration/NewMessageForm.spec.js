import mountVue from 'cypress-vue-unit-test';
import NewMessageForm from '../../src/components/NewMessageForm';

describe('NewMessageForm', () => {
  beforeEach(mountVue(NewMessageForm));

  describe('clicking the save button', () => {
    beforeEach(() => {
      cy.get("[data-test='messageText']")
        .type('New message');

      cy.get("[data-test='saveButton']")
        .click();
    });

    it('clears the text field', () => {
      cy.get("[data-test='messageText']")
        .should('have.value', '');
    });
  });
});
