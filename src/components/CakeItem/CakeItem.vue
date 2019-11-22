<template>
  <div class="hot-city">
    <p>热门城市</p>
    <ul class="nav-left">
      <li><a  href="">综合</a></li>
      <li>
        <a href="">销量
        </a>
      </li>
      <li><a href="">价格</a></li>
      <li><a href="">最新</a></li>
    </ul>
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
