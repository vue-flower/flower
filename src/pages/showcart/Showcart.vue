<template>

  <div>
    <header class="header">
     
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

        <!-- <div class="search">
          <input type="text" placeholder="商品关键字" />
          <button>搜索</button>
        </div> -->

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
  


   

    <div class="order">
      <div>
        <ul class="order-title">
          <li class="selecter"></li>
          <li class="product">商品名称</li>
          <li class="market-price">市场价</li>
          <li class="order-price">订购价</li>
          <li class="num">数量</li>
          <li class="operate">操作</li>

        </ul>
      </div>
      <div>
        <ul class="order-list">
          <li class="selecter">
            <i class="iconfont iconweixuanzhong"></i>
          </li>
          <li class="img-box">
            
            <a href="">
              <img src="../../image/静态图片/永生花/ia_600000008.jpg" alt="">

              <!-- <img src="../../image/静态图片/永生花/" alt=""> -->
             
              
            </a>
          </li>
          <li class="product">
           <a href="">鲜花不变的承诺</a>
          </li>
          <li class="market-price">
            <p> <span>$</span>
            <span class="orderPratice">766</span></p>
           
          </li>
          <li class="order-price">
            <p>
              <span>$</span>
            <span>766</span>
            </p>
            
          </li>
        
          <li  class="anniu">
          <el-input-number v-model="num" @change="handleChange"  :min="1" :max="10" label="描述文字" size="small"></el-input-number>
          </li>

          <li class="operate">
           <div >
             <a href="">删除</a>
           </div>
            <div>
              <a class="wode" href="">移动到我收藏</a>
            </div>
          </li>
        
         
        </ul>
      </div>

    </div>

    <!-- 结算去结算 -->
    <div class="set-bar">
      <a href="">
        <!-- <span>22</span> -->
        <i class="iconfont iconleftarrow"></i>

        继续挑选
      </a>
      <div class="set-stat">
        
          <span class="price-sign">应付金额:</span>
          <span class="price-num">¥766</span>

      </div>
      <button>去结算</button>

    </div>

    <!-- 服务 -->
    

    <div class="ad-container">
        <ul class="ad-container-ul">
          <li>
              <img src="../../common/images/common_qz.png" alt="">
            <a href="">
              <h4>鲜花电商龙头</h4>
              <span>销量领先，权威认证龙头企业</span>
            </a>
          </li>   
          <li>
              <img src="../../common/images/common_qz.png" alt="">
            <a href="">
              <h4>鲜花电商龙头</h4>
              <span>销量领先，权威认证龙头企业</span>
            </a>
          </li>    
          <li>
              <img src="../../common/images/common_qz.png" alt="">
            <a href="">
              <h4>鲜花电商龙头</h4>
              <span>销量领先，权威认证龙头企业</span>
            </a>
          </li>   
          <li>
              <img src="../../common/images/common_qz.png" alt="">
            <a href="">
              <h4>鲜花电商龙头</h4>
              <span>销量领先，权威认证龙头企业</span>
            </a>
          </li>    
          <li>
              <img src="../../common/images/common_qz.png" alt="">
            <a href="">
              <h4>鲜花电商龙头</h4>
              <span>销量领先，权威认证龙头企业</span>
            </a>
          </li>
      
        </ul>
      </div>



    </div>
  


  
   
</template>

<script type="text/ecmascript-6">
  //发请求
  export default {
    data() {
      return {
        num: 1,
        allMoney: 0
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    },

    computed: {

    }
  };





  
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

        

       
        
      

      .service 
        width 252px
        display flex
        justify-content space-between
        color #737373
        font-size 14px
        line-height 20px


    




  
  .order
    width 988px
    margin 0 auto
    border 1px solid #999999
     
    .order-title
      width 988px
      height 41px
      background #ebebeb
      margin 0 auto
      line-height 41px
      // position relative
      display flex
      li
        font-size 15px
        font-weight bold
        // padding 10px 0
        height 41px
        line-height 25px
        color #737373
      .el-input-number
        position relative
        top 100px
        left 20px
     
        // left 20%
        // margin-left 40px
        
      .product
        width 432px
      .selecter
        margin-left 10px
        width 40px
        i
          margin-left 10px


      .market-price
        width 120px
      .order-price
        width 120px

      .anniu
        position relative 
        top 105px 
        left 2px
        margin-right 10px

       


      .num
       
      .operate
        width 120px


    .order-list
      margin 0 auto
      display flex
      width 988px
      // flex-wrap nowrap

      li
        height 88px
        font-size 15px
        line-height 88px
      .selecter
        width 36px
        i
          margin-left 10px
      .img-box
        img
          display block 
          
          width 80px
          height 88px
      .product
        width 332px
        a
          margin-left 30px

        a:hover
          color red
      .market-price

        width 120px
        p
          margin-left 30px
      .order-price
      
        width 120px
        p
          margin-left 30px
      .num
        width 120px
        div
          margin-left 30px

      .operate
        div
          height 20px
          width 100px
        // width 120px
        a
          font-size 15px
        
        a:hover
          color red

  .set-bar
     
    width 988px
    height 52px
    margin 0 auto
    margin-top 20px
    display flex
    border 1px solid #999999
    a
      display block
      margin-right 300px
      font-size 15px
      width 90px
      height 52px
      line-height 52px
      i
        font-size 15px
    a:hover
      color red
    .set-stat
      
      width 111px
      height 53px
      font-size 15px
      margin-right 400px
      line-height 52px
      span
        color #737373
    button
      width 120px
      height 52px
      background #ff6a00
      border none
  

  .ad-container
      width 1200px
      margin 20px auto
      height 120px
      // background pink
      .ad-container-ul
        display flex
        justify-content space-between
        li
          width 240px
          // height 120px
          padding 30px 0
          display flex
          // flex-direction column
          align-items center
          a
            h4
              font-size 16px
              color #4d4d4d
            span
              font-size  12px 
              color #999






        


 

    



       

        



    
      


      











</style>
