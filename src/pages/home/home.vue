import axios from 'axios';
<template>
  <div>
    <!--<div>{{ msg }}</div>-->
    <!-- 轮播图 -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 切换时大小改变轮播 -->
    <!-- <home-swipers :swipersList="swiperList"></home-swipers> -->
    <!-- 小喇叭公告 -->
    <home-marquee :marqueeList="marqueeList"></home-marquee>
    <!-- 模块 -->
    <home-model :modelList="modelList" v-on:hideNav="showMsgFromChild"></home-model>
  </div>
</template>

<script>
import HomeSwiper from '@/components/homeswiper'
// import HomeSwipers from '@/components/homeswipers'
import HomeMarquee from '@/components/homemarquee'
import HomeModel from '@/components/homemodel'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeMarquee,
    HomeModel
    // HomeSwipers
  },
  data () {
    return {
      msg: 'home',
      swiperList: [],
      marqueeList: [],
      modelList: [],
    }
  },
  methods:{
    gethomeinfo(){
      axios.get('api/home.json').then(this.gethomeinfosucc)
    },
    gethomeinfosucc(res){
      console.log(res);
      const data=res.data.data;
      console.log(data)
      this.swiperList=data.swiperList
      this.marqueeList=data.marqueeList
      this.modelList=data.modelList
    },
    //接收子组件给父组件传的参数
    showMsgFromChild(res){
      console.log(res)
    }
  },
  mounted(){
    this.gethomeinfo();
  }
}
</script>

<style scoped>

</style>
