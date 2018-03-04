import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NewMessageForm from '@/components/NewMessageForm';

describe('NewMessageForm.vue via vue-test-utils', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NewMessageForm);
  });

  it('receives text input', () => {
    let messageField = wrapper.find("[data-test='messageText']");
    messageField.element.value = 'New message';
    messageField.trigger('input');

    messageField = wrapper.find("[data-test='messageText']");
    expect(messageField.element.value).to.eq('New message');
  });

  describe('clicking the save button', (done) => {
    beforeEach(() => {
      const messageField = wrapper.find("[data-test='messageText']");
      messageField.element.value = 'New message';
      messageField.trigger('input');

      wrapper.find("[data-test='saveButton']").trigger('click');
    });

    it('clears the text field', () => {
      const messageField = wrapper.find("[data-test='messageText']");
      expect(messageField.element.value).to.eq('');
    });

    it('emits the save event', () => {
      expect(wrapper.emitted().save.length).to.eq(1);
    });
  });
});
