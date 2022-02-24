import request from '../utils/request'



export const getArticleClassfiyList=()=>{
  return request.get('/admin/getArticleClassfiyList')
}

export const createArticleClassfiy=(data)=>{
  return request.post('/admin/createArticleClassfiy', data)
}

export const modifyArticleClassfiy=(data)=>{
  return request.post('/admin/modifyArticleClassfiy', data)
}

export const deleteArticleClassfiy=(data)=>{
  return request.post('/admin/deleteArticleClassfiy', data)
}
