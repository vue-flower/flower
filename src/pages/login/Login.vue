<template>
  <div class="page-login">
    <TopHeader> </TopHeader>
    <section class="section">
      <div class="bgi"></div>
      <div class="login-box">
        <div class="login">
          <ul class="login-page-title">
            <li><a href="">微信扫码</a></li>
            <li><a href="">账号密码登陆</a></li>
            <li><a href="">手机短信登陆</a></li>
          </ul>
          <div class="login-content">
            <div class="login-form">
              <div class="login-account">
                <span class="icon-font"></span>
                <input class="account" type="text" placeholder="请输入花礼账号(邮箱或手机)"/>
              </div>
            </div>
            <div class="login-form">
              <div class="login-account">
                <span class="icon-font"></span>
                <input class="account" type="text"  placeholder="请输入密码"/>
              </div>
            </div>
            <div class="tips-box">
              <p></p>
              <a href="">忘记密码?</a>
            </div>
          <button class="login-btn">登陆</button>
          <div class="login-other"><a><p>一键快捷注册></p></a></div>
          </div>

        </div>
      </div>
    </section>
    <!-- <TopNav>
    </TopNav> -->
  </div>
</template>
  
<script type="text/ecmascript-6">
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
      position relative
      .login-box
        width 1200px
        height 100px
        margin 0 auto
        position relative
        .login
          width 440px
          height 438px
          padding 20px
          background #fff
          position absolute
          right 0
          top 20px
          display flex
          flex-direction column
          .login-page-title
            width 400px
            height 56px
            // background red
            display flex
            justify-content space-around
            border-bottom 2px solid #737373
            li
              height 54px
              line-height 54px
          .login-content
            // position relative
            padding 20px
            
            margin-left 0 auto
            .login-form
                width 360px
                height 40px
                border 1px solid #b4babf
                margin-bottom 12px
                display flex
                justify-content center
                align-items center
                .login-account 
                  width 262px
                  height 40px
                  margin 0 auto
                  input
                    width 234px
                    height 20px
                    margin 10px 14px
                    border 0px
            .tips-box
              // display inline-block
              // position absolute
              // right 0
              width 318px
              display flex
              justify-content space-between
              // background-color green
            .login-btn  
              width 360px
              height 42px
              margin-top 16px
              border-radius 21px
              background #FF734C
            .login-other
              width 320px
              height 42px
              background #f7f9fa
              margin 10px auto
              position absolute 
              bottom 0
              
              a
                display block
                margin 10px auto
                text-align center
                
</style>