<template>
  <div class="home">
    <TopHeader>
    </TopHeader>

    <div class="contents">
      <TopNav class="nav-list">
      </TopNav>
      <Aside class="aside">
      </Aside>
    </div>
      <Banner class="banner">
      </Banner>

    <Footer>
    </Footer>
  </div>
</template> 

<script>

export default {

};
</script>
  
<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .contents
    background #000
    width 1200px
    margin 0 auto
    background #fff
    position relative
    .aside
      width 230px 
      position relative
      z-index 11
  .banner
    height 440px
    position absolute
    top 284px
    left 0

</style>