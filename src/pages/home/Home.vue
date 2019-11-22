<template>
  <div class="home">
    <TopHeader>
    </TopHeader>

    <div class="container-all">
      <TopNavAside>
      </TopNavAside>
    </div>
      <Banner class="banner">
      </Banner>

    <Ad></Ad>

    <TimeLimit></TimeLimit>
    <div class="white-30"></div>


        <floor v-for="(todo, index) in todos" :key="index" :todo="todo"></floor>
        <div class="white-50"></div>
   
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
export default {
  data(){
    return {
      todos:[]
    }
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
        console.log(this.chunkFloorList)
        this.todos = this.chunkFloorList
      })
    }
  },

};
</script>
  
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container-all
    width 100%
    position relative
  .banner
    position absolute
    // top 40px
    // left 0
    z-index -1
    top 280px
    left 0
  .white-50
    width 100%
    height 50px
  .white-30
    width 100%
    height 30px
</style>