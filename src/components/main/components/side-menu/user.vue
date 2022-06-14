<template>
  <div class="user-avatar-dropdown">
    <a-dropdown class="user-avatar" @on-click="handleClick">
      <a-avatar
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202001%2F04%2F20200104191014_slfum.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657777815&t=ed8d44d4fdb74a4477f5bb55d3fce7df"
          size="large"/>
      <a-avatar size="large" v-if="userInfo.nickname">{{ userInfo.nickname }}</a-avatar>
      <a-avatar icon="user" size="large" v-else></a-avatar>
      <a-icon :size="18" type="md-arrow-dropdown"></a-icon>
      <a-menu v-if="userInfo.status" slot="overlay">
        <a-menu-item key="logout">退出登录</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { logout } from '@/api/user.js'

export default {
  computed: {
    userInfo() {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    handleClick(name) {
      switch (name) {
        case 'logout':
          this.logout()
          break
      }
    },
    logout() {
      logout(
          data => {
            this.$store.commit('initUserInfo', this)
          },
          data => {
            this.$store.commit('initUserInfo', this)
          }
      )
    }
  },
  mounted() {
    console.log(this.userInfo)
  }
}
</script>
<style lang="less">
.main {
  .center {
    margin: auto;
    width: 25%;
    height: 5%;
    padding-bottom: 30%;

    &-avatar-dropdown {
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
    }
  }
}
</style>
