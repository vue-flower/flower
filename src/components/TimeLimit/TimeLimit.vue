<template>
  <div class="time-limit">
    <div class="time-title">
      <div class="time-title-content">
        <img src="../../common/images/limit.png" alt="">
        <div>
          <span>限时推荐</span>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(limit, index) in limitList" :key="index">
        <a href="">
          <img :src="limit.imgsrc" alt="">
          <div class="advise">
            <p class="advise-desc">{{limit.Cpmc}}</p>
            <p class="advise-price">￥<span>{{limit.Price}}</span></p>
            <p class="advise-discount">
              <img src="https://img02.hua.com/tuijian/tuijian_arrow.png" alt="">
              <span>直降{{limit.discount}}元</span>
            </p>
          </div>
        </a>
      </li>     
    </ul>
  </div>
</template>
  
<script type="text/ecmascript-6">
import {mapGetters, mapState} from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    // components:{
    //   limitList
    // },
    mounted() {
      this.$store.dispatch('getLimit')
      // setTimeout(() => {
        // }, 2000);
    },
    computed:{
      ...mapState({
        limitList : state => state.limit.limitList
      })

    }
  }
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
  .time-limit
    width 1200px
    height 200px
    margin 0 auto
    display flex
    position: absolute;
    top: 825px;
    left 176px
    .time-title
      background-color #aacc03
      width 240px
      position relative
      display flex
      justify-content center
      align-items center
      .time-title-content
        text-align center
        img 
          display inline
        span
          font-size 24px
          color #000

    ul 
      display flex
      justify-content space-between  
      li
        height 200px
        width 240px
        position relative
        border 1px solid #e5e5e5
        a
          width 
          .advise
            position absolute
            left 10px
            bottom 10px
            .advise-price
              font-size 16px
              font-weight  bold
              color #232628
            .advise-discount
              width 78px
              height 24px
              text-align center
              line-height 18px
              // padding 2px
              border 1px solid #f60
              border-radius 10px
              span

                font-size 12px
                color #f60
</style>