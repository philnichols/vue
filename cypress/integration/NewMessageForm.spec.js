import mountVue from 'cypress-vue-unit-test';
import NewMessageForm from '../../src/components/NewMessageForm.vue';

describe('NewMessageForm', () => {
  beforeEach(mountVue(NewMessageForm));

  describe('clicking the save button', () => {
    let spy;

    beforeEach(() => {
      spy = cy.spy();
      Cypress.vue.$on('save', spy);

      cy.get("[data-test='messageText']")
        .type('New message');

      cy.get("[data-test='saveButton']")
        .click();
    });

    it('clears the text field', () => {
      cy.get("[data-test='messageText']")
        .should('have.value', '');
    });

    it('emits the "save" event', () => {
      expect(spy).to.have.been.calledWith('New message');
    });
  });
});
