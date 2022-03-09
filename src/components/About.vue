<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>
        Back-End 개발자 민재현 입니다.<br />
        Node.JS, MongoDB 를 이용한 개발에 관심이 많습니다.<br />
        주 언어는 JavaScript 입니다.
      </p>
      <button
        style="float: right;"
        class="btn btn-primary"
        @click="redirectMyNotion()"
      >
        이력서 보러가기
      </button>
    </div>
  </div>
  <br /><br /><br />
  <hr />
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
