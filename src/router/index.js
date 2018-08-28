import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home' // 首页
import List from '@/pages/list' // 列表
import Detail from '@/pages/detail' // 详情
import Search from '@/pages/search' // 搜索
import My from '@/pages/my' // 我的
import Course from '@/pages/course' // 教程
import Show from '@/pages/show' // 展示
import New from '@/pages/new' // 新手

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/',
            name: '首页',
            component: Home,
            redirect: '/home',
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '首页'
            }
        },
        {
            path: '/home',
            name: '首页',
            component: Home,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '首页'
            }
        },
        {
            path: '/course',
            name: '教程',
            component: Course,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '教程分类'
            }
        },
        {
            path: '/show',
            name: '展示',
            component: Show,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '成品展示'
            }
        },
        {
            path: '/new',
            name: '新手',
            component: New,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '新手引导'
            }
        },
        {
            path: '/list',
            name: '列表',
            component: List,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '列表'
            }
        },
        {
            path: '/detail',
            name: '详情',
            component: Detail,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '详情'
            }
        },
        {
            path: '/search',
            name: '搜索',
            component: Search,
            meta: {
                navShow: false,
                cname: '二级页面',
                names: '搜索'
            }
        },
        {
            path: '/my',
            name: '我的',
            component: My,
            meta: {
                navShow: true,
                cname: '一级页面',
                names: '我的'
            }
        }
    ]
})