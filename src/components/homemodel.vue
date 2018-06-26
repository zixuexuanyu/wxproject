
<template>
    <div class="modelbox">
        <ul class="modelul">
            <li class="model_li" v-for="(item, index) in modelList" v-bind:key="index" :style=" { backgroundImage : 'url('+ item.imgUrl +')' }">
                <p>{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { NotificationCenter } from 'node-notifier'

export default{
  props: {
    modelList: Array
  },
  data: function () {
    return {
      modelList: []
    }
  }
}
</script>

<style lang='stylus' scoped>
.modelbox
    width 90%
    margin 0 auto
    .modelul
        list-style none
        .model_li
            list-style none
            margin-left -40px
            border-radius 20px
            margin-bottom 20px
            background-repeat no-repeat
            background-size cover
            background-position center center
</style>
