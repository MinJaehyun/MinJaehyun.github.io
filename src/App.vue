<template>
  <div>
    <Hello v-if="visit == true" />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { Portfolio, Hello, About },
  computed: {
    ...mapState(['visit']),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
