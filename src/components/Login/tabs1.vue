<template>
  <div class="child1">
    <img src="../../image/code.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: "child1",
  mounted() {
    console.log("tab1组件");
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .child1
    width 200px
    height 200px
    margin 30px auto

      
</style>