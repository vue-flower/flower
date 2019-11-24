<template>

  <div>
    <div class="header"></div>

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
            <span>766</span></p>
           
          </li>
          <li class="order-price">
            <p>
              <span>$</span>
            <span>766</span>
            </p>
            
          </li>
        

          <el-input-number v-model="num" @change="handleChange"  :min="1" :max="10" label="描述文字"></el-input-number>


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
          <span class="price-num">¥534</span>

      </div>
      <button>去结算</button>

    </div>

    <!-- 服务 -->
    <div class="cart-server">
      <div class="toper-server">
        <ul>
           <li >
                    <span class="iconfont icon-packaging"></span>
                    <h4>鲜花电商龙头</h4>
                    <p>销量领先</p>
            </li>
            <li>
                    <span class="iconfont icon-Salescenter"></span>
                    <h4>鲜花电商龙头</h4>
                    <p>龙头企业</p>
            </li>
            <li>
                    <span class="iconfont icon-collection-fill"></span>
                    <h4>鲜花电商龙头</h4>
                    <p>龙头企业</p>
            </li>
            <li>
                    <span class="iconfont icon-collection-fill"></span>
                    <h4>鲜花电商龙头</h4>
                    <p>龙头企业</p>
            </li>
            <li>
                    <span class="iconfont icon-collection-fill"></span>
                    <h4>鲜花电商龙头</h4>
                    <p>龙头企业</p>
            </li>

            

        </ul>
      </div>

    </div>



  </div>
  


  
   
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };





  
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    width 1200px
    height 300px
    background pink
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
  .cart-server
    margin-top 30px
    // width 1423px
    height 162px 
    .toper-server
      width 990px
      height 120px
      margin 0 auto
      ul
        display flex
        flex-wrap wrap
        span
          float left
          margin-left 10px
          font-size 35px
          margin-top 5px
        h4
          margin-left 30px
          font-size 16px
          color  #4d4d4d
          margin-bottom 10px
          
        p
          margin-left 40px

          font-size 15px
          color  #999999
          white-space : normal nowrap



        


 

    



       

        



    
      


      











</style>
