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
  name: 'NewMessageForm',
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    save() {
      this.$emit('save', this.inputText);
      this.inputText = '';
    },
  },
};
</script>
