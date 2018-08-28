<template>
    <div class="homenav">
        <div class="hn_li" v-for="(item, index) in navList" v-bind:key="index">
            <router-link :to="item.url">
                <img v-bind:src="item.imageurl">
                <p>{{ item.title }} <span>{{ item.info }}</span> </p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'homenav',
    props:{
        navList:Array
    },
}
</script>
<style scoped>
.homenav{
    width: 100%;
    /* margin: 0 10px; */
    position: relative;
    overflow: hidden;
}
.hn_li{
    float: right;
    width: 50%;
    /* width: 49%; */
    position: relative;
}
.hn_li:last-child{
    float: right;
}
.hn_li a{
    color: #aaa;
}
.hn_li img{
    width: 100%;
}
.hn_li p{
    position: absolute;
    top: 34%;
    right: 3%;
}
.hn_li p span{
    display: block;
    font-size: 10px;
    padding: 7px 0;
    color: #cccccc;
}
</style>

