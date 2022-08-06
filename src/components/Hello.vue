<template>
  <div class="hello">
    <h4>방문 해주셔서 감사합니다 :)</h4>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  // FIXME: vue 이므로 mounted() 사용하여 처리, nuxt 로 리펙토링할 시, asyncData 또는 fetch 적용한다
  mounted() {
    this.$store.dispatch('HELLO_SET_TIMEOUT');
  },
};
</script>

<style>
@import '../assets/css/helloall.css';
</style>
