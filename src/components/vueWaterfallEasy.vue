<template lang="pug">    
#app
  h1.title vue-waterfall-easy demo
  vue-waterfall-easy(:imgsArr="imgsArr",@scrollLoadImg="fetchImgsData")
    template( scope="props")
      p.some-info 第{{props.index+1}}张图片
      p.some-info {{props.value.info}}
  </template>
</template>

<script>
//import XXX from './components/XXX'

export default {
    props: {
        gap: { // 图片间隔
            type: Number,
            default: 20
        },
        maxCols: { // 最大的列数
            type: Number,
            default: 5
        },
        imgsArr: { // 请求返回的图片数据，格式：[{src:'1.jpg','link':'url1' info:'自定义图片信息'},{src:'2.jpg','link':'url2',info:'自定义图片信息'}...]
            type: Array,
            required: true
        },
        imgWidth: { // 指定图片的统一宽度
            type: Number,
            default: 240
        },
        timeOut: { // 预加载事件小于500毫秒就不显示加载动画，增加用户体验
            type: Number,
            default: 500
        }
    }
}
</script>

<style lang="stylus">
.vue-waterfall-easy 
    position relative
    width: 100% // 移动端生效
    .img-box 
        display inline-block
        width 50% // 移动端生效
        box-sizing border-box
        float left // 首行排版
        transition left 1s, top 1s
        .img-inner-box 
            box-shadow 0 1px 3px rgba(0, 0, 0, .3)
            .img-wraper 
                width 100%
                background yellow
            img 
                width 100%
                vertical-align bottom
            .img-info 
                background #fff
                // padding: .6em;
    .loading 
        text-align center
        width 100%
        position fixed
        bottom 10px
        left 50%
        margin-left -15px
        width 30px
        height 30px
    .loading.first-loading 
        //  首次预加载白屏，让加载动画处于中间
        top 50%
        margin-top -15px
    .double-bounce1,
    .double-bounce2 
        width 100%
        height 100%
        border-radius: 50%
        background-color #67CF22
        opacity 0.6
        position absolute
        top 0
        left 0
        animation: bounce 2.0s infinite ease-in-out
    .double-bounce2 
        animation-delay -1.0s
    
    @keyframes bounce 
        0%,
        100% 
            transform scale(0.0)
        
        50% 
            transform scale(1.0)
        
</style>
