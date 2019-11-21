<template>
  <div class="home">
    <TopHeader>
    </TopHeader>

    <div class="container-all">
      <TopNav>
      </TopNav>
      <Banner class="banner">
      </Banner>
    </div>


    <Footer>
    </Footer>
  </div>
</template> 

<script>

export default {

};
</script>
  
<style lang="stylus" rel="stylesheet/stylus" scoped>
.container-all
  width 100%
  position relative
  .banner
    position absolute
    top 40px
    left 0
    z-index -1
    // top 274px
    // left 0

</style>