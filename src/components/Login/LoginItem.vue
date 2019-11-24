<template>
  <div class="login-box">
    <el-tabs class="login-box-tabs" v-model="activeName">
      <el-tab-pane label="微信扫码登陆" name="first" :key="'first'">
        <child1></child1>
      </el-tab-pane>

      <el-tab-pane
        label="账号密码登陆"
        name="second" :key="'second'"
      >
      <child2 ></child2>
      </el-tab-pane>

      <el-tab-pane
        label="手机短信登陆"
        name="third" :key="'third'"
      >
      <child3></child3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import tabs1 from "./tabs1";
import tabs2 from "./tabs2";
import tabs3 from "./tabs3";
export default {
  name: "login",
  components: {
    child1: tabs1,
    child2: tabs2,
    child3: tabs3
  },
  data() {
    return {
      //默认第一个选项卡
      // activeName: "first",
      // activeName: "second",
      activeName: "third",
    };
  },
  mounted() {}
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


</style>
