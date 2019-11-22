<template>
  <div class="container">
    <div class="wrap">
      <a href=""><img class="flower-img" :src="`http://img01.hua.com/uploadpic/newpic/${flower.ItemCode}.jpg_220x240.jpg`" alt=""></a>
      <span class="price">￥{{flower.Price}}</span>
      <a href="" class="detail">
        <p class="des">{{flower.Instro}}</p>
        <p class="keys">{{flower.Cpmc}}</p>
      </a>
      <div class="btns">
        <button class="star">收藏</button>
        <button class="car">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      flower:{
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  .container
    width 240px
    height 372px
    // background #8DEBE6
    .wrap
      padding 10px
      .flower-img
        width 220px
        height 240px
      .price
        font-size 14px
        font-weight bold
        color #ff6a00
      .detail
        margin 10px 0
        &:hover
          color #ff6a00
        .des
          margin-top 10px
          font-size 12px
          width 100%
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
        .keys
          font-size 12px
          margin-bottom 10px
          color #ff6a00
          width 100%
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
      .btns
        width 100%
        margin-bottom 0
        .star,.car
          width 50%
          height 26px
          line-height 24px
          font-size 12px
      



</style>
