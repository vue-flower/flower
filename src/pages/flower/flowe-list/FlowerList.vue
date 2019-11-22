<template>
  <div>
    <a href="javascript;" id="top"></a>
    <div class="flower-list">
      <ListItem v-for="(item,index) in chunkFlowerList[currentIndex]" :key="index" :flower="item"/>
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
  export default {
    data(){
      return {
        currentIndex:0
      }
    },
    components: {
      ListItem
    },
    computed: {
      ...mapGetters(['chunkFlowerList','totalFlower','totalPage'])
    } ,
    methods: {
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
.flower-list
  display flex
  width 969px
  flex-wrap: wrap
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
