import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
Vue.use(Router)

axios.get('/xiaolu/validateCode',{responseType: 'arraybuffer'})
          .then(response => {
          console.log(response);
        })

var routesObject = {
  routes: [
    {
      path: '/',
      component: (resolve) => require(['@/pages/navigate.vue'], resolve),
      children:[
        {
          path: 'home',
          name: '主页',
          component: (resolve) => require(['@/pages/home/home.vue'], resolve)
        },
        {
          path: 'system',
          name: '系统',
          component: (resolve) => require(['@/pages/system/system.vue'], resolve),
          children:[
            {
              path: 'systemMenu',
              name: '系统菜单',
              component: (resolve) => require(['@/pages/system/systemMenu.vue'], resolve)
            },
            {
              path: 'systemAuthor',
              name: '系统权限',
              component: (resolve) => require(['@/pages/system/systemAuthor.vue'], resolve)
            },
            {
              path: 'systemParams',
              name: '系统参数',
              component: (resolve) => require(['@/pages/system/systemParams.vue'], resolve)
            }
          ]
        },
        {
          path: 'recommend',
          name: '推荐',
          component: (resolve) => require(['@/pages/recommend/recommend.vue'], resolve)
        },
        {
          path: 'me',
          name: '我',
          component: (resolve) => require(['@/pages/me/me.vue'], resolve)
        },
        {
          path: 'systemLogin',
          name: '系统登录',
          component: (resolve) => require(['@/pages/system/systemLogin.vue'], resolve)
        },
      ]
    }
  ]
}

export default new Router(routesObject)
