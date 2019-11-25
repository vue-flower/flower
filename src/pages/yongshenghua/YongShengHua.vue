<template>
  <div>
    <header class="header">
        <div class="activity">
          <a href=""><img src="https://img02.hua.com/pc/images/pc_newuser_order_100.png" /></a>
        </div>

        <div class="top-banner">
          <nav class="top-nav">
            <ul class="top-nav-left">
              <li class="">
                <a href="">
                  <span>收藏鲜花网(hua.com)</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>关注微信</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>花礼网app</span>
                </a>
              </li>
            </ul>
            <ul class="top-nav-right">
              <li>
                <a href="">
                  <span>您好,请登录</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>注册</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>订单查询</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>我的花礼</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>客户服务</span>
                </a>
              </li>
              <li>
                <a href="">
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
              <a href=""><img src="../../image/静态图片/home/ia_200000105.png" alt="" /></a>
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
    



    <!-- 头部 -->
    <!-- <div class="header">
      <div class="container">
        <ul class="container-list-left">
          <li class="container-list-li-left">
            <i class="iconfont icon-collection-fill"></i>
            <a href=""><span class="ico ico-star"></span>收藏鲜花网(hua.com)</a>
          </li>
          <li class="container-list-li-middle">
            <span>关注微信</span>
            <div>
              <img src="../../image/静态图片/永生花/ia_600000000.jpg" alt="">
              <p>扫码关注<br>回复"礼物" 更多惊喜！</p>

            </div>

          </li>
          <li class="container-list-li-right">
            <span>花礼网app</span>
            <div>
              <img src="../../image/静态图片/永生花/ia_600000000.jpg" alt="">
              <p>新人100</p>

            </div>

          </li>

        </ul>

        <ul class="container-list-right">
          <li class="loginAndRegister">
            <a  href="">你好，请登录</a>
            <a  href="">注册</a>
          </li>
          <li class="site-nav-pipe">|</li>
          <li class="order">
            <a  href="">订单查询</a>
          </li>
          <li>|</li>
          <li class="myflowers">
            <a  href="">我的花礼</a>
          </li>
          <li>|</li>
          <li class="serve">
            <a  href="">客户服务</a>
          </li>
          <li class="shoppingCart">
            <a  href="">购物车</a>
          </li>
          <li>|</li>
          <li class="introduction">
            <a  href="">永生花-永生玫瑰</a>
          </li>

        </ul>

      </div> 
    </div> -->

    <!-- <TopHeader/> -->

   
    <!-- 导航列表 -->
    <nav class="common">
      <TopNav/>

    </nav>

    







    <!-- 大图片 -->
    <div class="big-photo">
      <img src="../../image/静态图片/永生花/ysh-top-banner.jpg" alt="">
    </div>

    <!-- 过滤 -->
    <div class="filter">
      <div class="filter-top">
        <ul>
          <li class="allred"><a class="allred" href="##" >综合</a> </li>
          <!-- <li class="allred"><router-link to="/">订餐</router-link> </li> -->
           
          <li class=""> <a href="##">销量</a></li>
          <li class=""><a href="##">价格</a></li>
          <li class=""> <a href="##">最新</a></li>

      
        </ul>
        <router-view></router-view>
      

      </div>

      <div class="link"></div>

      <div class="filter-fotter">
        <ul class="filter-fotter-sort" >
          <!-- <li class="allred"><a class="first" href="" >综合</a> </li> -->
           
          <li class=""> <a class="quanbu" href="##">分类:</a></li>
          <li class=""><a href="">全部</a></li>
          <li class="active"> <a href="##">经典花盒</a></li>
          <li class="active"> <a href="##">巨型玫瑰</a></li>
          <li class="active"> <a href="##">永生瓶花</a></li>
          <li class="active"> <a href="##">特色永生花</a></li>
        </ul>

        <ul class="filter-fotter-people">
          <!-- <li class="allred"><a class="first" href="" >综合</a> </li> -->
           
          <li class=""> <a href="##">人群:</a></li>
          <li class=""><a href="##">送恋人爱人</a></li>
          <li class=""> <a href="##">送父母长辈</a></li>
          <li class=""> <a href="##">送朋友同事</a></li>
         
        </ul>


        

       
      

      </div>

      

    </div>

    <!-- 鲜花商品 -->
    <YongshenghuaList/>

  </div>


  
