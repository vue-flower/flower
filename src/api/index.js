import request from './ajax'

export const reqFlowerList = () => request.get('/flowerList')
export const reqFloor = () => request.get('/floor')
export const reqLimit = () => request.get('/limit')



/*  自动登录 */
// export const autoLogin = () => ajax({
//   url:'/auto_login',
//   headers: {
//     needToken: true
//   }
// })
 


/* 用户名密码登陆 */
export const loginWithPassword = (username, pwd) => request({
  url: '/login',
  method: 'POST',
  data: {
    username,
    pwd
  }
})
