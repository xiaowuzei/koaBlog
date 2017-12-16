import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login'
import Admin from '../pages/admin/admin.vue'
import Article from '../pages/admin/article/article.vue'
import Tag from '../pages/admin/tag'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/admin',
      component: Admin,
      name: '后台管理基础页面',
      children: [{
        path: 'article',
        component: Article,
        name: '文章发布页面'
      }, {
        path: 'tags',
        component: Tag,
        name: '标签管理'
      }]
    }
  ]
})
