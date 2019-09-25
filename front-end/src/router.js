import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export default new Router({
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
          meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
})
