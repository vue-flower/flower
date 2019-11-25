<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">微信扫码</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">账号密码的登陆</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">手机短信登陆</el-tab-pane>
  </el-tabs>
</template>
  
<script type="text/ecmascript-6">
  export default {
  
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  
</style>