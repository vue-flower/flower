<template>
  <div class="right-containt">
    <li >
      <a href="">
        <div class="img-box">
          <img
            :src="`https://img01.hua.com/uploadpic/newpic/${floor.ItemCode}.jpg_220x240.jpg`"
            alt=""
          />
        </div>
        <div class="text-area">
          <p>爱情 · {{floor.Cpmc}}</p>
          <h5>¥{{floor.Price}}</h5>
          <p>已售 {{floor.LinePrice}} 件</p>
        </div>
      </a>
    </li>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    props:{
      floor:{
        type: Object
      }
    }
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.right-containt
  width 1180px
  li
    width 240px
    height 334px
    float left
    border 1px solid #e5e5e5
    a
      color #737373
      text-align center
      .img-box
        // padding 2px
        margin 15px 9px
        img 
          width 220px
          height 240px
      .text-area
        box-sizing border-box
        padding 0 0 10px 0
        p 
          font-size 12px
        h5
          font-size 14px
          font-weight bold
          color #000

</style>