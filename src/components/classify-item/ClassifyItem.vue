<template>
  <div class="flower-classify-item">
    <div class="classify-name">
      <span class="classify-icon"></span>
      <span>{{classify.title}}</span>
    </div>
    <div class="classify-list">
      <ul>
        <li v-for="(item,index) in classify.content" :key="index"><a href="">{{item}}</a></li>
      </ul>
    </div>
    <div class="xian"></div>
</div>  
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
      
      }
    },
    props:['classify'],
    mounted(){
    
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.flower-classify-item
  padding 10px 0
  box-sizing border-box
  width 190px
  //height 177px   //不固定
  margin 0 10px
  display flex
  align-items center
  border-bottom 1px solid #ccc
  .classify-name
    width 30px
    display flex
    flex-direction column
    align-items center
    font-size 14px
    margin-right 10px
    .classify-icon
      width 30px
      height 39px
      background url(../../image/flower/icon.png) no-repeat -162px -237px
  .classify-list
    ul
      width 140px
      &>li
        float left
        width 50%
        font-size 12px
        padding 4px 

</style>
