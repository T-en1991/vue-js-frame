import router from '../index'
import store from '@/store'
export default router.beforeEach((to, from, next) => {
  if(store.state.demo){
    if (to.meta.requireAuth){
      //验证
      console.log('验证')
    }else{
      next()
    }
    next()
  } else{
    alert('请先登录')
    next({ path: '/' })
  }
})
