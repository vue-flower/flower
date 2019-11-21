<template>
  <aside class="aside">

    <div class="cate-dropdown">
      <h4><a href="">鲜花用途</a></h4>
      <ul class="aside-nav">
        <li><a href="">爱情鲜花</a></li>
        <li><a href="">生日鲜花</a></li>
        <li><a href="">友情鲜花</a></li>
        <li><a href="">问候长辈</a></li>
        <li><a href="">探病慰问</a></li>
        <li><a href="">道歉鲜花</a></li>
        <li><a href="">祝贺鲜花</a></li>
        <li><a href="">婚庆鲜花</a></li>
        <li><a href="">商务鲜花</a></li>
      </ul>

      <h4><a href="">鲜花花材</a></h4>
      <ul>
        <li><a href="">玫瑰</a></li>
        <li><a href="">康乃馨</a></li>
        <li><a href="">百合</a></li>
        <li><a href="">向日葵</a></li>
        <li><a href="">扶郎</a></li>
        <li><a href="">郁金香</a></li>
        <li><a href="">马蹄莲</a></li>
      </ul>

      <div class="cate-cake">
        <a href="">
          永生花
        </a>
        <div class="right-menu" style="display : none">
          <h5>永生花类别</h5>
          <div class="link-img">
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>经典花盒</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>巨型玫瑰</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>薰衣草</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>永生瓶花</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>特色永生花</span>
            </a>
          </div>
        </div>
        <ul class="cate-list">
          <li>
            <a href="">永生瓶花</a>
          </li>
          <li>
            <a href="">经典花盒</a>
          </li>
          <li>
            <a href="">特色永生花</a>
          </li>
        </ul>
      </div>
      <div class="cate-cake">
        <a href="">蛋糕</a>
        <div class="right-menu" style="display : none">
          <h5>永生花类别</h5>
          <div class="link-img">
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>经典花盒</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>巨型玫瑰</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>薰衣草</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>永生瓶花</span>
            </a>
            <a href="../../image/静态图片/永生花/ia_600000005.jpg">
              <span>特色永生花</span>
            </a>
          </div>
        </div>
        <ul class="cate-list">
          <li>
            <a href="">元祖</a>
          </li>
          <li>
            <a href="">幸福西饼</a>
          </li>
          <li>
            <a href="">21cake</a>
          </li>
          <li>
            <a href="">诺心蛋糕</a>
          </li>
          <li>
            <a href="">窝夫小子</a>
          </li>
          <li>
            <a href="">BONCAKE</a>
          </li>
        </ul>
      </div>
      <div class="cate-cake">
        <div class="gifts-toys-plants">
          <a href="">礼品</a>
          <span>/</span>
          <a href="">公仔</a>
          <span>/</span>
          <a href="">绿植</a>
        </div>
      </div>
    </div>
  </aside>
</template>
  
<script type="text/ecmascript-6">
export default {};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.aside
  .cate-dropdown
    width 200px
    // margin 0 auto
    padding 15px

    h4 
      font-size 14px
      a
        font-weight bold
        color #ff6a00
    ul 
      font-size 12px
      a
        font-size 12px
        color #707070

      &::after 
        content ''
        display block
        border 0.5px solid #f2f2f2

      li 
        display inline-block
        line-height 22px
        margin-right 10px

    .cate-cake
      a
        font-size 14px
        font-weight bold
        color #ff6a00
      .right-menu
        display none

      .cate-list
        a
          color #707070
          // color red
          font-size 12px
        
        .gifts-toys-plants
          color #737373
          font-size 14px
</style>