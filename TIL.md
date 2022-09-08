# Today's Improvements

### 22/09/08
    1. [v] netlify 배포 서버 에러 
      - 로컬 서버 실행 해도 에러가 나타나지 않는다
      - netlify Deploy log 에러 부분 확인하니 아래와 같다
      - Module not found: Error: Can't resolve '../assets/css/helloAll.css' in '/opt/build/repo/src/components'
      - 컴포넌트에서 helloAll.css 를 가져오지 못한다.
      - 이 전에는 대소문자 섞어써도 에러 안 났었다.
      - 파일명 카멜케이스로 만들었는데, 이를 소문자로만 변경하여 해결
    
    2. [v] 정리 및 개선할 점 찾기
    3. [v] vue 를 vuex 로 변경하기
    4. [v] shopping mall 주석 처리
      
### 22/08/06
    1. package.json 안에 eslint 설정 내용을 .eslintrc.json 파일로 분리 및 설정
    2. prettier 설정
    3. 불필요한 파일 제거
        - vue/more0~1.json 
        
### 22/04/29
    1. Update portfolio 

### 22/03/27
    1. [v] 깃헙 링크와 배포 링크를 분기 처리함
     - v-if="item.back.url.includes('https://github.com/')"