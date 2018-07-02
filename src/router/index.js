import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' // hello页面
import Home from '@/pages/home/home' // 首页
import Index from '@/pages/index/index' // 主页
import List from '@/pages/list/list' // 列表
import Detail from '@/pages/detail/detail' // 详情
import Search from '@/pages/search/search' // 搜索
import My from '@/pages/my/my' // 我的

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: '主页',
        //     component: Index
        // },
        {
            path: '/',
            name: '首页',
            component: Home
        },
        {
            path: '/home',
            name: '首页',
            component: Home
        },
        {
            path: '/HelloWorld',
            name: '欢迎',
            component: HelloWorld
        },
        {
            path: '/list',
            name: '列表',
            component: List
        },
        {
            path: '/detail',
            name: '详情',
            component: Detail
        },
        {
            path: '/search',
            name: '搜索',
            component: Search
        },
        {
            path: '/my',
            name: '我的',
            component: My
        }
    ]
})