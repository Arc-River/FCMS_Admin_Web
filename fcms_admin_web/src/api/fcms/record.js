import request from '@/utils/request'

// 查询问答-审核记录列表
export function listRecord(query) {
  return request({
    url: '/admin/record/list',
    method: 'get',
    params: query
  })
}

// 查询问答-审核记录 一二审通过率列表
export function listPassingRate(query) {
  return request({
    url: '/admin/record/passingRate',
    method: 'get',
    params: query
  })
}

// 查询问答-审核记录 历史记录列表
export function listHistoryRecordData(query) {
  return request({
    url: '/admin/record/historyRecordData',
    method: 'get',
    params: query
  })
}

// 查询问答-审核记录详细
export function getRecord(id) {
  return request({
    url: '/admin/record/' + id,
    method: 'get'
  })
}

// 新增问答-审核记录
export function addRecord(data) {
  return request({
    url: '/admin/record',
    method: 'post',
    data: data
  })
}

// 修改问答-审核记录
export function updateRecord(data) {
  return request({
    url: '/admin/record',
    method: 'put',
    data: data
  })
}

// 删除问答-审核记录
export function delRecord(id) {
  return request({
    url: '/admin/record/' + id,
    method: 'delete'
  })
}
