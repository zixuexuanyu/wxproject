import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // hello页面
import Home from '@/pages/home/home' // 首页
import List from '@/pages/list/list' // 列表
import Detail from '@/pages/detail/detail' // 详情
import Search from '@/pages/search/search' // 搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
