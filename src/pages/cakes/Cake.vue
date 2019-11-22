<template>
  <div class="cake-container">
    <TopHeader/>
    <div class="cake-header">
      <CakeItem/>
      <div class="search-city">
        <p>快速查找</p>
        <ul class="nav-left">
          <li class="city">
            <select name="" id="">
              <option value="1">北京</option>
              <option value="1">上海</option>
              <option value="1">深圳</option>
            </select>
          </li>
          <li class="contry">
            <select name="" id="">
                <option value="1">北京</option>
                <option value="1">上海</option>
                <option value="1">深圳</option>
              </select>
          </li>
          <li class="enter"><button>进入</button></li>
          <li class="search">
            <input type="text" placeholder="请输入蛋糕配送城市">
            <a class="soso_btn" href="javascript;"><span class="ico ico-search"></span></a>
          </li>
        </ul>
      </div>

      <div class="flower-nav">
        <ul class="nav-left clearfix">
          <li><a  href="">按拼音首字母选择</a></li>
        </ul>  
    
        <ul class="nav-rigth">
          <li><a  href="">A</a></li>
          <li><a href="">B</a></li>
          <li><a  href="">A</a></li>
          <li><a href="">B</a></li>
          <li><a  href="">A</a></li>
          <li><a href="">B</a></li>
          <li><a  href="">A</a></li>
          <li><a href="">B</a></li>
        </ul>
      </div>

      <CakeItem/>
      <CakeItem/>
      <CakeItem/>
      <CakeItem/>
      <CakeItem/>
      <CakeItem/>
      <CakeItem/>
    </div>
    <div class="cake-container">
      <div class="cake-left"></div>
      <div class="cake-right"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CakeItem from '../../components/CakeItem/CakeItem'
  export default {
    components: {
      CakeItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.cake-container
  width 1200px
  height 800px
  margin 0 auto
  .cake-header
    width 1192px
    height 550px
    border 4px solid #ff6a00
    .search-city
      margin-left 20px
      margin-top 20px
      display flex
      .nav-left
        margin-top 0
        &>li 
          width 43px
          height 32px
          float left
          margin-left 30px
      .city,.contry 
        select
          width 67px  
          height 30px    
      .enter
        button 
          width 67px  
          height 30px  
          background #ff6a00
          border-style none
      .search
        input
          height 30px   

    .flower-nav
      height 45px
      font-size 14px
      line-height 20px  
      text-align start
      background #ebebeb 
      margin 10px 0 20px 0  
      line-height 45px
      position relative
      border 1px solid #000
      border-left none
      border-right none
      .nav-left
        &>li 
          height 32px
          float left
          margin-left 10px
          font-size 14px
          font-weight bold
          a
            color #000
      .nav-rigth
        display flex   
        height 32px
        position absolute
        right 0
        top 0
        margin-right 10px
        li
          margin-left 15px
          font-size 14px
  .cake-container
    display flex
    margin-top 20px
    .cake-left
      width 210px
      height 500px
      margin-right 24px
      background blue
    .cake-right
      width 969px
      height 1000px
      background pink



</style>
