<template>
  <!-- Personal Activities -->
  <div class="wrapper">
    <h1 style="text-align: left">Personal Activities</h1>
    <div class="row">
      <div class="col-lg-4 mb-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            :style="{
              backgroundImage: `url(${$store.state.post[4].front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ $store.state.post[4].front.title }}</p>
              <span>{{ $store.state.post[4].front.date }}</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{ $store.state.post[4].back.title }}</p>
              <p>{{ $store.state.post[4].back.content }}</p>
              <br />
              <a
                :href="$store.state.post[4].back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                깃헙 링크
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            :style="{
              backgroundImage: `url(${$store.state.post[3].front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ $store.state.post[3].front.title }}</p>
              <span>{{ $store.state.post[3].front.date }}</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{ $store.state.post[3].back.title }}</p>
              <p>{{ $store.state.post[3].back.content }}</p>
              <br />
              <a
                :href="$store.state.post[3].back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                배포 링크
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            :style="{
              backgroundImage: `url(${$store.state.post[2].front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ $store.state.post[2].front.title }}</p>
              <span>{{ $store.state.post[2].front.date }}</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{ $store.state.post[2].back.title }}</p>
              <p>{{ $store.state.post[2].back.content }}</p>
              <br />
              <a
                :href="$store.state.post[2].back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                깃헙 링크
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            :style="{
              backgroundImage: `url(${$store.state.post[1].front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ $store.state.post[1].front.title }}</p>
              <span>{{ $store.state.post[1].front.date }}</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{ $store.state.post[1].back.title }}</p>
              <p>{{ $store.state.post[1].back.content }}</p>
              <br />
              <a
                :href="$store.state.post[1].back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                깃헙 링크
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            :style="{
              backgroundImage: `url(${$store.state.post[0].front.url})`,
            }"
          >
            <div class="inner">
              <p>{{ $store.state.post[0].front.title }}</p>
              <span>{{ $store.state.post[0].front.date }}</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>{{ $store.state.post[0].back.title }}</p>
              <p>{{ $store.state.post[0].back.content }}</p>
              <br />
              <a
                :href="$store.state.post[0].back.url"
                target="_blank"
                style="text-decoration : none; color: white"
              >
                깃헙 링크
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    post: Array,
  },
};
</script>

<style>
@import "../assets/css/card.css";
</style>
