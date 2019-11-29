<template>
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
</template>

<script type="text/ecmascript-6">
import { mapGetters,mapState } from 'vuex'
import {SAVE_SALE_SORT} from '../../../store/mutations-types'
  export default {
    data(){
      return {
        combine:'综合',
        isSaleUp: false,
        isPriceUp: false,
        isNewUp: false
      }
    },
    methods: {
      handleActive(path){
        // 切换图标  1.调整综合的样式
        this.combine = path
        if(path === '销量'){
          this.isSaleUp = !this.isSaleUp
        }else if(path === '价格'){
          this.isPriceUp = !this.isPriceUp
        }else if(path === '最新'){
          this.isNewUp = !this.isNewUp
        }
      }
    },
    computed: {
      ...mapState({
        flowerList: state => state.flower.flowerList
      }),
      ...mapGetters(['totalPage','hotFlowerList']),
    },
    mounted(){
      setTimeout(() => {
        // 升序
        this.$store.commit(SAVE_SALE_SORT,true)
      }, 2000);
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
      width 55px
      height 32px
      float left
      text-align center
      margin-left 10px
      &:nth-child(1)
        margin-left 5px
      .active 
        color #ff6a00

</style>
