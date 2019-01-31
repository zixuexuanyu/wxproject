<template>
    <div id="app">
		<!-- <div class="navtop">
			<div class="nt_gobakck" @click="goback()"><i class="icon iconfont icon-fanhui" v-if="$route.meta.showback"></i></div>
			<div class="nt_content">{{ $route.meta.names }}</div>
			<div class="nt_right">
				<a href="http://www.iconfont.cn"><i class="icon iconfont icon-cart1" v-if="$route.meta.showshop"></i></a>
				<a href="http://www.baidu.com"><i class="icon iconfont icon-shezhi" v-if="$route.meta.showsetting"></i></a>
			</div>
		</div> -->
        
        <!-- <div class="navbar" v-if="$route.meta.navShow">
            <div class="navbar-item">
                <router-link to="/home" ><i class="icon iconfont icon-shouyeshouye"></i>首页</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/new"><i class="icon iconfont icon-xinshourenwu"></i>新手引导</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/course"><i class="icon iconfont icon-DIYshougongfang"></i>教程分类</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/show"><i class="icon iconfont icon-chanpin"></i>成品展示</router-link>
            </div>
        </div> -->
        <!-- <div><router-link to="index2">首页</router-link></div> -->
        <router-view></router-view>
    </div>
</template>

<script>
const hashsrc=window.location.hash;
export default {
    name: 'App',
    data(){
        return {
        }
    },
	methods:{
		goback(){
			this.$router.go(-1);
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

.navtop{
	width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2c3e50;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;z-index: 9999;
}
.nt_content{
	font-size: 16px;
}
.nt_gobakck{
	display: inline-block;
    position: absolute;
	left: 0px;
	top: 0;
}
.nt_right{
	display: inline-block;
	position: absolute;
	right: 0px;
	top: 0;
}
.nt_right i,.nt_gobakck i{
	padding: 10px 15px;
	font-size: 24px;
	color: #fff;
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
    background-color: #fff;
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
