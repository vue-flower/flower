<template>
  <div>
    <img class="topImg" src="../../image/top.png" alt="">
    <header>
      <div id="nav">
        <ul class="leftNav">
          <li @click="$router.push('/home')">
            <a href="##">
              <span>
                <i class="iconfont icon-xingxing"></i>
              </span>
              <span>收藏鲜花网(hua.com)</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i class="iconfont icon-weixin"></i>
              </span>
              <span>关注微信</span>
            </a>
          </li>
          <li>
            <a href="##">
              <span>
                <i class="iconfont icon-shouji"></i>
              </span>
              <span>花礼网App</span>
            </a>
          </li>
        </ul>
        
        <ul class="rightNav">
          <li>
            <a href="">
              <span>你好,请登录</span>
            </a>
            </li>
          <li>
            <a href="">
              <span>注册</span>
            </a>
         </li>
         <li style="color:#e1dde1;">|</li>
            <a href="">
              <span>订单查询</span>
            </a>
          </li>
         <li style="color:#e1dde1;">|</li>
            <a href="">
              <span>我的花礼</span>
            </a>
          </li>
          <li style="color:#e1dde1;">|</li>
            <a href="">
              <span>客户服务</span>
            </a>
            <span>
                <i class="iconfont icon-xiaosanjiaodown"></i>
              </span>
            <li style="color:#e1dde1;">|</li>
            <a href="">
              <span>
                <i class="iconfont icon-gouwuche_"></i>
              </span>
              <span>购物车(0)</span>
              <span>
                <i class="iconfont icon-xiaosanjiaodown"></i>
              </span>
            </a>
          </li>
          <li style="color:#e1dde1;">|</li>
          
        </ul>
      </div>
     
      <div id="search">
        <img class="im" src="./imgs/1.jpg" alt="">
        <div class="import">
          <input type="text" placeholder="商品关键词"> 
          <button>搜索</button>
          <ul class="text">
            <li>玫瑰花|</li> 
            <li>永生花|</li>
            <li>生日仙花|</li>
            <li>金玫瑰|</li>
          </ul>
          <ul class="phone">
            <li>
              <i class="iconfont icon-dianhua"></i>
              <span>400-889-8188</span>
              <i class="iconfont icon-ziyuan"></i>
               <a href="#">在线客服</a>  
            </li>
            <!-- <li style="color:#e1dde1;">|</li> --> 
          </ul>
        </div>
      </div>

      <div id="guide">
        <div class="leftGuide">
          <ul class="guideA">
            <li>
              <a href="##">全部商品导购</a>
              <i class="iconfont icon-xiangxiajiantou"></i>
            </li>
          </ul>
        </div>
        <div class="rightGuide">
          <ul class="guideB">
            <li>
              <a href="##">首页</a>
            </li>
            <li>
              <a href="##">鲜花</a>
            </li>
            <li>
              <a href="##">永生花</a>
            </li>
            <li>
              <a href="##">蛋糕</a>
            </li>
            <li>
              <a href="##">礼品</a>
            </li>
            <li>
              <a href="##">巧克力</a>
            </li>
            <li>
              <a href="##">花语大全</a>
            </li>
            <li>
              <a href="##">设计师沈臻选鲜花</a>
            </li>
            <li>
              <a href="##">感恩节鲜花礼物</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <div id="loader">
        <a href="##" style="font-weight:bold">首页</a>
        <span>></span>
        <a href="##">鲜花</a>
        <span>></span>
        <a href="##">一往情深</a>
        <span>></span>
      </div>
      <div id="content">
        <div class="leftContent">
          <img style="width:510px;height:520px" src="./imgs/huaa.jpg" alt="">
          <div class="smallImg">
            <img src="./imgs/smallo.jpg" alt="">
            <img src="./imgs/smallo.jpg" alt="">
            <img src="./imgs/smallo.jpg" alt="">
            <img src="./imgs/smallo.jpg" alt="">
          </div>
        </div>
        <div class="rightContent">
          <h1 style="font-size:20px;font-weight:bold">一往情深--精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</h1>
          <h1 style="color:orange;font-size:20px;margin-top:10px">经典爆款，年销售冠军！</h1>
          <h1 style="margin-top:10px">已售
            <i style="color:orange">7.5</i>
            万件
          </h1>
          <div class="cut"></div>
          <p>类 别：鲜花-鲜花礼盒 编 号：9010966</p>
          <p>材 料：高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎</p>
          <p>包 装：牛皮纸和深咖啡色条纹纸，银色缎带花结，魔力铁山灰包装盒</p>
          <p>花 语：你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</p>
          <p>配 送：全国各个城市  </p>
          <p>配 送至：请选择
            <i class="iconfont icon-xiangxiajiantou"></i>
          </p>
          <div class="cut" style="margin-top:65px"></div>
          
          <ul class="show">
            <li>
              <a href="##">
                <img src="./imgs/small.jpg" alt="">
                <span>一往情深</span>
              </a> 
            </li>
            <li>
              <a href="##">
                <img src="./imgs/small.jpg" alt="">
                <span>一往情深</span>
              </a> 
            </li>
            <li>
              <a href="##">
                <img src="./imgs/small.jpg" alt="">
                <span>一往情深</span>
              </a> 
            </li>
            <li>
              <a href="##">
                <img src="./imgs/small.jpg" alt="">
                <span>一往情深</span>
              </a> 
            </li>
          </ul>

          <div class="price">   
            <p>花礼价:
              <span style="color:orange;font-weight:bold">$239</span>
            </p>
          </div>

          <div class="message">
            <p>促销信息:</p>
            <img src="./imgs/appzx_01.jpg" alt="">
            <p style="color:orange;font-size:17px;margin-top:16px">$234</p>
            <p>
              <a href="##">去APP购买</a>
               <i class="iconfont icon-xiangxiajiantou"></i>
            </p>
            <p>
              <a href="##">去微信购买</a>
               <i class="iconfont icon-xiangxiajiantou"></i>
            </p>
          </div>

          <div class="buy">
            <button style="background:rgba(0,0,0,0.1);border:1px #ff6a00 solid">加入购物车</button>
            <button style="background:#ff6a00;margin-left:17px">立即购买</button>
            <div class="collect">
                <span>
                  <i class="iconfont icon-aixin">  </i>
                </span>
                <a href="##">  收 藏</a>
            </div>
          </div>
          

        </div>
      </div>
    </main>
      
    <footer>
      <div class="leftFooter">
        <div class="details">
          <p>浏览记录</p>
          <div class="special" >
            <div class="little">
              <img src="./imgs/details1.jpg" alt="">
            </div>
            <h1 >温柔如你—戴安娜粉玫瑰12枝，石竹梅7枝
                <br/><span style="color:#fe7a24">$239</span>
            </h1>
          </div>
        </div>

        <div class="shops">
          <p>热销推荐</p>
          <ul class="shop">
            <li v-for="(ProductPrice, index) in ProductPrices" :key="index">
              <a href="##">
                <img :src="`https://img01.hua.com/uploadpic/newpic/${ProductPrice.ItemCode}.jpg_220x240.jpg`" alt="">
                <h1>
                  鲜花/{{ProductPrice.Cpmc}}-{{ProductPrice.Instro}}
                </h1>
                <h2 style="color:#fe7a24">{{ProductPrice.Price}}</h2>
              </a> 
              <div class="cut"></div>
            </li>

           

          </ul>
        </div>

      
      </div>
      <div class="rightFooter">
        <div class="lead">
          <ul>
            <li>
              <a href="##">商品详情</a>
            </li>
            <li style="width:130px;height:40px">
              <a href="##">用户评价(<b style="color:orange">0000</b>)</a>
            </li>
            <li>
              <a href="##">购物保障</a>
            </li>
          </ul>
        </div>
        <div class="photo">
          <img src="./imgs/photo1.jpg" alt="">
          <img src="./imgs/photo2.jpg" alt="">
          <img src="./imgs/photo3.jpg" alt="">
          <img src="./imgs/photo4.jpg" alt="">
          <img src="./imgs/photo5.jpg" alt="">
        </div>

        <div class="lead" style="margin-top:30px">
          <ul>
            <li>
              <a href="##">商品详情</a>
            </li>
            <li style="width:130px;height:40px">
              <a href="##">用户评价(<b style="color:orange">0000</b>)</a>
            </li>
            <li>
              <a href="##">购物保障</a>
            </li>
          </ul>
        </div>
        <div class="evaluate">
          <ul>
            <li>
              <div class="user">
                <img src="./imgs/avatar.jpg" alt="">
                <p>***********</p>
              </div>
            <div class="say">
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <p>第一次购买女优说很漂亮</p>
            </div>
            </li>
            <img class="bought" src="./imgs/pos.jpg" alt="">
            <div class="pos">
                <i class="iconfont icon-dingwei"></i>
                <p>美国加利福尼亚</p>
                <p style="margin-left:20px">2013-11-22</p>
            </div>
            <div class="cut"></div>
          </ul>
            
          <ul>
            <li>
              <div class="user">
                <img src="./imgs/avatar.jpg" alt="">
                <p>***********</p>
              </div>
            <div class="say">
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <p>第一次购买女优说很漂亮</p>
            </div>
            </li>
            <img class="bought" src="./imgs/pos.jpg" alt="">
            <div class="pos">
                <i class="iconfont icon-dingwei"></i>
                <p>美国加利福尼亚</p>
                <p style="margin-left:20px">2013-11-22</p>
            </div>
            <div class="cut"></div>
          </ul>
          
          <ul>
            <li>
              <div class="user">
                <img src="./imgs/avatar.jpg" alt="">
                <p>***********</p>
              </div>
              <div class="say">
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <i class="iconfont icon-xingxing1"></i>
              <p>第一次购买女优说很漂亮</p>
              </div>
            </li>
            <img class="bought" src="./imgs/pos.jpg" alt="">
            <div class="pos">
                <i class="iconfont icon-dingwei"></i>
                <p>美国加利福尼亚</p>
                <p style="margin-left:20px">2013-11-22</p>
            </div>
            <div class="cut"></div>
          </ul>

          <div class="btn">
            <button>本商品评价<span style="color:orange">7732</span>条</button>
            <button style="margin-left:40px">所有商品评价<span style="color:orange">7732</span>条</button>
          </div>
        </div>

        <div class="lead" style="margin-top:30px">
          <ul>
            <li>
              <a href="##">商品详情</a>
            </li>
            <li style="width:130px;height:40px">
              <a href="##">用户评价(<b style="color:orange">0000</b>)</a>
            </li>
            <li>
              <a href="##">购物保障</a>
            </li>
          </ul>
        </div>
        <div class="protect">
          <ul class="title">
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
            <li>
              <i class="iconfont icon-damuzhi" ></i>
              <p style="margin:15px 0 0 10px">销量第一</p>
            </li>
          </ul>
          <img src="./imgs/protect.jpg" alt="">
        </div>
        

      </div>
    </footer>

   
    <div class="find">
      <ul class="toFind">
        <li>
          <a href="##">首页</a>
          <p>|</p>
          <a href="##">关于我们</a>
          <p>|</p>
          <a href="##">媒体报道</a>
          <p>|</p>
          <a href="##">联系方式</a>
          <p>|</p>
          <a href="##">企业团购</a>
          <p>|</p>
          <a href="##">花店入驻</a>
          <p>|</p>
          <a href="##">友情链接</a>
          <p>|</p>
          <a href="##">在线补款</a>
          <p>|</p>
          <a href="##">为什么选择中国鲜花礼品网</a>
        </li>
      </ul>
      <div class="imgFind">
        <ul>
          <li>
            <a href="##">
              <img src="./imgs/m1.png" alt="">
            </a>
          </li>
          <li>
            <img src="./imgs/m2.png" alt="">
          </li>
          <li>
            <a href="##">
              <img src="./imgs/m3.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="##">
              <img src="./imgs/m4.jpg" alt="">
            </a>
          </li>
        </ul>

      </div>
      <div class="toText">
        <ul class="toTextA">
          <li>
            <a href="##">中国花卉协会会员</a>
            <a href="##">中国电子商务协会会员</a>
            <p>ICP经营许可证：</p>
            <a href="##">粤B2-20050744 </a>
            <p>|</p>
            <a href="##"> 粤ICP备09171662号</a>
            <p>粤公网安备44030502000373号</p>
            <p>Copyright © 2005-2019</p>
          </li>
        </ul>
        <ul class="toTextB">
          <li>
            <p>花礼网 （中国鲜花礼品网）</p>
            <a href="##">www.hua.com</a>
            <p>深圳市百易信息技术有限公司</p>
            <p>中国领先鲜花网品牌,专业鲜花速递服务！</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    async mounted(){
      this.$store.dispatch('getProductPricesAction')
    },
    computed: {
      ...mapState({
        ProductPrices: state => state.ProductPrices.ProductPrices
      })
    }
  }
