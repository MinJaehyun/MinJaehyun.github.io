<template>
  <!-- 인사 기능 -->
  <div v-if="방문창 == true">
    <HelloAll />
  </div>

  <!-- portfolio -->
  <mjhPortfolio />
</template>

<script>
import mjhPortfolio from "./components/Card.vue";
import HelloAll from "./components/HelloAll.vue";

export default {
  name: "App",
  data() {
    return {
      방문창: true,
    };
  },
  components: { mjhPortfolio, HelloAll },
  mounted() {
    setTimeout(() => {
      this.방문창 = false
    }, 5000)
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
