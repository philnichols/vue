<template>
  <div>
    <input
      type="text"
      data-test="messageText"
      v-model="inputText"
    />
    <button
      data-test="saveButton"
      @click="save"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'new-message-form',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    save() {
      this.inputText = '';
    },
  },
};
</script>
