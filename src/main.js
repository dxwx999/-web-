import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入elementui
import Element from 'element-ui'
//导入elementui样式文件
import 'element-ui/lib/theme-chalk/index.css'
//然后在 main.js下引入这个文件
import '@/icons'
//引入点击切换歌曲的方法
import changeSong from '@/utils/changeSong.js'
Vue.prototype.$changeSong=changeSong

//阻止显示生产模式的信息
Vue.config.productionTip = false
//注册elementui
Vue.use(Element)
// Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
