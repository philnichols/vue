import Vue from 'vue';
import NewMessageForm from '@/components/NewMessageForm';
import { spy } from 'sinon';

describe('NewMessageForm.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(NewMessageForm);
    vm = new Constructor().$mount();
  });

  it('receives text input', () => {
    let messageField = vm.$el.querySelector("[data-test='messageText']");

    messageField.value = 'New message';
    messageField.dispatchEvent(new window.Event('input'));
    vm._watcher.run();

    messageField = vm.$el.querySelector("[data-test='messageText']");
    expect(messageField.value).to.eq('New message');
  });

  describe('clicking the save button', (done) => {
    let spy;

    beforeEach(() => {
      spy = sinon.spy();
      vm.$on('save', spy);

      const messageTextField = vm.$el.querySelector("[data-test='messageText']");
      messageTextField.value = 'New message';
      messageTextField.dispatchEvent(new window.Event('input'));
      vm._watcher.run();

      const saveButton = vm.$el.querySelector("[data-test='saveButton']");
      saveButton.click();
      vm._watcher.run();
    });

    it('clears the text field', () => {
      const messageField = vm.$el.querySelector("[data-test='messageText']");
      expect(messageField.value).to.eq('');
    });

    it('emits the save event', () => {
      expect(spy).to.have.been.calledWith('New message');
    });
  });
});
