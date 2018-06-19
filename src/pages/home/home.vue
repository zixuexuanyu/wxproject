import axios from 'axios';
<template>
  <div>
    <!--<div>{{ msg }}</div>-->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 切换时大小改变轮播 -->
    <!-- <home-swipers :swipersList="swiperList"></home-swipers> -->
    <home-marquee :marqueeList="marqueeList"></home-marquee>
  </div>
</template>

<script>
import HomeSwiper from '@/components/homeswiper'
// import HomeSwipers from '@/components/homeswipers'
import HomeMarquee from '@/components/homemarquee'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeSwiper,
    HomeMarquee
    // HomeSwipers
  },
  data () {
    return {
      msg: 'home',
      swiperList: [],
      marqueeList: []
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
    }
  },
  mounted(){
    this.gethomeinfo()
  }
}
</script>

<style scoped>

</style>
