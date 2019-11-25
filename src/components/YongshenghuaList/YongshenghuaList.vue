<template>
    

   

    <!-- 鲜花商品 -->
    <div class="flowersGoods">
      <ul>
        <!-- <li > -->
        <li v-for="(flowers,index) in yongshenghuaList " :key="index">
          
          <a href="##">
            <img :src="`https://img01.hua.com/uploadpic/newpic/${flowers.ItemCode}.jpg_220x240.jpg`" alt="">

            <h4>{{flowers.Cpmc}}</h4>
            <h6>{{flowers.Instro}}</h6>
            <h5>永生花台灯</h5>
            <h5>{{flowers.Price}}</h5>
          </a>
        </li>

       

      </ul>
    </div>
    
  
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
// import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return {

      }
    },

    mounted(){
       this.$store.dispatch('getYongshenghuaList')
      //分发获取永生花列表
      // setTimeout(() => {
      //       console.log(222222)
      //       this.$store.dispatch('getYongshenghuaList')
      //       // this.loadingInstance.close()

      //       // this.loadingInstance.close()
      //   }, 2000);


    },

    computed: {
      ...mapState({
        yongshenghuaList: state => state.yongshenghua.yongshenghuaList 
      })
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .flowersGoods
        width 1200px
        margin 0px auto
        ul
          display flex
          flex-wrap: wrap

          li
              width 285px
              height 400px
              margin-left 15px
              a
                display block
                width 300px
                height 300px
                img
                  width 285px
                  height 285px
                h4
                
                  font-size 15px
                  text-align center
              
                  font-weight bold
                  margin-top 5px
                  color red
                h6
                  margin-top 5px
                  font-size 15px
              
                  text-align center
                  color #233333 
                h5
                  margin-top 5px
                  font-size 15px
              
                  text-align center


</style>