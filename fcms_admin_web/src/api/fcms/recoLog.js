import request from '@/utils/request'

// 查询客户识别记录列表
export function listRecoLog(query) {
  return request({
    url: '/fcms/recoLog/list',
    method: 'get',
    params: query
  })
}

// 查询客户识别记录详细
export function getRecoLog(recoId) {
  return request({
    url: '/fcms/recoLog/' + recoId,
    method: 'get'
  })
}

// 新增客户识别记录
export function addRecoLog(data) {
  return request({
    url: '/fcms/recoLog',
    method: 'post',
    data: data
  })
}

// 修改客户识别记录
export function updateRecoLog(data) {
  return request({
    url: '/fcms/recoLog',
    method: 'put',
    data: data
  })
}

// 删除客户识别记录
export function delRecoLog(recoId) {
  return request({
    url: '/fcms/recoLog/' + recoId,
    method: 'delete'
  })
}
