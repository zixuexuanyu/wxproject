<template>
  <div>
    <div class="de_top" @click="$router.back(-1)"> 《 </div>
    详情
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: 'detail'
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  .navbar
    display none
.de_top
  height 50px
  line-height 50px
  padding-left 15px
  background-color #eee
  text-align left 
</style>
