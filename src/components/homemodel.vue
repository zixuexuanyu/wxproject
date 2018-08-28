
<template>
    <div class="modelbox">
        <ul class="modelul">
            <li class="model_li" v-for="(item, index) in modelList" v-bind:key="index" :style=" { backgroundImage : 'url('+ item.imgUrl +')' }">
                <router-link to="detail">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { NotificationCenter } from 'node-notifier'

export default{
    name:'homemodel',
    props:{
        modelList:Array
    },
    data () {
        return {

        }
    }
}
</script>

<style lang='stylus' scoped>
.modelbox
    width 94%
    margin 0 auto
    padding-bottom 60px
    .modelul
        list-style none
        margin-top 15px
        .model_li
            list-style none
            // margin-left -40px
            border-radius 8px
            margin-bottom 15px
            background-repeat no-repeat
            background-size cover
            background-position center center
            overflow hidden
            a
                line-height 100px
                background rgba(255,255,255,.4)
                display block
                color #333333
                font-size 20px
</style>
