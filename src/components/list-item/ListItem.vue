<template>
  <div class="container">
    <div class="wrap">
      <img class="flower-img" v-lazy="`http://img01.hua.com/uploadpic/newpic/${flower.ItemCode}.jpg_220x240.jpg`" alt="">
      <span class="price">￥{{flower.Price}}</span>
      <a href="" class="detail">
        <p class="des">{{flower.Instro}}</p>
        <p class="keys">{{flower.Cpmc}}</p>
      </a>
      <div class="btns">
        <button class="star"  @click.prevent="star(flower)" >
          <i class="iconfont iconaixin1-copy" ref="isStar" :style="{color:isChoose? '#ff6a00':'#888'}"></i>收藏
        </button>
        <button class="car">
          <i class="iconfont icongouwuchekong"></i>加入购物车
        </button>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { SAVE_STAR } from '../../store/mutations-types'
  export default {
    data(){
      return {
        isChoose: false
      }
    },
    props:{
      flower:{
        type: Object,
        required: true
      }
    },
    mounted(){
      
    },
    methods: {
      star(flower){
        let { isChoose } = this
        if(isChoose === false){
          // 没有选中-收藏
          this.$store.commit(SAVE_STAR,{flower:flower,isStar:true})
        }else{
          // 选中-取消收藏
          this.$store.commit(SAVE_STAR,{flower:flower,isStar:false})
        }
        this.isChoose = !this.isChoose
      }
    }
  }
</script>

<style scoped lang='stylus' rel="stylesheet/stylus">
  .container
    width 240px
    height 372px
    // background #8DEBE6
    .wrap
      padding 10px
      .flower-img
        width 220px
        height 240px
      .price
        font-size 14px
        font-weight bold
        color #ff6a00
      .detail
        margin 10px 0
        &:hover
          color #ff6a00
        .des
          margin-top 10px
          font-size 12px
          width 100%
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
        .keys
          font-size 12px
          margin-bottom 10px
          color #ff6a00
          width 100%
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
      .btns
        width 100%
        margin-bottom 0
        cursor pointer
        a:hover
          color #ff6a00
        .star,.car
          width 50%
          height 26px
          line-height 24px
          font-size 12px
          i
            color #888

      



</style>