</template>

<script type="text/ecmascript-6">
  import YongshenghuaList from '../../components/YongshenghuaList/YongshenghuaList'
  // import json from '../../json/flower.json'

  export default {
    components: {
      YongshenghuaList
    },


    computed: {
     
    }
    
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
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
          border 1px solid #f56000
          position relative
          top -5px
          left 0px
        
      

      .service 
        width 252px
        display flex
        justify-content space-between
        color #737373
        font-size 14px
        line-height 20px





  // .header
  //   display flex
  //   width 100%
  //   height 35px
  //   background #f2f2f2
  //   font-size 15px
  //   color #737373
  //   justify-content center 
  //   .container
  //     display  flex
  //     width 1200px
  //     height 35px
      
  //     .container-list-left
  //       display flex
  //       width 500px
  //       height 35px
  //       line-height 35px
  //       .container-list-li-left
  //         margin auto
  //         width 185px
  //         height 35px
  //       .container-list-li-middle
  //         margin auto
  //         width 185px
  //         height 35px
  //         div
  //           display none
  //       .container-list-li-right
  //         margin auto
  //         width 185px
  //         height 35px
  //         div
  //           display none

  //     .container-list-right
  //       line-height 35px
  //       display flex
  //       height 35px
  //       width 700px
  //       background #f2f2f2
  //       .loginAndRegister
  //         width 140px
  //         height 35px
          
  //       .order
  //         width 76px
  //         height 35px
          
  //       .myflowers
  //         width 76px
  //         height 35px
          
  //       .serve
  //         width 76px
  //         height 35px
          
  //       .shoppingCart
  //         width 76px
  //         height 35px
          

  //       .introduction
  //         width 140px
  //         height 35px
          
          
  //         a
  //           color #000000
  //           font-size 15px




  .header_middle
    width 1200px
    height 120px
    background pink
    margin 0 auto
  
  .common
    width 100%
    
    
    background #fe7a24
    .container
      width 1200px
      background yellow
      height 40px
      margin 0 auto
  
  .big-photo
    margin-top 10px
    img
      width 1200px
      height 132px
      display block
      margin 0 auto 
  .filter
    width 1200px
    // height 400px
    // border-bottom 1px solid black
    margin 0 auto
    .filter-top
      height 44px
      width 1200px 
      ul
        display flex 
        li
          width 60px
          margin-right 20px
          
          a
            font-size 15px
            display block
            height 43px
            line-height 43px
          .allred
            margin-left 20px
            color red
    .link
      width 1200px
      height 1px
      background black
      margin-bottom 5px 

    .filter-fotter
      width 1200px
      height 200px
   
      .filter-fotter-sort
        margin-top 20px
        width 1200px
        height 69px
        display flex
        background #f5f5f5 
        li
          margin-right 30px
          height 69px
          line-height 69px
          margin-left 20px
          a
            color black
            font-size 15px

          .quanbu
            color red

      .filter-fotter-people
        margin-top 2px
        width 1200px
        height 69px
        display flex
        background #f5f5f5 
        li
          height 69px
          line-height 69px
          margin:0px 30px 0px 20px

          .first
            margin-left 20px
          a
            color black
            font-size 15px
      .filter-fotter-sort
        margin-top 20px
        margin-top 2px
        width 1200px
        height 69px
        display flex
        background #f5f5f5 
        li
          margin-right 30px
          height 69px
          line-height 69px
          margin-left 20px
        li:hover
            color red
          .first
            margin-left 20px
        

          a
            color black
            font-size 15px

  .flowersGoods
    width 1200px
    margin 0 auto
    ul
      display flex
      flex-wrap: wrap

      li
        width 285px
        height 400px
        margin-left 15px
        a
          display block
          width 300px
          height 300px
          img
            width 285px
            height 285px
          h4
           
            font-size 15px
            text-align center
           
            font-weight bold
            margin-top 5px
            color red
          h6
            margin-top 5px
            font-size 15px
           
            text-align center
            color #233333 
          h5
            margin-top 5px
            font-size 15px
           
            text-align center

          

      
      

          











</style>
