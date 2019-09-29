// import Vue from 'vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

import Layout from '@/layout'

export default new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/dashboard/index'),
          meta: { title: '仪表盘', icon: 'dashboard' }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
