<template>
  <div >
    <router-link to="/home">首页</router-link>
    <router-link to="/flower">鲜花</router-link>
    <router-link to="/yongshenghua">永生花</router-link>
    <router-link to="/product">详情</router-link>
    <router-link to="/login">登陆</router-link>
    <router-link to="/cake">蛋糕</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
