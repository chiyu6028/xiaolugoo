import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/pages/login/login'
import Home from '@/pages/home'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
    	path: '/home',
    	name: 'home',
    	component: Home
    }
  ]
})
