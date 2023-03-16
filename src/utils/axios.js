import axios from 'axios'
import errorHandle from './errorHandle'
import { getToken } from '@utils/auth'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  // 获取axios配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8' // 配置请求头
      },
      timeout: 3 * 1000
    }
    return config
  }

  // 设定拦截器
  interceptors (instance) {
    // 2.请求拦截器
    instance.interceptors.request.use(
      (config) => {
        // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
        config.data = JSON.stringify(config.data) // 数据转化,也可以使用qs转换
        config.headers = {}
        // 注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
        const token = getToken() // 这里取token之前，你肯定需要先拿到token,存一下
        if (token) {
          config.headers.Authorization = token // 如果要求携带在请求头中
        }
        return config
      },
      (error) => {
        errorHandle(error)
        return Promise.reject(error)
      }
    )
    // 3.响应拦截器
    instance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response)
        }
      },
      (error) => {
        errorHandle(error)
        return Promise.reject(error)
      }
    )
  }

  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url
    }, config)
    return this.request(options)
  }

  post (url, data, config) {
    const options = Object.assign({
      method: 'post',
      url,
      data
    }, config)
    return this.request(options)
  }
}

export default HttpRequest
