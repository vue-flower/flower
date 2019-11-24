<template>
  <!-- 账号登录 -->
  <div class="child2">
    <el-form :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
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
          show-password
          type="password"
        ></el-input>
        <el-button class="captch"
            >忘记密码?</el-button
          >
        <!-- <a href="">忘记密码?</a> -->
      </el-form-item>
    </el-form>
    <div class="login-box-footer">
      <el-form>
        <el-form-item class="container">
          <el-button
            class="login"
            type="primary"
            round
            @click="submitForm('dynamicValidateForm')"
            >登陆</el-button
          >
          <el-button type="info" class="pass" plain>一键快捷注册></el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "child2",
  data() {
    return {
      isPassWordLogin: false, // 控制登录方式切换
      isShowPassWord: false, // 密码显示/隐藏
      phone: "", // 手机号码
      code: "", // 验证码
      username: "", // 用户名
      password: "", // 密码
      //captcha: '', // 验证码
      countDownTime: 0, // 倒计时
      //前台表单验证
      ruleForm: {
        account: "",
        pass: ""
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };

    var checkAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // console.log(validate)
        callback();
      }
    };

    // if (event in) {

    // }
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.$refs);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

.child2
    .demo-ruleForm
      .captch
        margin-top 10px
        float right


  .login-box-footer
    margin-top -40px
    .login
      display: block;
      margin: 40px 0;
      width: 100%;

    .pass
      display: block;
      width: 100%;
      margin: 0 auto;
</style>
</style>
