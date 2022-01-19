const About = () => import('../../views/about/index.vue')

export default {
  decp: 'router1',
  data: [
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        requireAuth: true
      }
    }
  ]
}
