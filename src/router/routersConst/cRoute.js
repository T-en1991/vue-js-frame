const Home = () => import('../../views/home/index')

// 常量路由
export default {
  decp: '常量路由',
  data: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: false
      }
    }
  ]
}
