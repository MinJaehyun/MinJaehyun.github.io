<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>
        Back-End 개발을 하고 있는 민재현입니다.<br />
        Node.JS 를 이용한 개발에 관해 관심이 많습니다.<br />
        주로 사용하는 언어는 Node.JS, JavaScript, Python 입니다.
      </p>
      <button class="btn btn-primary" @click="redirectMyNotion()">
        이력서 보러가기
      </button>
    </div>
  </div><br/><br/><br/>
</template>

<script>
export default {
    name: "About",
    methods: {
        redirectMyNotion: function() {
        window.open("https://www.notion.so/8a839ad1cac74978bfd43ba496c6f165", "_blank");
        }
    },
};
</script>

<style>
@import '../assets/css/card.css';
</style>
