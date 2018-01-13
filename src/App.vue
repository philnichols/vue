<template>
  <div>
    <new-message-form v-on:save="addMessage"/>
  </div>
</template>

<script>
import NewMessageForm from './components/NewMessageForm';

export default {
  name: 'app',
  components: {
    NewMessageForm,
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
