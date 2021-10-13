<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>Back-End 개발을 하고 있는 민재현입니다.<br> 
        Django 를 이용한 개발에 관해 관심이 많습니다.<br>
        주로 사용하는 언어는 Python, JavaScript 입니다.
      </p>
      <button class="btn btn-primary" @click="redirectMyNotion()">
        이력서 보러가기
      </button>
    </div>
  </div><br><br><br>

  <!-- Personal Activities -->
  <div class="wrapper">
    <h1 style="text-align: left">Personal Activities</h1>
    <div class="cols">
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/500/500/)"
          >
            <div class="inner">
              <p>Deja-Vue</p>
              <span>2021.10 ~ 12</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Flask or DRF + Vue</p>
              <p>개인 프로젝트</p><br>
              <a href="" target='_blank' style="text-decoration : none; color: white" >
                진행 중
              </a>
            </div>
          </div>
        </div>
      </div>
 
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/505/505/)"
          >
            <div class="inner">
              <p>Pinterest</p>
              <span>2021.07 ~ 08</span>
            </div>
          </div>
          <div class="back">
            <div class="inner">
              <p>Django 풀스택</p>
              <p>개인 프로젝트</p><br><br>  
              <a href="https://www.weone.website/" target='_blank' style="text-decoration : none; color: white" >
                배포 링크
              </a>
              
            </div>
          </div>
        </div>
      </div>
      
      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            
            class="front"
            style="background-image: url(https://unsplash.it/506/506/)" 
          >
            <div class="inner">
              <p>BiBa</p>
              <span>2020.10 ~ 11(4주)</span>
            </div>
          </div>
          <div class="back">
            <div class="inner" >
              <p>NojeJS, Express</p>
              <p>팀 프로젝트</p><br><br>
              <a href="https://github.com/codestates/Biba-Server" target='_blank' style="text-decoration : none; color: white">
              깃헙 링크
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col" ontouchstart="this.classList.toggle('hover');">
        <div class="container">
          <div
            class="front"
            style="background-image: url(https://unsplash.it/508/508/)"
          >
            <div class="inner">
              <p>Changango</p>
              <span>2020.09 ~ 09(2주)</span>
            </div>
          </div>
          <div class="back">
            <div class="inner" style="text-decoration : none; color: white">
            <p>NojeJS, Express</p>
            <p>팀 프로젝트</p>
               내가 읽은 책, 그 때 그 느낌 그대로<br><br>
              <a href="https://github.com/MinJaehyun/chaegjango_server" target='_blank' style="text-decoration : none; color: white" >
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
