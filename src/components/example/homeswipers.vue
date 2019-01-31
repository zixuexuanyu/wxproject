<template>
  <div class="swiper">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="item in swipersList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeswipers",
  props:{
    swipersList:Array
  },
  data () {
    return {
      swiperOption:{
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper
    // /*margin:10px auto*/
    width:100%
    // /*height:6.4rem*/
    overflow:hidden
    .swiper-slide
      width:8.53333333333rem
      // /*height:6.4rem*/
      &.swiper-slide-active
        img
          margin-top:0
          width:100%
          // /*height:100%*/
      img
        display:block
        margin:0 auto
        margin-top:1.5%
        width:90.625%
        // /*height:90.625%*/
        vertical-align:middle;
        -webkit-transition:all 1s ease 0s
        -moz-transition:all 1s ease 0s
        -ms-transition:all 1s ease 0s
        -o-transition:all 1s ease 0s
        transition:all 1s ease 0s

</style>
