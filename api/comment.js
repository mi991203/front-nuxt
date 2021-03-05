import request from '@/utils/request'

export default {

  getPageList(page, limit, courseId) {
    return request({
      url: `/edu-service/edu-comment/${page}/${limit}`,
      method: 'get',
      params: {courseId}
    })
  },
  addComment(comment) {
    return request({
      url: `/edu-service/edu-comment/auth/save`,
      method: 'post',
      data: comment
    })
  }
}
