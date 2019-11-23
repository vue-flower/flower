<template>
  <div class="login-box">
    <el-tabs class="login-box-tabs">
      <el-tab-pane label="微信扫码登陆"></el-tab-pane>
      <el-tab-pane label="账号密码登陆"></el-tab-pane>
      <el-tab-pane label="手机短信登陆"></el-tab-pane>
    </el-tabs>
    <div class="login-box-content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="pass">
          <el-input placeholder="请输入花礼账号(邮箱或手机)"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input placeholder="请输入密码"></el-input>
          <a href="">忘记密码?</a>
        </el-form-item>
      </el-form>
    <div class="login-box-footer">
      <el-form >
        <el-form-item class="container">
          <el-button  class="login" type="primary" round>登陆</el-button>
          <el-button type="info" class="pass" plain>一键快捷注册></el-button>
        </el-form-item>
      </el-form>
    </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
.login-box
  background #fff
  width 400px
  height 400px
  box-sizing border-box
  padding 20px
  display flex
  flex-direction column
  justify-content space-between
  // overflow hidden
  .login-box-tabs
    // margin-left 20px
    // width 100%
  .login-box-content
    // background pink
    margin-bottom 50px
    .demo-ruleForm
      a
        position absolute
        top 40px
        right 0
  .login-box-footer 
    .login
      display block
      margin 40px 0
      width 100%
    .pass
      display block
      width 100%
      margin 0 auto


</style>
