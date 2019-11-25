<template>
  <div class="home">


    <div class="container-all">
      <TopNavLeft/>
    </div>
    <!-- 轮播 -->
    <Banner class="banner">
    </Banner>
    <Aside></Aside>
      
    <Ad></Ad>

    <TimeLimit></TimeLimit>

    <div class="hhhhhhh">
      <div class="white-30"></div>
      <floor v-for="(todo, index) in todos[0]" :key="index" :todo="todo"></floor>
      <div class="white-50"></div>
    </div>
  
          <!-- <floor></floor> -->
    <!-- <floor></floor>
    <div class="white-50"></div>
    <floor ></floor>
    <div class="white-50"></div>
    
    <floor></floor>
    <div class="white-50"></div>

    <floor></floor>
    <div class="white-50"></div>

    <floor></floor> -->

    <Footer>
    </Footer>
  </div>
</template> 

<script>
import {mapGetters} from 'vuex'
import Aside from '../../components/Aside/Aside'
export default {
  data(){
    return {
      todos:[]
    }
  },
  components:{
    Aside
  },
  computed: {
    ...mapGetters(['chunkFloorList'])
  },
  mounted() {
    this.$store.dispatch('getFloor')
    this.$nextTick(()=>{
      console.log(this.$store.getters.chunkFloorList)
    })
    console.log(this.todos)

  },
  watch: {
    chunkFloorList(){
      this.$nextTick(()=>{
        // console.log(this.chunkFloorList)
        this.todos = this.chunkFloorList
      })
    }
  },

};
</script>
  
<style lang="stylus" rel="stylesheet/stylus" scoped>
.home
  width 100%
  overflow hidden
  .container-all
    // width 100%
    // position relative
    position: absolute;
    top: 240px;
    left: 164px;
  .banner
    position absolute
    // top 40px
    // left 0
    z-index -1
    top 280px
    left 0
  .hhhhhhh
    position absolute
    top 1000px
    left 200px
    

</style>