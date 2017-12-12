import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login'
import Admin from '../pages/admin/admin.vue'
import Article from '../pages/admin/article/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'登录',
      component:Login
    },
    {
      path:'/admin',
      component:Admin,
      children:[
        {
          path:'article',
          component:Article
       }
      ]
    }
  ]
})
