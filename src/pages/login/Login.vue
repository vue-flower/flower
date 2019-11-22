<template>
  <div class="page-login">
    <TopHeader> </TopHeader>
    <section class="section">
      <div class="bgi"></div>
      <div class="login-box">
        <div class="login">
          <ul class="login-page-title">
            <li>微信扫码</li>
            <li>账号密码登陆</li>
            <li>手机短信登陆</li>
          </ul>
          <div class="login-content">
            <div class="login-form">
              <div class="login-account">
                <span class="icon-font"></span>
                <input class="account" type="text" />
              </div>
            </div>
            <div class="login-form">
              <div class="login-account">
                <span class="icon-font"></span>
                <input class="account" type="text" />
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

          // background green
          position absolute
          right 0
          top 0
          display flex
          flex-direction column
          .login-page-title
            width 440px
            height 56px
            // background red
            display flex
            justify-content space-around
            border-bottom 2px solid #737373
            li
              height 54px
              line-height 54px
          .login-content
            padding 20px
            position relative
            margin-left 40px
            .login-form
                width 318px
                height 40px
                border 1px solid #b4babf
                margin-bottom 12px
                display flex
                justify-content center
                align-items center
                .login-account 
                  width 262px
                  height 40px
                  input
                    width 234px
                    height 20px
                    margin 10px 14px
            .tips-box
              // display inline-block
              // position absolute
              // right 0
              width 318px
              display flex
              justify-content space-between
              // background-color green
            .login-btn  
              width 320px
              height 42px
              margin-top 16px
              border-radius 21px
              background #FF734C
            .login-other
              width 320px
              height 42px
              background yellow
              margin 10px auto
              a
                display block
                margin 10px auto
                text-align center
                line-height 42px
                p

</style>