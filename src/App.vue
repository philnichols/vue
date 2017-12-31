<template>
  <div>
    <new-message-form v-on:save="addMessage"/>
    <message-list :messages="messages"/>
  </div>
</template>

<script>
import NewMessageForm from './components/NewMessageForm';
import MessageList from './components/MessageList';

export default {
  name: 'app',
  components: {
    NewMessageForm,
    MessageList,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    addMessage(text) {
      this.messages.unshift(text);
    },
  },
};
</script>

<style>
</style>
