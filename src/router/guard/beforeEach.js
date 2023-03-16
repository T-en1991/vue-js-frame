import router from '../index'
import { getToken } from '../../utils/auth'

export default router.beforeEach((to, from, next) => {
  if (to.path === '/login' || getToken()) {
    next()
  } else {
    alert('请先登录')
    next({ path: '/login' })
  }
})
