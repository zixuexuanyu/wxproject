<template>
  <div class="search">
    <input type="text" placeholder="搜索" class="s_input" @keypress.enter="searchinfo(keywords)" v-model="keywords">
    <button @click="searchinfo(keywords)">搜索</button>
    <div class="s_box">
      <ul v-if="showlist">
        <li v-for="(item,index) in searchjg" :key="index">{{ item.name }}</li>
      </ul>
      <div v-else>暂无列表</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      newdata: [
        {name:'1',index:1},
        {name:'2',index:2},
        {name:'3',index:3},
        {name:'4',index:4},
        {name:'5',index:5},
        {name:'6',index:6},
        {name:'7',index:7},
        {name:'8',index:8},
        {name:'9',index:9},
        {name:'10',index:10},
        {name:'11',index:11},
        {name:'12',index:12},
        {name:'13',index:13},
      ],
      searchjg:[],
      keywords:'',
      showlist:false
    }
  },
  methods:{
    searchinfo(keywords){
      this.searchjg=[];
      for(var i=0;i<this.newdata.length;i++){
        if((this.newdata[i].name).indexOf(this.keywords) !== -1){
						(this.searchjg).push(this.newdata[i]) 
					}
      }
      console.log(this.searchjg)
      // console.log(this.searchjg.length)
      if(this.searchjg.length>0){
        this.showlist=true
      }else{
        this.showlist=false
      }
      // console.log(this.showlist)
    }
  }
}
</script>

<style scoped>

</style>
