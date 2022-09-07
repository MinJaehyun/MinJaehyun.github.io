<template>
  <div class="hello">
    <h4>방문 해주셔서 감사합니다 :)</h4>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  mounted() {
    this.$store.dispatch('HELLO_SET_TIMEOUT');
  },
};
</script>

<style>
@import '../assets/css/helloall.css';
</style>
