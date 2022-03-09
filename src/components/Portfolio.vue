<template>
  <div class="wrapper">
    <h1 style="text-align: left;">
      Personal Activities
    </h1>
    <button style="float: right;" class="btn btn-primary" @click="ascendingNew">
      최신순 정렬
    </button>
    <div class="row">
      <!-- v-for -->
      <div
        class="col-lg-4 mb-4"
        ontouchstart="this.classList.toggle('hover');"
        v-for="item in $store.state.post"
        :key="item"
      >
        <div class="container">
          <!-- front -->
          <div
            class="front"
            :style="{
              backgroundImage: `url(${item.front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ item.front.title }}</p>
              <span>{{ item.front.date }}</span>
            </div>
          </div>
          <!-- back -->
          <div class="back">
            <div class="inner">
              <p>{{ item.back.title }}</p>
              <p>{{ item.back.content }}</p>
              <br />
              <a
                :href="item.back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                배포 링크
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "Portfolio",
  methods: {
    ascendingNew() {
      this.$store.state.post.sort(function(a, b) {
        return b.id - a.id;
      });
    },
  },
};
</script>

<style>
@import "../assets/css/card.css";
</style>
