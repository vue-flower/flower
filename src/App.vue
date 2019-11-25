<template>
  <div >
    <router-link to="/home">首页</router-link>
    <router-link to="/flower">鲜花</router-link>
    <router-link to="/yongshenghua">永生花</router-link>
    <router-link to="/product">详情</router-link>
    <router-link to="/cake">蛋糕</router-link>
    <router-link to="/test">swiper Test</router-link>
    <div class="router">
      <router-link to="/home">首页</router-link>
      <router-link to="/flower">鲜花</router-link>
      <router-link to="/yongshenghua">永生花</router-link>
      <router-link to="/product">详情</router-link>
      <router-link to="/login">登陆</router-link>
      <router-link to="/cake">蛋糕</router-link>
      <router-link to="logins">logins</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
  .router
    position fixed
    bottom 0
    left 0
    font-size 20px
</style>

