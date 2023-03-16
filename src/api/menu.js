import request from '@utils/request'

export const getMenuList = () => {
  return request.get('/admin/getMenuList')
}

export const createMenu = (data) => {
  return request.post('/admin/createMenu', data)
}

export const modifyMenu = (data) => {
  return request.post('/admin/modifyMenu', data)
}

export const deleteMenu = (data) => {
  return request.post('/admin/deleteMenu', data)
}
