<template>
  <!-- 인사 기능 -->
  <div v-if="방문창 == true" >
    <HelloAll />
  </div>
  
  <!-- About -->
  <About />

  <!-- portfolio -->
  <div class="wrapper">
    <h1 style="text-align: left">Personal Activities</h1>
    <div class="cols">
      <Card :post="post[i]" v-for="a,i in post" :key="i" />
    </div>
  </div>

</template>

<script>
import Card from "./components/Card.vue"
import HelloAll from "./components/HelloAll.vue"
import About from "./components/About.vue"
import post from "./assets/data/post"

export default {
  name: "App",
  data() {
    return {
      방문창: true,
      post: post,
    };
  },
  components: { Card, HelloAll, About },
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
