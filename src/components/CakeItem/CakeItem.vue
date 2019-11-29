<template>
  <div class="hot-city">
    <p>热门城市</p>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.hot-city
      margin-left 20px
      margin-top 20px
      display flex
      
      .nav-left
        &>li 
          width 43px
          height 32px
          float left
          margin-left 30px

</style>
