import request from '@/utils/request'

export default {
  getIndexData() {
    return request({
      url: 'edu-service/index-front/index',
      method: 'get'
    })
  }
}
