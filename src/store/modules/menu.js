import Vue from 'vue'
import { getMenuList } from '../../api/menu'
import { Message } from 'element-ui'
const menu = {
  namespaced: true,
  state: {
    menuList: [
      {
        menuName: '菜单管理',
        id: 0
      }
    ]
  },
  mutations: {
    SET_MENULIST (state, data) {
      Vue.set(state, 'menuList', data)
    }
  },
  actions: {
    ActionGetMenuList ({ commit }) {
      return new Promise((resolve, reject) => {
        getMenuList().then(response => {
          const { data } = response
          if (response.code !== 1) {
            Message.error(response.message)
            reject(response.message)
          } else {
            data.sort((a, b) => {
              return a.menu_sort - b.menu_sort
            })
            commit('SET_MENULIST', data)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default menu
