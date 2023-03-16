const Layout = () => import('../../layout/index')
// 常量路由
export default {
  decp: '常量路由',
  data: [
    {
      path: '/',
      name: 'main',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../../views/home/index'),
          name: 'Home',
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '/',
      name: 'main',
      component: Layout,
      redirect: '/menuManagement',
      children: [
        {
          path: '/menuManagement',
          component: () => import('../../views/menuManagement/index'),
          name: 'MenuManagement',
          meta: { title: '菜单管理' }
        }
      ]
    },
    {
      path: '/',
      name: 'main',
      component: Layout,
      redirect: '/articleClassfiy',
      children: [
        {
          path: '/articleClassfiy',
          component: () => import('../../views/articleClassfiy/index'),
          name: 'ArticleClassfiy',
          meta: { title: '文章分类' }
        }
      ]
    },
    {
      path: '/',
      name: 'main',
      component: Layout,
      redirect: '/articlePublish',
      children: [
        {
          path: '/articlePublish',
          component: () => import('../../views/articlePublish/index'),
          name: 'ArticlePublish',
          meta: { title: '文章发布' }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../../views/login/index'),
      meta: { title: 'Login' }
    }
  ]
}
