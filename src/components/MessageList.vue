<template>
  <ul>
    <li v-for="message in messages" :key="message">{{ message }}</li>
  </ul>
</template>

<script>
export default {
  name: 'message-list',
  props: ['messages'],
};
</script>
