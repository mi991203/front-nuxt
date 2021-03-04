import request from '@/utils/request'
export default {
  // 查询前两条Banner数据
  getListBanner() {
    return request({
      url: `/cms-service/banner-front/get-all-banner`,
      method: 'get'
    })
  }
}
