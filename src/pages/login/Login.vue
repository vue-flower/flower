<template>
  <div class="page-login">
    <TopHeader> </TopHeader>
    <section class="section">
      <div class="bgi">
        <LoginItem class="loginbox"></LoginItem>
      </div>
    </section>
    <!-- <TopNav>
    </TopNav> -->
  </div>
</template>
  
<script type="text/ecmascript-6">
import LoginItem from '../../components/Login/LoginItem'
export default {};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  .page-login
    width 100%
    .section
      width 100%
      height 474px
      background-image url('../../../src/common/images/login_bg.jpg')
      // background pink
      
      .bgi
        width 1200px
        height 474px
        margin 0 auto
        position relative
        .loginbox
          position absolute
          right 0
          top 37px
          // right 100px  
</style>