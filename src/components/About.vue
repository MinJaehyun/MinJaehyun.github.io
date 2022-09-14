<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>안녕하세요.</p>
      <p>
        미니멀리즘 한 삶을 지향하며, 이를 코딩에도 적용하는 개발자 민
        재현입니다.
      </p>
      <p>
        저는 불필요한 코드를 제거하고 중복된 코드를 줄여, 작성한 코드를 타인이
        읽고, 고치기가 쉽게 하는 데 중점을 두고 있습니다.
      </p>
      <p>
        프론트는 Vue, 백엔드는 Node.js 에 관심을 두고 있으며, 애자일 방법론을
        적용하여 프로젝트를 만들고 있습니다.
      </p>
      <p>
        꾸준히 학습하고 기록하며 문제를 해결하는 개발자의 삶을 살며 회사와 같이
        성장하는 개발자를 목표로 하고 있습니다.
      </p>

      <button
        style="float: right"
        class="btn btn-primary"
        @click="redirectMyNotion()"
      >
        이력서 보러가기
      </button>
    </div>

    <!-- br, hr 제거 후 style 로 변경 -->
    <div style="margin-top: 100px"></div>
    <div style="border: solid 1px gray"></div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    redirectMyNotion: () => {
      window.open(
        'https://www.notion.so/8a839ad1cac74978bfd43ba496c6f165',
        '_blank',
      );
    },
  },
};
</script>

<style>
@import '../assets/css/card.css';
</style>
