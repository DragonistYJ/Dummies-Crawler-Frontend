<template>
  <div class="main-container">
    <div class="title-bar">
      <div class="slogan">学习“傻瓜”式爬虫，从这里开始</div>
      <div class="introduction">流程图自动生成爬虫程序，让你的数据收集工作更轻松</div>
      <img :src="require('../../assets/images/logo.png')" alt="" style="height: 10em; width: 10em"/>
    </div>
    <div class="player-container">
      <vue-core-video-player :cover="'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202006%2F13%2F20200613231825_2tKc4.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657780566&t=2ef16e7fb520eb731498345d1644b42b'"
                             :src="require('../../assets/video/show.mp4')"
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
