import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import VueCoreVideoPlayer from 'vue-core-video-player'
import 'ant-design-vue/dist/antd.css'
import config from '@/config'
import './assets/less/index.less'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueCoreVideoPlayer)
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
