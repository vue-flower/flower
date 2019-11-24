<template>
  <!-- 账号登录 -->
  <div class="child2">
    <el-form :model="ruleForm" status-icon :rules="rules"  ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="account">
        <el-input
        maxlength="16"
        minlength="8"
        show-word-limit
        placeholder="请输入花礼账号(邮箱或手机)"
        v-model="ruleForm.account"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
        maxlength="16"
        minlength="8"
        show-word-limit
        placeholder="请输入密码"
        v-model="ruleForm.pwd"
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
  name: "child2",
  data() {
    return {
      token:"",
      ruleForm: {
        account: "",
        pwd: ""
      },
      rules: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }]
      }
    };

    var checkAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      }
    };

    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // console.log(validate)
        callback();
      }
    };

  },

  methods: {
    submitForm() {
      if((/^[0-9a-zA-Z]+$/.test(this.ruleForm.account)) && (/^[0-9a-zA-Z]+$/.test(this.ruleForm.pwd))){
        this.$store.dispatch('getUserAction',{user:this.ruleForm.account,pwd: this.ruleForm.pwd})
        this.$router.replace('/home')
      }else{
        this.$message('请检查信息')
      }
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
