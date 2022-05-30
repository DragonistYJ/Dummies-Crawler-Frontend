<template>
  <a-layout class="side-menu-wrapper">
    <a-layout-header class="header">
      <div class="h1">{{appNameCh}}</div>
      <div class="divider">{{appNameEn}}</div>
    </a-layout-header>
    <!-- 用户信息 -->
    <div class="center">
      <user></user>
    </div>
    <a-layout-content class="content">
      <!-- 组装菜单 -->
      <side-menu-item :isCollapsed="isCollapsed" :menu-list="menuList"></side-menu-item>
    </a-layout-content>
  </a-layout>
</template>
<script>
import SideMenuItem from './side-menu-item.vue'
import User from './user.vue'

export default {
  name: 'SideMenu',
  components: {
    SideMenuItem,
    User
  },
  props: {
    // 需要展示的菜单
    menuList: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否展开
    isCollapsed: Boolean
  },
  computed: {
    appNameEn() {
      return this.$config.appNameEn
    },
    appNameCh() {
      return this.$config.appNameCh
    },
    activeName() {
      return this.$route.name
    },
    openNames() {
      let openNames = []
      for (let i = 0; i < this.$route.matched.length; i++) {
        openNames.push(this.$route.matched[i].name)
      }
      return openNames
    }
  }
}
</script>
<style lang="less">
@import './side-menu.less';
</style>
