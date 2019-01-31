<template>
    <section class="box">
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item, index) in left" :class="{current:currentIndex == index}" @click="selectItem(index, $event)" :key="index">
                        <span class="left-item">{{ item }}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,index) in right" class="right-item right-item-hook" :key="index">
                        <h2><span>{{ item.name }}</span></h2>
                        <ul>
                            <li v-for="(num,index) in item.content" :key="index">
                                <div>{{item.name+num}}</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script type="text/javascript">
import BetterScroll from 'better-scroll';
// import ListPullLoading from 'list-pull-loading'
    export default {
        name:'BetterScroll',
        data(){
            return {
                left:['111','222','333','444','555','666'],
                right:[{
                    name:"111",
                    content:['1','2','3','4','5','6','7']
                },{
                    name:"222",
                    content:['3','4','5','6','7']
                },{
                    name:"333",
                    content:['1','2','3','4','5','6','7']
                },{
                    name:"444",
                    content:['5','6','7']
                },{
                    name:"555",
                    content:['4','5','6','7']
                },{
                    name:"666",
                    content:['3','4','5','6','7']
                },],
                listHeight:[],
                scrollY:0,
                clickEvent:false
            }
        },
        methods:{
            _initScroll(){
                this.lefts=new BetterScroll(this.$refs.left,{
                    click:true
                })
                this.rights=new BetterScroll(this.$refs.right,{
                    probeType:3
                })
                this.rights.on('scroll',(pos)=>{
                    this.scrollY=Math.abs(Math.round(pos.y))
                })
            },
            _getHeight(){
                let rightItems=this.$refs.right.getElementsByClassName('right-item-hook')
                let height=0;
                this.listHeight.push(height)
                for(let i=0;i<rightItems.length;i++){
                    let item=rightItems[i];
                    height+=item.clientHeight;
                    this.listHeight.push(height)
                }
            },
            selectItem(index,event){
                this.clickEvent=true;
                // console.log(event._constructed)
                if(!event._constructed){
                    return
                }else{
                    let rightItems=this.$refs.right.getElementsByClassName('right-item-hook')
                    let el=rightItems[index]
                    this.rights.scrollToElement(el,300)
                }
            // console.log(this.clickEvent)
            // console.log(this.currentIndex)
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this._initScroll()
                this._getHeight()
            });
        },
        computed:{
            currentIndex(){
                console.log(this.listHeight)
                for(let i=0;i<this.listHeight.length;i++){
                    let height=this.listHeight[i];
                    let height2=this.listHeight[i+1];
                    // console.log('height='+height)
                    // console.log('height2='+height2)
                    // console.log('this.scrollY='+this.scrollY)
                    // console.log(this.clickEvent)
                    // console.log('i='+i)
                    if(!height2||(this.scrollY>=height && this.scrollY<height2)){
                        if(this.clickEvent){
                            return i
                        }else{
                            return i;
                        }
                    }
                }
                return 0
            }
        }
    }
</script>
<style scoped>
    .content{
        display: flex;
        position: absolute;
        top: 0px;
        bottom: 51px;
        width: 100%;
        overflow: hidden;
        background-color: #eee;
    }
    .left{
        flex: 0 0 80px;
        width: 80px;
        background-color: #e9e9e9;
    }
    .left li{
        width: 100%;
        height: 100%;
        color:#333;
    }
    .left li.current{
        background-color: #f3f5f7;
        color:#46a2da;
        box-shadow: 3px 0px 0px #46a2da inset;
    }
    .left-item{
        display: block;
        width: 100%;
        height: 51px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;
    }
    .right{
        flex: 1;
        background-color: #f3f5f7;
    }
    .right-item{
        padding-left: 15px;
    }
    .right-item h2{
        text-align: left;
        padding:20px 0 15px;
        border-bottom: #fdd dashed 1px;
        border-top: #fcc solid 1px;
    }
    
    .right-item h2 span{
        box-shadow: 2px 0px 0px #faa inset;
        padding-left: 10px;
        display: block;
        line-height: 15px;
    }
    .right-item li{
        width: 100%;
        height: 50px;
        line-height:50px;
        text-align: center;
    }
</style>




