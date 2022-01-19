const Err404 = () => import('../../views/404/index')

// 错误页面路由
export default {
  decp: '错误页面路由',
  data: [
    {
      path: '*',
      name: 'Err404',
      component: Err404,
      meta: {
        requireAuth: false
      }
    }
  ]
}
