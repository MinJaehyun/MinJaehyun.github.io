<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>
        풀스택을 지향하는 개발자 민재현 입니다.<br />
        Node.JS, Vue 개발에 관심을 가지고 있습니다.<br />
      </p>
      <button
        style="float: right;"
        class="btn btn-primary"
        @click="redirectMyNotion()"
      >
        이력서 보러가기
      </button>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    redirectMyNotion: function() {
      window.open(
        "https://www.notion.so/8a839ad1cac74978bfd43ba496c6f165",
        "_blank"
      );
    },
  },
};
</script>

<style>
@import "../assets/css/card.css";
</style>
