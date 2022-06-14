<template>
  <div class="main-container">
    <div class="title-bar">
      <div class="slogan">学习“傻瓜”式爬虫，从这里开始</div>
      <div class="introduction">流程图自动生成爬虫程序，让你的数据收集工作更轻松</div>
      <img :src="require('../../assets/images/logo.png')" alt="" style="height: 10em; width: 10em"/>
    </div>
    <div class="player-container">
      <vue-core-video-player :cover="'https://img1.wxzxzj.com/vpc-example-cover-the-garden.png'"
                             :src="'https://www.bilibili.com/bangumi/play/ss12044/?from=search&seid=9670386519186098373'"
                             @loadedmetadata="loaded"
                             @play="playFunc"
                             @pause="pauseFunc"
                             @error="errorHandle"/>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    loaded() {
      // ...
    },
    playFunc() {
      // ...
    },
    pauseFunc() {
      // ...
    },
    errorHandle(e) {
      // ...
    }
  }
}
</script>
<style>
.main-container {
  height: 100%;
  width: 100%;
  background-color: rgba(146, 180, 236, 0.4);
}

.title-bar {
  width: 60%;
  height: 40%;
  padding-top: 5%;
  margin: 0 auto;
  text-align: center;
}

.slogan {
  color: white;
  font-size: 45px;
  padding-bottom: 20px;
}

.introduction {
  color: white;
  padding-bottom: 10px;
}

.player-container {
  width: 75%;
  height: 60%;
  margin: 0 auto;
}

</style>
