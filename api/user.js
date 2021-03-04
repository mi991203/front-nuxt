import request from '@/utils/request'

export default {
  // 注册用户
  registerUser(formItem) {
    return  request({
      url: 'user-service/user/register',
      method: 'post',
      data: formItem
    })
  },
  // 提交登录
  submitLogin(userInfo) {
    return request({
      url: 'user-service/user/login',
      method: 'post',
      data: userInfo
    })
  },
  // 根据token获取到用户信息
  getLoginInfo() {
    return request({
      url: 'user-service/user/auth/getLoginInfo',
      method: 'get'
    })
  }
}
