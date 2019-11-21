<template>
  <div >
    <!-- kkkkkkkk
    <router-link to="/home">首页</router-link>
    <router-link to="/flower">鲜花</router-link>
    <router-link to="/yongshenghua">永生花</router-link>
    <router-link to="/product">详情</router-link>

    <FooterGuide v-if="$route.meta.isShowFooterGuide"/> -->


    
   
    
    <router-view></router-view>
  </div>
</template>

<script>
  import Yongshenghua from './pages/yongshenghua/YongShengHua'  

  export default {
    name: 'app',
    components: {Yongshenghua}

  }
</script>

<style>

</style>
