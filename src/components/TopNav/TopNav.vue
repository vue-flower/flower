<template>
  <nav class="nav">
    <h3 class="categorys-title">全部商品导购</h3>
    <Content class="content">
      <nav class="list-nav">
        <ul>
          <li><a href="">鲜花</a></li>
          <li><a href="">永生花</a></li>
          <li><a href="">蛋糕</a></li>
          <li><a href="">礼品</a></li>
          <li><a href="">巧克力</a></li>
          <li><a href="">花语大全</a></li>
          <li><a href="">企业团购</a></li>
          <li><a href="">设计师甄选鲜花</a></li>
          <li><a href="">感恩节鲜花礼物</a></li>
        </ul>
      </nav>
    </Content>
  </nav>
</template>
  
<script type="text/ecmascript-6">
export default {};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.nav
  width 1200px
  margin 0 auto
  display flex
  justify-content space-between
  .categorys-title 
    width 200px
    height 40px
    // text-align center
    padding 0 15px
    line-height 40px
    font-size 15px
    background #ff6a00
    color #fff
    h3
      font-weight bold
  .content  

    .list-nav
      width 970px
      height 40px
      ul
        display flex
        li
          a
            height 21px
            line-height 21px
            text-align center
            padding 9px 22px
            display block
            font-size 15px
            color #4d4d4d

</style>