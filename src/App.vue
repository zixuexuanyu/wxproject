<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <!-- <router-view/> -->
        
        <div class="navbar" v-if="$route.meta.navShow">
            <div class="navbar-item">
                <router-link to="/home" ><i class="icon iconfont icon-shouyeshouye"></i>首页</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/list"><i class="icon iconfont icon-DIYshougongfang"></i>分类</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/search"><i class="icon iconfont icon-sousuo"></i>搜索</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/my"><i class="icon iconfont icon-wode"></i>我的</router-link>
            </div>
        </div>
        <keep-alive class="view">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
const hashsrc=window.location.hash;
export default {
    name: 'App',
    data(){
        return {
        }
    }
}
</script>

<style lang="">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.navbar{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    border-top: #eee solid 1px;
}
.navbar-item{
    display: inline-block;
    width: 100%;
}
.navbar-item a{
    display: inline-block;
    height: 50px;
    font-size: 12px;
    color: #333;
    width: 100%;
}
.navbar-item a i{
    display: block;
    margin-top: -8px;
    margin-bottom: -28px;
    font-size: 20px;
}
.navbar-item .router-link-exact-active.router-link-active{
    color: #46a2da;
}


</style>