</script>

<style lang="stylus">
  .topImg
    width 100%
    height 80px
  header
    width 100%
    height 230px
    // background #f2f2f2
    #nav
      width 1400px
      height 40px
      background #f2f2f2
      margin 0 auto
      .leftNav
        width 400px
        display flex
        justify-content space-between
        line-height 35px
        float left
        padding: 0 5px
      .rightNav
        width 500px
        height 35px
        float right
        // background yellow
        display flex
        justify-content space-between
        line-height 35px
        padding 0 5px
    #search
      width 100%
      height 140px
      // background pink
      margin 0 auto 
      position relative
      .im
        position absolute
        top 30%
        left 17%
      .import
        position absolute
        top 45px
        left 45% 
        input   
          width 270px
          height 40px
          border 1px orange solid  
        button 
          width 80px
          height 42px
          background #ff6a00
          font-size 18px
          color #fff
      .phone
        position absolute
        right -400px
        top 8px
        .server
          margin-left 0
          z-index 100
      .text
        display flex    
    #guide
      width 100%
      height 50px
      background #fe7a24 
      display flex
      padding 0 300px
      
      .leftGuide
        width 200px
        height 50px
        // background orange
        // margin-left 0px
        .guideA
          font-size 17px 
          margin-left 30px
          line-height 50px
          a
            color white
          i 
            margin-left 48px
      .rightGuide
        width 1200px
        height 50px
        // background yellowgreen 
        .guideB
          display flex
          justify-content space-around
          line-height 50px
          padding 0 30px
          margin-left -40px
          li
            a
              font-size 17px
              color white
  main 
    #loader
      width 1200px
      height 20px 
      //  
      margin 0 auto
      a
        font-size 20px
    #content
      width 1200px
      height 750px
      display flex
      // background #E8CCFF
      margin 5px auto  0
      border 1px solid #f2f2f2
      .leftContent
        width 520px
        height 650px
        margin 33px 0 0 73px
        // background 	#FF69B4 
        .smallImg
          margin-top 15px
          display flex
          justify-content space-evenly
          img   
            width 70px
            height 70px     
      .rightContent
        width 520px
        height 850px
        // background #33FFDD
        margin 33px 0 0 100px
        .cut
          width 500px
          height 1px
          background #737373
          margin-top 30px
          margin-bottom 30px
        p
          margin-top 15px
          font-size 15px
        .show
          display flex 
          li
            margin-left 15px
            img   
              width 50px
              height 50px
            span 
              margin-bottom 60px
        .price
          margin-top 60px      
        .message
          width 518px
          height 42px
          background #e5e5e5
          display flex
          // justify-content space-around
          margin-top 17px
          p
            margin-left 20px
            font-size 15px
          img
            width 100px
            height 30px
            margin 8px 0 0 5px
        .buy
          display flex
          button 
            width 160px
            height 50px
            margin-top 17px
            font-size 20px
            color white
          .collect
            margin 35px 0 0 30px
              
  footer 
    width 1200px
    height 4550px
    // background #99CC66
    margin 15px auto 0
    display flex
    .leftFooter 
      width 210px
      height 2000px
      // background #FFFFCC
      border 1px #e5e5e5 solid
      .details
        height 140px
        border 1px #e5e5e5 solid
        p
          width 208px
          height 35px
          background #ffe8d9
          text-align center
          line-height 35px
          font-size 16px
          color #80807d 
        .special
          display flex 
          .little
            border 1px #e5e5e5 solid
           
          h1
            margin 20px 0 0 10px
            
      .shops
        height 1850px
        margin-top 15px
        // background #FFCCCC
        p
          width 208px
          height 35px
          background #ffe8d9
          text-align center
          line-height 35px
          font-size 16px
          color #80807d 
        .shop
          width 210px
          height 1870px
          img
            width 180px
            height 200px
            margin 8px 0 0 8px
          h1
            margin 10px 0 0 3px
            font-size 14px
          h2
            margin 10px 0 0 3px
          .cut
            width 190px
            height 1px
            background #e5e5e5
            margin 25px 0 0 10px
    .rightFooter 
      height 4550px
      width 970px
      // background orange   
      margin-left 17px
      .lead
        ul
          display flex
          li
            width 110px
            height 40px
            //  
            line-height 40px
            text-align center
            border 1px #7e8c8d solid 
      .photo
        height 3065px
        // background yellow
        border 1px #7e8c8d solid
        img
          margin 10px 0 0 100px
      .evaluate
        height 760px
        width 970px
        // background yellow
        border 1px #7e8c8d solid
        ul
          li
            margin 20px 0 0 20px
            display flex
            .user
              img
                border-radius:50%
                width 32px
                height 32px
                margin-left 20px
            .say
              margin 10px 0 0 20px
          .bought
            width 80px
            height 80px
            margin 6px 0 0 130px
          .pos
            margin 20px 0 0  130px
            display flex
          .cut
            width 900px
            height 1px
            background #7e8c8d
            margin 30px 0 0 30px
        .btn
          margin 25px 0 0  280px
          button
            width 160px
            height 40px
            background rgba(0,0,0,0)
      .protect
        height 530px
        // background red
        border 1px #7e8c8d solid
        .title
          display flex
          justify-content space-around 
          margin-top 20px
          .iconfont
            color #ff6600
            font-size 80px
        img
          margin 25px 25px 25px 25px  

  .find
    width  1400px
    height 300px
    // background red 
    margin-left 320px
    .toFind  
      li
        display flex
        justify-content space-around
        margin-top 70px
        
    .imgFind
      margin-top 60px
      ul
        display flex
        justify-content center
        li
          margin-left 15px
    .toText
      margin-top  40px   
      .toTextA
        li
          display flex
          justify-content center
      .toTextB
        margin-top 10px 
        li
          display flex
          justify-content center         
</style>

 
