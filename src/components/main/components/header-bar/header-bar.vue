<template>
  <div class="header-bar">
    <div class="header-bar-left">
      <a-icon :type="'left-square'" @click="goBack" class="backicon"></a-icon>
      <custom-bread-crumb :list="$route.matched"></custom-bread-crumb>
    </div>
    <!-- <div class="header-bar-right">
      <user></user>
    </div> -->
  </div>
</template>
<script>
// import { BackTop } from 'ant-design-vue'
import CustomBreadCrumb from './custom-bread-crumb.vue'
// import User from './user.vue'
export default {
  components: {
    CustomBreadCrumb
    // User
  },
  props: {
    // 是否展开
    isCollapsed: Boolean
  },
  computed: {
    rotateIcon() {
      return this.isCollapsed ? 'menu-unfold' : 'menu-fold'
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
.main {
  .header-bar {
    width: 100%;
    height: 100%;
    position: relative;
    padding-right: 10px;
    background-color: #92B4EC;
    color: #FFE69A;
  }
  .header-bar-left {
    display: inline-flex;
  }
  .header-bar-right {
    float: right;
    height: auto;
    & > * {
      float: right;
    }
  }
  .backicon{
    font-size: xx-large;
    color: #FFFFFF;
    padding-left: 20px;
    padding-top: 15px;
  }
}
</style>
