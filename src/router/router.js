const Home = () => import('../pages/home/Home')
const Flower = () => import('../pages/flower/Flower')
const YongShengHua = () => import('../pages/yongshenghua/YongShengHua')
const Product = () => import('../components/Product/Product.vue')

const ShowCart = () => import('../pages/showcart/Showcart')


export default [
  {
    path:'/home',
    component: Home
  },
  {
    path:'/flower',
    component: Flower
  },
  {
    path:'/yongshenghua',
    component: YongShengHua
  },
  {
    path:'/product',
    component: Product
  },

  {
    path:'/Shopping/ShowCart',
    component: ShowCart
  },
  {
    path: '/',
    redirect: '/Shopping/ShowCart'
  }

  
]