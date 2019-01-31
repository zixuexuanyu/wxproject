// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ExmpleIndex from '@/pages/example/index'
import Indexs from '@/pages/index'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import ListPullLoading from 'list-pull-loading'
// import 'list-pull-loading/dist/list-pull-loading.css'

// import store from "./store"
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import './assets/font/iconfont.css'
import './assets/style/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper /* ,{default global options} */ )
fastclick.attach(document.body)
    // Vue.use(BScroll)
    // 上拉加载、下拉刷新
    // Vue.use(ListPullLoading, {
    //     isLoading: false, // API是否正在加载
    //     hasData: true, // 当前列表是否有数据
    //     downElHeight: 0, // 下拉元素的高度
    //     upElHeight: 0, // 上拉提示元素的高度
    //     scrollerMinHeight: 0, //当前容器最小高度
    //     directionY: 0, // -1:up 上, 1: down下
    //     startPullTime: 0, // 开始下拉的时间
    //     endPullTime: 0, // 结束下拉的时间
    //     lastQueryTime: 0, // 最后一次查询的时间
    //     isCanToTop: false, // 根据当前滚动位置判断是否能调到顶部
    //     isShowToTop: true, // 是否显示去顶部图标
    //     initMaxTimes: 3, // 初始化数据不够一屏最大查询次数
    //     noDataText: "没有找到相关的内容哦~", // 没有列表数据时的内容展示
    //     myScroll: null, // 当前iScroll实例
    //     api: null, // 当前数据列表API查询接口
    //     auto: true, // 是否自动查询
    //     // 图片自适应，默认为false。最好不要设置为true，因为比较消耗资源。
    //     // 原因是：true的情况下是应用于列表数据里有懒加载的图片但没有指定图片大小导致iScroll计算高度不准确需要的等图片加载完之后再重新计算高度。
    //     // 目前都是通过监控图片的onload事件来刷新的这样真的不爽但也没找到其他好的解决方案，所以最好是列表中有图片加载时就预先把高度写死
    //     imgResize: false,
    //     iScrollOptions: {
    //         probeType: 3, //必须指定为3，否则拖动太快就监控不到
    //         mouseWheel: false,
    //         disableMouse: true,
    //         scrollbars: false,
    //         preventDefault: true,
    //         startY: 0
    //     }, //IScroll选项
    //     down: {
    //         offset: 50, //列表下拉滚动大于50px,即可触发下拉刷新的回调
    //         initText: "下拉刷新", //初始化文案，这个是在当前下来滚动未超过指定的值时显示文案
    //         notReleaseText: "松开刷新", // 释放滚动加载时当前下拉高度还未回弹时的文案
    //         loadingText: "正在加载更多", // 正在加载时的文案
    //         state: 0, //当前加载时的状态。0:初始化状态 1：未释放滚动加载时 2：正在加载时
    //         isShowLastTimeText: true // 是否显示最后更新时间提示 
    //     }, // 下拉刷新
    //     up: {
    //         offset: 50, //列表上拉滚动大于50px,即可触发上拉加载的回调
    //         initText: "上拉加载更多", //初始化文案，当前上拉高度未超过指定的高度时
    //         notReleaseText: "松开加载更多", // 未释放滚动加载时的文案，当前上拉高度超过指定的高度时且还未释放滚动
    //         loadingText: "正在加载更多", // 正在加载时的文案
    //         noMoreText: "没有更多数据了...", // 没有数据时的文案
    //         state: 0, //当前加载时的状态。0:初始化状态 1：未释放滚动加载时 2：正在加载时 3: 没有更多数据了
    //     }, // 上拉加载
    //     parameters: {
    //         maxResultCount: 20, //每次分页数据加载多少条
    //         skipCount: 0 //每次数据偏移
    //     } // 数据查询参数
    // });


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Indexs },
    template: '<Indexs/>'
})