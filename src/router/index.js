import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Home from '@/views/home/Home'
// import Demo1 from '@/views/demo/demo1'
import Demo2 from '@/views/demo/demo2'
import Demo3 from '@/views/demo/demo3'
import Demo4 from '@/views/demo/demo4'

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: true,
      redirect: '/home',
      name: 'Home',
      children: [
        {
          // roles: ['admin', 'editor'], // 设置该路由进入的权限，支持多个权限叠加
          path: 'home',
          component: Home
        }]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/demo1',
      name: 'Nav',
      meta: { title: '导航一', icon: 'el-icon-sold-out' },
      children: [
        {
          path: '/demo1',
          name: 'Demo1',
          redirect: '/demo1-1',
          hidden: true,
          component: () => import('@/views/demo/demo1/demo1'),
          meta: { title: '路由一' },
          children: [{
            path: '/demo1-1',
            name: 'Demo1-1',
            component: () => import('@/views/demo/demo1/components/demo1-1'),
            meta: { title: 'demo1-1' }
          },
          {
            path: '/demo1-2',
            name: 'Demo1-2',
            component: () => import('@/views/demo/demo1/components/demo1-2'),
            meta: { title: 'demo1-2' }
          }]
        },
        {
          path: 'demo2',
          name: 'Demo2',
          redirect: '/demo5',
          component: () => import('@/views/demo/demo2'),
          meta: { title: '路由二' },
          children: [{
            path: '/demo5',
            name: 'demo5',
            component: () => import('@/views/demo/demo5'),
            meta: { title: '三级路由一' },
          },
          {
            path: '/demo6',
            name: 'demo6',
            hidden: true,
            component: () => import('@/views/demo/demo6'),
            meta: { title: '三级路由一内容' },
          }
        ]
        },
        {
          path: 'demo3',
          name: 'Demo3',
          component: Demo3,
          meta: {
            title: '路由三'
          }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: { title: '路由四' }
        }
      ]
    }
  ]
})
