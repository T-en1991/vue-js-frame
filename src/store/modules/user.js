import { getToken, setToken } from '../../utils/auth'
import { login, getUserInfo } from '../../api/user'
import Vue from 'vue'
import { Message } from 'element-ui'
const user = {
  namespaced: true,
  state: {
    token: getToken(),
    userName: '',
    userId: ''
  },
  mutations: {
    SET_TOKEN (state, data) {
      Vue.set(state, 'token', data)
    },
    SET_USERNAME (state, data) {
      Vue.set(state, 'userName', data)
    },
    SET_USERID (state, data) {
      Vue.set(state, 'userId', data)
    }
  },
  actions: {
    ActionLogin ({ commit }, loginInfo) {
      const { username, password } = loginInfo
      return new Promise((resolve, reject) => {
        login({ login_name: username.trim(), password }).then(response => {
          const { data } = response
          if (response.code !== 1) {
            Message.error(response.message)
            reject(response.message)
          } else {
            Message({
              type: 'success',
              message: '登录成功'
            })
            commit('SET_TOKEN', data.token)
            setToken(data.token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    ActionGetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const { data } = response
          if (response.code !== 1) {
            Message.error(response.message)
            reject(response.message)
          } else {
            commit('SET_USERNAME', data.user_name)
            commit('SET_USERID', data.id)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
