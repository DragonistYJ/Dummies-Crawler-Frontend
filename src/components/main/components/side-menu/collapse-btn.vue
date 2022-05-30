<template>
  <div class="collapse-btn">
    <a-icon
      :type="rotateIcon"
      @click.native="collapsedSider"
    ></a-icon>
  </div>
</template>
<script>
export default {
  components: {
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
    collapsedSider() {
      this.$emit('on-collapsed-sider')
    }
  }
}
</script>
<style lang="less">
.main {
  .collapse-btn {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    font-size: large;
    color: #161D6F;
  }
}
</style>
