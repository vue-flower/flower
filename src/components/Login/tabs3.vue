<template>
  <!-- 账号登录 -->
  <div class="child3">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="phone">
        <el-input
          maxlength="11"
          minlength="11"
          placeholder="请输入手机号"
          v-model="ruleForm.phone"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          placeholder="请输入验证码"
          maxlength="4"
          show-word-limit
          v-model="ruleForm.code"
          type="password"
        ></el-input>
        <el-button class="captch">发送验证码</el-button>
      </el-form-item>
    </el-form>
    <div class="login-box-footer">
      <el-form>
        <el-form-item class="container">
          <el-button
            class="login"
            type="primary"
            round
            
            @click="submitForm()"
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
  name: "child3",
  data() {

    return {
      //前台表单验证
      ruleForm: {
        code: "",
        phone: ""
      },
      rules: {
        phone: [{ validator: checkPhoneNumber, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }]
      }
    };

    var checkPhoneNumber = (rule, value, callback) => {
      console.log(this)
      if (value === "") {
        callback(new Error("请输入账号"));
      }
    };

    var checkCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("验证码"));
      } else {
        // console.log(validate)
        callback();
      }
    };
  },

  methods: {


    submitForm() {
      console.log(this.ruleForm.code.length)
      if(/^1[3456789]\d{9}$/.test(this.ruleForm.phone) && this.ruleForm.code.length === 4){
        this.$store.dispatch('getUserAction',{user: this.ruleForm.account})
        this.$router.replace('/home')
      }else{
        this.$message('请检查信息')
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

.child3
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
