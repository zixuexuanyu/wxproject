<template>
    <div>
        <div class="navbar">
            <div class="navbar-item">
                <router-link to="/home">首页</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/list">列表</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/my">我的</router-link>
            </div>
        </div>
        <div class="content">
            <keep-alive class="view">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name:'index',
    data () {
        return {
            seller:[]
        }
    }
}
</script>

<style lang="stylus" scoped>
.navbar
    width 100%
    height 50px
    line-height 50px
    position fixed
    bottom 0
    left 0
    display flex
    justify-content space-around
    border-top #eee solid 1px
</style>
