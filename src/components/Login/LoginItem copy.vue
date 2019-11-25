<template>
  <div class="login-box">
    <el-tabs class="login-box-tabs">
      <el-tab-pane
        label="微信扫码登陆"
        name="first"
        :key="'first'"
      ></el-tab-pane>
      <el-tab-pane
        label="账号密码登陆"
        name="second"
        :key="'second'"
        :class="{ on: isPassWordLogin }"
        @click="isPassWordLogin = true"
      ></el-tab-pane>
      <el-tab-pane
        label="手机短信登陆"
        name="third"
        :key="'third'"
        :class="{ on: !isPassWordLogin }"
      ></el-tab-pane>
    </el-tabs>
    <!-- 账号登录 -->
    <div class="login-box-container">
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
    <!-- 手机登录 -->
    <div class="login-box-container">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item prop="account">
          <el-input
            placeholder="请输入手机号"
            v-model="ruleForm.account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            placeholder="短信验证码"
            v-model="ruleForm.pass"
            type="password"
          ></el-input>
          <el-button type="primary" class="captch">获取验证码</el-button>
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
  </div>
</template>

<script type="text/ecmascript-6">
export default {
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
.login-box
  background: #fff;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // overflow hidden
  .login-box-tabs
    // margin-left 20px
    // width 100%

  .login-box
    // background pink
    margin-bottom: 50px;
    display none
    &.on
      display block

    .demo-ruleForm
      .captch
        margin-top 10px
        float right
      a
        position: absolute;
        top: 40px;
        right: 0;

  .login-box-footer
    .login
      display: block;
      margin: 40px 0;
      width: 100%;

    .pass
      display: block;
      width: 100%;
      margin: 0 auto;
</style>

<el-form
  :model="ruleForm"
  status-icon
  :rules="rules"
  ref="ruleForm"
  label-width="100px"
  class="demo-ruleForm"
>

  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
