<template>
  <div>
    <!-- 상단 -->
    <div v-if="$store.state.visit == true">
      <Hello />
    </div>
    <!-- 중단 -->
    <About />
    <hr />
    <!-- 하단 -->
    <Portfolio />
    <hr />
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
