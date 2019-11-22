<template>

  <div>
    <div class="header"></div>

    <div class="order">
      <div>
        <ul class="order-title">
          <li class="selecter"></li>
          <li class="product">商品名称</li>
          <li class="market-price">市场价</li>
          <li class="order-price">订购价</li>
          <li class="num">数量</li>
          <li class="operate">操作</li>

        </ul>
      </div>
      <div>
        <ul class="order-list">
          <li class="selecter"></li>
          <li class="img-box"></li>
          <li class="product"></li>
          <li class="market-price"></li>
          <li class="order-price"></li>
          <li class="num"></li>
          <li class="operate"></li>
         
        </ul>
      </div>

    </div>
  </div>
  


  
   
</template>

<script type="text/ecmascript-6">

  export default {
    
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    width 1200px
    height 300px
    background pink
  .order
    .order-title
      width 988px
      height 41px
      background #ebebeb
      margin 0 auto
      line-height 41px

 

      display flex
      li
        font-size 15px
        font-weight bold
        padding 10px 0
        height 41px
        line-height 41px
        color #737373 
      .product
        width 432px
      .selecter
        width 40px
      .market-price
        width 120px
      .order-price
        width 120px
      .num
        width 120px
      .operate
        width 120px


    .order-list
      











</style>
