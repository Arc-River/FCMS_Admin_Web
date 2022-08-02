import request from '@/utils/request'

// 查询文件上传日志列表
export function listLog(query) {
  return request({
    url: '/system/log/list',
    method: 'get',
    params: query
  })
}

// 查询文件上传日志详细
export function getLog(fileId) {
  return request({
    url: '/system/log/' + fileId,
    method: 'get'
  })
}

// 新增文件上传日志
export function addLog(data) {
  return request({
    url: '/system/log',
    method: 'post',
    data: data
  })
}

// 修改文件上传日志
export function updateLog(data) {
  return request({
    url: '/system/log',
    method: 'put',
    data: data
  })
}

// 删除文件上传日志
export function delLog(fileId) {
  return request({
    url: '/system/log/' + fileId,
    method: 'delete'
  })
}
