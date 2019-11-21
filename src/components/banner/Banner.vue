<template>
  <div class="banner"> 
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(el, index) in arrItem" :key="index">
          <img class="img" :src="el.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
	</div>
</template>
  
<script type="text/ecmascript-6">
import Swiper from 'swiper' 
import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      arrItem:[
					{
							name:'swiperSlide5',
							imgUrl:'https://img02.hua.com/zhuanti/thanksday/2019/pc_thanks_banner.png'
					},
					{
							name:'swiperSlide1',
							imgUrl:'https://img02.hua.com/zhuanti/birthday/20181025/pc_banner.png'
					},
					{
							name:'swiperSlide51',
							imgUrl:'https://img02.hua.com/zhuanti/thanksday/2019/pc_thanks_banner.png'
					},
					{
							name:'swiperSlide1111115',
							imgUrl:'https://img02.hua.com/zhuanti/birthday/20181025/pc_banner.png'
					}
			]
    }
  },
    mounted:function(){
		new Swiper('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
		})
	},
};
</script>
  
<style lang="stylus" rel="stylesheet/stylus">
.banner
	width 100%
	overflow hidden
</style>