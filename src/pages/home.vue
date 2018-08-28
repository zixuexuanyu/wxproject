<template>
  <div>
    <!--<div>{{ msg }}</div>-->
    <!-- 轮播图 -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 切换时大小改变轮播 -->
    <!-- <home-swipers :swipersList="swiperList"></home-swipers> -->
    <!-- 小喇叭公告 -->
    <home-marquee :marqueeList="marqueeList"></home-marquee>
    <!-- 导航 -->
    <home-nav :navList="navList"></home-nav>
    <!-- 模块 -->
    <home-model :modelList="modelList"></home-model>
  </div>
</template>

<script>
import HomeSwiper from '@/components/homeswiper'
// import HomeSwipers from '@/components/homeswipers'
import HomeMarquee from '@/components/homemarquee'
import HomeNav from '@/components/homenav'
import HomeModel from '@/components/homemodel'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeNav,
    HomeMarquee,
    HomeModel
    // HomeSwipers
  },
  data () {
    return {
      msg: 'home',
      swiperList: [],
      navList:[],
      marqueeList: [],
      modelList: [],
    }
  },
  methods:{
    gethomeinfo(){
      axios.get('../../static/record/home.json').then(this.gethomeinfosucc)
    },
    gethomeinfosucc(res){
      console.log(res);
      const data=res.data.data;
      console.log(data)
      this.swiperList=data.swiperList
      this.marqueeList=data.marqueeList
      this.navList=data.navList
      this.modelList=data.modelList
    }
  },
  mounted(){
    this.gethomeinfo();
  }
}
</script>

<style scoped>

</style>
