<template>
  <div>
    <div class="flower-nav">
      <ul class="nav-left clearfix">
        <li><a  href="" :class="{active:combine==='综合'}" @click.prevent="handleActive('综合')">综合</a></li>
        <li>
          <a href="" @click.prevent="handleActive('销量')" :class="{active:combine==='销量'}">销量
            <i class="iconfont" :class="isSaleUp?'iconjiantou':'iconjiantouarrow486 '"></i>
          </a>
        </li>
        <li>
          <a href="" @click.prevent="handleActive('价格')" :class="{active:combine==='价格'}">价格
            <i class="iconfont" :class="isPriceUp?'iconjiantou':'iconjiantouarrow486 '"></i>
          </a>
        </li>
        <li>
          <a href="" :class="{active:combine==='最新'}" @click.prevent="handleActive('最新')">最新
            <i class="iconfont" :class="isNewUp?'iconjiantou':'iconjiantouarrow486 '"></i>
          </a>
        </li>
      </ul>
      <!-- <div class="nav-rigth">
        <span><strong>1</strong>/{{totalPage}}</span>
      </div> -->
    </div>

    <a href="javascript;" id="top"></a>
    <div class="flower-list">
      <ListItem v-for="(item,index) in flowerList[currentIndex]" :key="index" :flower="item"/>
    </div>

    <div class="flower-pagination clearfix">
      <div><p class="pagination-left">1-{{totalPage}} / 共{{totalFlower}}件商品</p></div>
        <div class="pagination-right">
          <el-pagination
            background
            layout="prev, pager, next"
            :total= "totalFlower"
            :page-size="16"
            @next-click="handleNextPage"
            @prev-click	="handlePrevPage"
            @current-change="handleCurrentPage"
            >
          </el-pagination>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ListItem from '../../../components/list-item/ListItem'
import { mapGetters,mapState } from 'vuex'
import { SAVE_SALE_SORT } from '../../../store/mutations-types'
  export default {
    data(){
      return {
        currentIndex:0,
        combine:'综合',
        isSaleUp: false,
        isPriceUp: false,
        isNewUp: false
      }
    },
    components: {
      ListItem
    },
    computed: {
      ...mapGetters(['totalFlower','totalPage']),
      ...mapState({
        flowerList: state => state.flower.flowerList
      })
    }, 
    methods: {
      handleActive(path){
        // 切换图标  1.调整综合的样式
        this.combine = path
        if(path === '销量'){
          this.isSaleUp = !this.isSaleUp
          this.isSaleUp ? this.$store.commit(SAVE_SALE_SORT,true):this.$store.commit(SAVE_SALE_SORT,false)
        }else if(path === '价格'){
          this.isPriceUp = !this.isPriceUp
        }else if(path === '最新'){
          this.isNewUp = !this.isNewUp
        }
      },
      handleNextPage(val,a,b){
        this.currentIndex = this.currentIndex +1
        console.log(1111)
        document.documentElement.scrollTop = 0+'px'
      },
      handlePrevPage(){
        this.currentIndex = this.currentIndex -1
        console.log(22222)
        document.documentElement.scrollTop = 0+'px'
      },
      handleCurrentPage(val){
        this.currentIndex = val
        document.documentElement.scrollTop = 0+'px'
      }
    } 
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.flower-nav
  width 100%
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
      width 55px
      height 32px
      float left
      text-align center
      margin-left 10px
      &:nth-child(1)
        margin-left 5px
      .active 
        color #ff6a00
.flower-list
  display flex
  width 969px
  flex-wrap: wrap
  justify-content center
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
