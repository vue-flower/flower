<template>
  <div >
    <!-- <router-link to="/home">首页</router-link>
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
      <router-link to="logins">logins</router-link> -->
    <!-- </div> -->
    <TopHeader>
    </TopHeader>
    <!-- <TopNavAside></TopNavAside> -->
    <TopNavRight></TopNavRight>



    <router-view></router-view>
  </div>
</template>

<script>
import TopNavRight from './components/TopNavRight/TopNavRight'
export default {
  name: 'app',
  components: {
    TopNavRight
  }
}
</script>

<style lang="stylus" scoped>
  .router
    position fixed
    bottom 0
    left 0
    font-size 20px
</style>

