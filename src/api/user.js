import request from '../utils/request'

export const login=(data)=>{
  return request.post('/api/login', data)
}

export const getUserInfo=()=>{
  return request.get('/admin/getUserInfo')
}
