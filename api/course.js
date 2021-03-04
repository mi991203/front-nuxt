import request from '@/utils/request'
export default {
  getCourseList(page, limit, searchObj) {
    return request({
      url: `/edu-service/front-course/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分类的方法
  getAllSubject() {
    return request({
      url: '/edu-service/edu-subject/getAllSubject',
      method: 'get'
    })
  },
}
