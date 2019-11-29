const Home = () => import('../pages/home/Home')
const Flower = () => import('../pages/flower/Flower')
const YongShengHua = () => import('../pages/yongshenghua/YongShengHua')
const ShowCart = () => import('../pages/showcart/Showcart')
const Product = () => import('../pages/product/Product')
const Cake = () => import('../pages/cakes/Cake')
const Login = () => import('../pages/login/Login')
const Test = () => import('../components/test/tset')
// const LoginItem = () => import('../components/Login/LoginItem.vue')




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
    path:'/login',
    component: Login
  },
  {
    path:'/cake',
    component: Cake
  }, {
    path:'/test',
    component: Test
  }, 
  {
    path:'/test',
    component: Cake
  },

  {
    path:'/Shopping/ShowCart',
    component: ShowCart
  },
  {
    path: '/',
    redirect: '/home'
  }

  
]