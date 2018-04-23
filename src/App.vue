<template>
  <div>
    <new-message-form @save="addMessage" />
  </div>
</template>

<script>
import NewMessageForm from './components/NewMessageForm';

export default {
  name: 'App',
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
