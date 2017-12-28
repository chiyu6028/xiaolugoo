// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'

Vue.use(iView)

Vue.config.productionTip = false

//全局导航守卫
router.beforeEach((to, from, next) => {
  // ...
  console.log(to,from);
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
