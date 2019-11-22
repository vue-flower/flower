<template>
  <div class="floor1">
    <div class="floor-title">
      <h3 class="h3">
        <a class="title" href="" style="font-size:20px color:red">爱情鲜花</a>
        <span class="content">送·让你怦然心动的人</span>
      </h3>
      <div class="title-right"><a href="">
        更多爱情鲜花 >>
        </a></div>
    </div>
      <div class="floor-wrap">
        <div class="conten-left">
          <div class="container">
            <a href="">
              <img
                src="https://img02.hua.com/pc/pimg/pc_home_banner_lover.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="text-wrap">
            <div class="text">
              <a href="">爱情鲜花专区 >></a>
            </div>
          </div>
        </div>
        <div class="content-right">
          <ul>
            <FloorList v-for="(item, index) in chunkFloorList[0]" :key="index" :floor="item">

            </FloorList>
            <!-- <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="img-box">
                  <img
                    src="https://img01.hua.com/uploadpic/newpic/9092112.jpg_220x240.jpg"
                    alt=""
                  />
                </div>
                <div class="text-area">
                  <p>爱情 · 99枝玫瑰赠德芙心语巧克力</p>
                  <h5>¥629</h5>
                  <p>已售 2539 件</p>
                </div>
              </a>
            </li> -->
          </ul>
        </div>
      </div>
  </div>

</template>
  
<script type="text/ecmascript-6">
import FloorList from './FloorList'
import { mapGetters,mapState } from 'vuex'
export default {
  data() {
    return {
      // chunkFlowerList:[]
    }
  },
  components:{
    FloorList  
  },
  computed: {
    ...mapGetters(['chunkFloorList']
      )
    // ...mapState({
    //   floorList : state => state.floor.floorList
    // })
  },
  mounted(){
    this.$store.dispatch('getFloor')
    console.log(this.$store.getters.chunkFloorList)
  }
//   methods: {
    
//   },

 };
</script>
  
<style lang="stylus" rel="stylesheet/stylus">

.floor1
  width 1200px
  height 668px
  margin 0 auto

  .floor-title
    display flex
    justify-content space-between
    .tltle-right
      font-size 12px
      left 22px
      margin-top 6px
    .h3
      .title
        color #737373
        font-size 20px
      .content
        // display block
        font-size 14px
        color #737373
        margin-left 20px
  .floor-wrap
    display: flex
    .conten-left
      // width 243px
      height 666px
      background #ffc0bb 
      .container
        width 239px
      .text-wrap
        width 239px
        height 228px
        .text
          width 194px
          height 52px
          margin 70px auto
          text-align center
          font-size 18px
          line-height 48px
          
          border 2px solid #fff
          a
            color #ffffff
    .content-right
      li
        width 240px
        height 334px
        float left
        border 1px solid #e5e5e5
        a
          color #737373
          text-align center
          .img-box
            // padding 2px
            margin 15px 9px
            img 
              width 220px
              height 240px
          .text-area
            box-sizing border-box
            padding 0 0 10px 0
            p 
              font-size 12px
            h5
              font-size 14px
              font-weight bold
              color #000
</style>