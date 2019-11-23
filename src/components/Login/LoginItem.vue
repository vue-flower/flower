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
        <el-form-item prop="account">
          <el-input
            placeholder="请输入花礼账号(邮箱或手机)"
            v-model="ruleForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            placeholder="请输入密码"
            v-model="ruleForm.pass"
            type="password"
          ></el-input>
          <a href="">忘记密码?</a>
        </el-form-item>
      </el-form>
      <div class="login-box-footer">
        <el-form>
          <el-form-item class="container">
            <el-button class="login" type="primary" round @click="submitForm('dynamicValidateForm')">登陆</el-button>
            <el-button type="info" class="pass" plain>一键快捷注册></el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    var checkAccount = (rule,value,callback) => {
      if (value === "") {
        callback(new Error("请输入账号"))
      }
    };
    var validatePass = (rule,value,callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      }else{
        
        // console.log(validate)
        callback()
      }
    };
    
    // if (event in) {
      
    // }
    return {
      isPassWordLogin: false, // 控制登录方式切换
      isShowPassWord: false, // 密码显示/隐藏
      phone: '', // 手机号码
      code: '', // 验证码
      username: '', // 用户名
      password: '', // 密码
      //captcha: '', // 验证码
      countDownTime: 0, // 倒计时
      //前台表单验证
      ruleForm: {
        account:"",
        pass: ""
        },
      rules: {
        account:[{validator:checkAccount,trigger: "blur"}],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    }
  },
  // methods: {
  //   //登陆验证
  //   async login(){
  //     let {phone, code, username, password,isPassWordLogin} = this
  //   //添加验证选项
  //   let names = isPassWordLogin?['name', 'password']: ['phone', 'code'] 
  //   // const success = await this.$validator.validatorAll(names)

  //   }
  // },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.$refs)
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }}







}  
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
