<template>
  <div class="top-navs">
    <div class="nav">
      <div class="nav-bar">
        <TopNavLeft class="left"></TopNavLeft>
        <!-- <TopNavRight class="right"></TopNavRight> -->

      </div>
      <Aside></Aside>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
export default {};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.top-navs
  width 100%
  .nav
    width 1200px
    margin 0 auto
    /*display flex*/
    /*justify-content space-between*/
    .nav-bar
      display flex
      .left
        &::after
          content ''
          display block
          clear both
          width 100%
          position absolute
          top 40px
          left 0
          border-bottom  3px solid #ff6a00
</style>