<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!-- <router-view/> -->
    
        <div class="navbar">
            <div class="navbar-item">
                <router-link to="/home" >首页</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/list">列表</router-link>
            </div>
            <div class="navbar-item">
                <router-link to="/my">我的</router-link>
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
        //   showNav: true
      }
  },
  mounted(){
    console.log(this.showNav)
  },
//   beforeUpdate(){
      
//       if(hashsrc == '#/home'||hashsrc == '#/list'||hashsrc == '#/my'||hashsrc == '#/'){
//           this.showNav=true
//       }else{
//           this.showNav=false
//       }
//   }
}
</script>

<style lang="stylus">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
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
