const Home = () => import('../pages/home/Home')
const Flower = () => import('../pages/flower/Flower')
const YongShengHua = () => import('../pages/yongshenghua/YongShengHua')
const Product = () => import('../pages/product/Product')
const Login = () => import('../pages/login/Login')

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
    path: '/',
    redirect: '/home'
  }
]