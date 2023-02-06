import Vue from 'vue'
import Router from 'vue-router'




Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/', //顶层路由，对应index.html
    component: resolve => require(['../App'], resolve),
    redirect: '/c',
    meta: {
      keepAlive: false
    },
    children: [ //二级路由。对应App.vue

    ]
  },
  {  
    path: '/c', //最外层容器
    component: resolve => require(['../page/index'], resolve),
    meta: {
      keepAlive: false
    },
    children: [ //二级路由。对应App.vue
      {
        path: '/c/vuepage1', 
        component: resolve => require(['../page/vuepage1'], resolve),
        meta: {
          keepAlive: false
        }
      },
      {
        path: '/c/vuepage2', 
        component: resolve => require(['../page/vuepage2'], resolve),
        meta: {
          keepAlive: false
        }
      }
    ]
  }
],
})

export default router