<template>
  <div class="flower-container">

    <!-- flower 左边导航 start -->
    <div class="flower-left">
      <!-- 分类item start-->
      <div class="flower-classify">  
        <ClassifyItem v-for="(classify,index) in classifysData" :classify="classify" :key="index"/>
      </div>
      <!-- 分类item end-->

      <!-- 热销列表start -->
      <div class="flower-hot">
        <p class="title">热销鲜花推荐</p>
        <div class="hot-list">
          <div class="item">
            <a href=""><img class="flower-img" src="../../image/flower/ia_800000025.jpg" alt=""></a> 
            <a href="" class="detail">
              <p class="des">描述</p>
            </a>
            <span class="price">￥145</span>
          </div>  
        </div>  
      </div>  
      <!-- 热销列表end -->

      <!-- 最新订单评价 start -->
      <div class="flower-comment">
        <p class="title">最新订单评价</p>
        <div class="hot-list">
          <div class="item">
            <a href=""><img class="flower-img" src="../../image/flower/ia_800000025.jpg" alt=""></a> 
            <div class="comment-content">
              <a href="" class="detail">
                <p class="des">会员号：</p>
              </a>
              <span class="price">花很好，很新鲜</span></span>
            </div>
            
          </div>  
        </div>  
      </div>  
      <!-- 最新订单评价 end -->
    
    </div>
    <!-- flower 左边导航 end -->

    <!-- flower 右边主体 start -->
    <div class="flower-content">

      <!-- 广告start -->
      <div class="flower-adv">
        <Banner/>
      </div>
      <!-- 广告end -->

      <div class="flower-nav">
        <ul class="nav-left clearfix">
          <li><a  href="">综合</a></li>
          <li>
            <a href="">销量
            </a>
          </li>
          <li><a href="">价格</a></li>
          <li><a href="">最新</a></li>
        </ul>
        <div class="nav-rigth">
          <span><strong>1</strong>  /12</span>
          <button><</button>
          <button>></button>
        </div>
      </div>

      <div class="flower-list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem isHot="true"/>
      </div>

      <div class="flower-pagination clearfix">
          <div><p class="pagination-left">1-12 / 共310件商品</p></div>
          <div class="pagination-right">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="600"
              page-count="12"
              pager-count="6"
              >
            </el-pagination>
          </div>
      </div>

    </div>
    <!-- flower 右边主体 end -->

  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import ListItem from '../../components/list-item/ListItem'
import ClassifyItem from '../../components/classify-item/ClassifyItem'
import classifysData from './datas/classify'
import Banner from '../../components/banner/Banner'
  export default {
    data(){
      return {
        classifysData,
      }
    },
    components:{
      ListItem,
      ClassifyItem,
      Banner
    },
    mounted(){
      new Swiper('.flower-adv',{
        // autoplay: true,//可选选项，自动滑动
      })
      setTimeout(() => {
        this.classifysData = classifysData
      }, 2000);
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .flower-container
    display flex
    width 1200px
    height 100%
    margin 0 auto
    .flower-left
      width 210px
      margin-right 24px
      .flower-classify
        border 1px solid #ccc
        width 100%
        // height 300px

      
      .flower-hot
        margin-top 20px
        border 1px solid
        width 100%
        height 500px
        .title
          width 100%
          height 32px
          line-height 32px
          text-align center
          background #ffe8d9
          font-size 14px
        .item
          width 190px
          margin 5px 
          border-bottom 1px solid
          .price
            font-size 14px
            font-weight bold
            color #ff6a00
          .des
            margin-top 10px
            font-size 12px  
            &:hover
              color #ff6a00
      .flower-comment
        width 100%
        height 500px   
        margin-top 20px
        border 1px solid  
        .title
          width 100%
          height 32px
          line-height 32px
          text-align center
          background #ffe8d9
          font-size 14px
        .hot-list
          width 100%  
          .item
            width 190px
            height 77px
            margin 5px
            display flex
            img
              width 49px
              height 55px
              border 1px solid
            .comment-content
              font-size 12px
              padding-left 10px
              .price
                margin-top 10px






    .flower-content
      width 969px
      height 1000px
      .flower-adv
        width 100%
        height 342px
/deep/ .swiper-wrapper
          width 969px
          height 342px
/deep/ .swiper-slide
            width 100%
            height 100%
            &>img 
              width 969px
              height 100%
      .flower-nav
        height 32px
        font-size 14px
        line-height 20px  
        text-align start
        background #ebebeb 
        margin 10px 0 20px 0  
        line-height 32px
        position relative
        .nav-left
          &>li 
            width 43px
            height 32px
            float left
            margin-left 10px
        .nav-rigth
          display flex   
          height 32px
          position absolute
          right 0
          top 0
          margin-right 10px
          span 
            margin-right 10px
            strong
              color red
          button  
            width 55px
            height 23px
            margin auto 0
      .flower-list
        display flex
      .flower-pagination
        width 100%
        height 83px
        line-height 83px
        border 1px solid
        border-left none
        border-right none
        .pagination-left
          float left
          
        .pagination-right
          float right
          .el-pagination
            margin-top 24px

</style>
