<template>
  <!-- About -->
  <div class="wrapper">
    <div style="text-align: left">
      <h1 style="text-align: left">About</h1>
      <p>Back-End 개발을 하고 있는 민재현입니다.<br> 
        Django 를 이용한 개발에 관해 관심이 많습니다.<br>
        주로 사용하는 언어는 Python, JavaScript 입니다.
      </p>
      <!-- bootstrap 으로 버튼 설정하기: TODO -->
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
              <a href="" style="text-decoration : none; color: white" >
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
              <a href="https://www.weone.website/" style="text-decoration : none; color: white" >
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
              <a href="https://github.com/codestates/Biba-Server" style="text-decoration : none; color: white">
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
            <p>팀 프로젝트</p><br><br>
               내가 읽은 책, 그 때 그 느낌 그대로
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
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h1 {
  font-size: 2.5rem;
  font-family: "Montserrat";
  font-weight: normal;
  color: #444;
  text-align: center;
  margin: 2rem 0;
}

.wrapper {
  width: 90%;
  margin: 0 auto;
  max-width: 80rem;
}

.cols {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.col {
  width: calc(25% - 2rem);
  margin: 1rem;
  cursor: pointer;
}

.container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back {
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-position: center;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 280px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
}

.back {
  background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.6;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}
.container:hover .front,
.container:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.container .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 4rem;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -0.75rem;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Montserrat";
  font-weight: 300;
}

@media screen and (max-width: 64rem) {
  .col {
    width: calc(33.333333% - 2rem);
  }
}

@media screen and (max-width: 48rem) {
  .col {
    width: calc(50% - 2rem);
  }
}

@media screen and (max-width: 32rem) {
  .col {
    width: 100%;
    margin: 0 0 2rem 0;
  }
}
</style>
