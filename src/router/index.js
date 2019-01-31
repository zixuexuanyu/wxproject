import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index' //首页
import pullrefash from '@/pages/pullrefash'
import index2 from '@/pages/example/index' //示例首页框架
import home from '@/pages/example/home' // 示例首页
import list from '@/pages/example/list' // 示例列表
import detail from '@/pages/example/detail' // 示例详情
import search from '@/pages/example/search' // 示例搜索
import my from '@/pages/example/my' // 示例我的
import course from '@/pages/example/course' // 示例教程
import show from '@/pages/example/show' // 示例展示
import New from '@/pages/example/new' // 示例新手

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: '首页',
            component: Index,
            redirect: '/Index'
        },
        {
            path: '/pullrefash',
            name: '下拉刷新',
            component: pullrefash
        },
        {
            path: '/index2',
            name: '例子',
            component: index2
        },
        {
            path: '/home',
            name: '示例首页',
            component: home,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '示例首页'
            }
        },
        {
            path: '/course',
            name: '示例教程',
            component: course,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '示例教程分类'
            }
        },
        {
            path: '/show',
            name: '示例展示',
            component: show,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '示例成品展示'
            }
        },
        {
            path: '/New',
            name: '示例新手',
            component: New,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '示例新手引导'
            }
        },
        {
            path: '/list',
            name: '示例列表',
            component: list,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '示例列表'
            }
        },
        {
            path: '/detail',
            name: '示例详情',
            component: detail,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '示例详情'
            }
        },
        {
            path: '/search',
            name: '示例搜索',
            component: search,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '示例搜索'
            }
        },
        {
            path: '/my',
            name: '示例我的',
            component: my,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '示例我的'
            }
        }
    ]
})