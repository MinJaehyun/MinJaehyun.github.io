<template>
  <div>
    <Hello v-if="$store.state.visit == true" />
    <About />
    <hr />
    <Portfolio />
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";

export default {
  name: "App",
  components: { Portfolio, Hello, About },
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
