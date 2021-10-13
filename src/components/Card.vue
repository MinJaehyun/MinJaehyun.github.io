<template>
  <!-- Personal Activities -->
  <div class="col" ontouchstart="this.classList.toggle('hover');">
    <div class="container">
      <div class="front" :style="{ backgroundImage: `url(${post.front.url})` }">
        <div class="inner">
          <p>{{ post.front.title }}</p>
          <span>{{ post.front.date }}</span>
        </div>
      </div>
      <div class="back">
        <div class="inner">
          <p>{{ post.back.title }}</p>
          <p>{{ post.back.content }}</p>
          <br />
          <!-- 만약 ??==?? 이면 깃헙 링크 나타내고, 만약 ??==?? 이면 배포 링크 나태내고, 만약 ??==?? 이면 진행 중 나타낸다. -->
          <!-- 정규표현식 말고, indexOf 로 1,-1 처리하거나 또는 includes 로 true,false 처리하는 방법? TODO -->
          <!-- <div>
            <div v-if="??==??">

            </div>
          </div> -->
          <a
            :href="post.back.url"
            target="_blank"
            style="text-decoration : none; color: white"
          >
            배포 or 깃헙 링크
          </a>
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
