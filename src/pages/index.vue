<template>
    <div class="index-box">
        {{msg}}dfsf 
        <div>
            <router-link to="index2" >首页</router-link>
        </div>
        <div>
            <router-link to="pullrefash" >撒</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:'发生的'
            }
        }
    }
</script>
<style>
div{
    padding: 10px;
    margin: 10px;
}
</style>
