// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//引入iview
import iView from 'iview'
//引入iview的样式
import 'iview/dist/styles/iview.css'
//引入axios
import axios from 'axios'

Vue.use(iView)
//axios不支持 use方式
Vue.prototype.$axios = axios;
//Vue.config.productionTip = false

//全局导航守卫
router.beforeEach((to, from, next) => {
  // ...
  console.log(to,from);
  console.log(store);
  //继续下一步
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
