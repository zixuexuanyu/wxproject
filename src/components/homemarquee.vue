<template>
    <div class="vueBox">
        <div class="marquee">
            <div class="marquee_title">
                公告：
            </div>
            <div class="marquee_box">
                <!-- <ul class="marquee_list" :style="{ top: -num +'px' }" :class="{ marquee_top: num }">
                    <li v-for=" item in marqueeList ">
                        <span>{{ item.name }}</span>
                    </li>
                </ul> -->
                <ul class="marquee_list"  :class="{ marquee_top: animate }">
                    <li v-for=" item in marqueeList ">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'homemarquee',
    props:{
        marqueeList:Array
    },
    data() {
        return {
            num:0,
            animate: false,
            msg:'marquee'
        }
    }, 
    created () { 
        setInterval(this.showMarquee, 2000) 
    }, 
    methods: { 
        showMarquee: function () { 
            this.animate = true; 
            setTimeout(()=>{ 
                this.marqueeList.push(this.marqueeList[0]); 
                this.marqueeList.shift(); 
                this.animate = false; 
            },500)
        }, 
    }
    // created(){
    //     this.showMarquee(this.num)
    //     console.log(this.marqueeList)
    // },
    // methods: {
    //     showMarquee (num) {
    //         this.marqueeList.push(this.marqueeList[0]);
    //         var max=this.marqueeList.length;
    //         var that=this;
    //         var marqueetimer =  setInterval(function(){
    //             num++;
    //             if(num>=max ){
    //                 num=0;
    //             }
    //             that.num=num*30;
    //         }, 2000);
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
    div,img,ul,li,span 
        margin 0
        padding 0
        display flex
        box-sizing border-box
    .red
        color #ff0101
    .vueBox
        width 100%
        .marquee
            width 100%
            height 40px
            align-items center
            color #3a3a3a
            // background-color aqua 
            display flex
            box-sizing border-box
            .marquee_title
                // padding 0 10px 0 20px
                width 20%
                height 30px
                font-size 14px
                align-items center
                justify-content center
            .marquee_box
                display block
                position relative
                width 80%
                height 30px
                overflow hidden
                .marquee_list
                    display block
                    position absolute
                    top 0
                    left 0
                    li
                        height 30px
                        line-height 30px
                        font-size 14px
                        // background-color #ffffff
                        span
                            padding 0 2px
            
</style>

