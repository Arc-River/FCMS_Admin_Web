import request from '@/utils/request'

// 查询问答-任务列表
export function listTask(query) {
  return request({
    url: '/admin/task/list',
    method: 'get',
    params: query
  })
}

// 查询问答-任务终审列表
export function listFinalTask(query) {
  return request({
    url: '/admin/task/finalList',
    method: 'get',
    params: query
  })
}

// 查询问答-任务 各状态比例数据
export function taskPieData(query) {
  return request({
    url: '/admin/task/pieData',
    method: 'get',
    params: query
  })
}

// 查询问答-任务 终审状态各比例数据
export function finalPieData(query) {
  return request({
    url: '/admin/task/finalPieData',
    method: 'get',
    params: query
  })
}

// 查询问答-任务详细
export function getTask(id) {
  return request({
    url: '/admin/task/' + id,
    method: 'get'
  })
}

// 新增问答-任务
export function addTask(data) {
  return request({
    url: '/admin/task',
    method: 'post',
    data: data
  })
}

// 修改问答-任务
export function updateTask(data) {
  return request({
    url: '/admin/task',
    method: 'put',
    data: data
  })
}

// 删除问答-任务
export function delTask(id) {
  return request({
    url: '/admin/task/' + id,
    method: 'delete'
  })
}

// 释放问答-任务
export function releaseTask(id) {
  return request({
    url: '/admin/task/release/' + id,
    method: 'delete'
  })
}

// 通过问答-任务
export function passTask(id) {
  return request({
    url: '/admin/task/pass/' + id,
    method: 'delete'
  })
}

// 完成问答-任务
export function finishTask(id) {
  return request({
    url: '/admin/task/finish/' + id,
    method: 'delete'
  })
}

// 回收问答-任务
export function recycleTask(id) {
  return request({
    url: '/admin/task/recycle/' + id,
    method: 'delete'
  })
}
