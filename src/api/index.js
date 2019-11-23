import request from './ajax'

export const reqFlowerList = () => request.get('/flowerList')
export const reqFloor = () => request.get('/floor')
export const reqLimit = () => request.get('/limit')

/* 用户名密码登陆 */

export const loginWithPassword = ({
  username,
  password
}) => ajax({
  method: 'POST',
  url: '/login_pwd',
  data: {
    name: username,
    pwd: password
  }
})
/* 手机号验证码登陆 */

export const loginWithPhone = ({
  phone,
  code
}) => ajax({
  method: 'POST',
  url: '/login_sms',
  data: {
    phone,
    code
  }
})