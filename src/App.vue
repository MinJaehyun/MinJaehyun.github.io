<template>
  <!-- 환영 인사 -->
  <div v-if="방문창 == true">
    <HelloAll />
  </div>

  <!-- About -->
  <About />

  <!-- portfolio -->
  <Card /> 

</template>

<script>
import Card from "./components/Card.vue";
import HelloAll from "./components/HelloAll.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  data() {
    return {
      방문창: true,
    };
  },
  components: { Card, HelloAll, About },   
  mounted() {
    setTimeout(() => {
      this.방문창 = false;
    }, 5000);
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
