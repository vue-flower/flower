<template>
  <header class="header">
    <div class="activity">
      <a href="javascript:"><img src="https://img02.hua.com/pc/images/pc_newuser_order_100.png" /></a>
    </div>

    <div class="top-banner">
      <nav class="top-nav">
        <ul class="top-nav-left">
          <li class="">
            <a @click="$router.push('/home')" href="javascript:">
              <span>收藏鲜花网(hua.com)</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>关注微信</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <span>花礼网app</span>
            </a>
          </li>
        </ul>
        <ul class="top-nav-right">
          <li @click="$router.push('/login')">
            <a href="javascript:">
              <span>您好,请登录</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <span>注册</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <span>订单查询</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <span>我的花礼</span>
            </a>
          </li>
          <li>
            <a href="javascript:">
              <span>客户服务</span>
            </a>
          </li>
          <li @click.prevent="$router.push('/Shopping/ShowCart')">
            <a href="javascript:">
              <span>购物车</span>
            </a>
          </li>
          <li>
            <span>中国鲜花礼品网:中国鲜花网领先品牌</span>
          </li>
        </ul>
      </nav>
    </div>
    <!-- 顶部导航 end -->

    <!-- 头部 start -->
    <div class="header">
      <div class="logo">
        <h1>
          <a href="javascript:"><img src="../../image/静态图片/home/ia_200000105.png" alt="" /></a>
        </h1>
      </div>
      <div class="search">
        <input type="text" placeholder="商品关键字" />
        <button>搜索</button>
      </div>
      <div class="service">
        <div>
          <span>400-889-8188</span>
        </div>
        <div>
          <span>在线客服</span>
        </div>
      </div>
    </div>
    <!-- 头部 end -->
  </header>
</template>
  
<script type="text/ecmascript-6">
export default {};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.header
  .top-banner 
    width: 100%;
    // height 116px
    background: #f2f2f2;

    .top-nav 
      height: 35px;
      width: 1200px;
      margin: 0 auto;
      line-height: 35px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;

      .top-nav-left 
        width: 348px;
        display: flex;
        justify-content: space-between;
        a
          color: #737373;
        // background-color red
      

      .top-nav-right 
        width: 632px;
        display: flex;
        justify-content: space-between;
        // background-color yellow
        a
          color: #737373;
    
  

  .header 
    height 120px
    width 1200px
    margin 0 auto
    display flex
    justify-content space-between
    align-items center

    // background-color pink
    .logo 
      display flex
      justify-content: center
      align-items center
    

    .search 
      height 34px

      input 
        width 238px
        height 32px
        // box-sizing border-box
        border 1px solid #f56000
      

      button 
        width 82px
        height 34px
        background #f56000
        font-size 16px
        color #fff
      
    

    .service 
      width 252px
      display flex
      justify-content space-between
      color #737373
      font-size 14px
      line-height 20px
</style>