<template>
  <div class="container">
    <div class="wrap">
      <a href=""><img class="flower-img" src="../../image/flower/ia_800000025.jpg" alt=""></a>
      <span class="price">￥145</span>
      <a href="" class="detail">
        <p class="des">描述</p>
        <p class="keys">关键字</p>
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
        .keys
          font-size 12px
          margin-bottom 10px
          color #ff6a00
      .btns
        width 100%
        .star,.car
          width 50%
          height 26px
          line-height 24px
          font-size 12px
      



</style>
