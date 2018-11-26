import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Home from '@/views/home/Home'
import Demo1 from '@/views/demo/demo1'
import Demo2 from '@/views/demo/demo2'
import Demo3 from '@/views/demo/demo3'
import Demo4 from '@/views/demo/demo4'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      hidden: true,
      redirect: '/home',
      name: 'Home',
      children: [
        {
          path: 'home',
          component: Home
        }]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'nav1',
      meta: {
        title: '导航一',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'demo1',
          name: 'Demo1',
          component: Demo1,
          meta: {
            title: 'Demo1'
          }
        },
        {
          path: 'demo2',
          name: 'Demo2',
          component: Demo2,
          meta: {
            title: 'Demo2'
          }
        },
        {
          path: 'demo4',
          name: 'Demo4',
          component: Demo4,
          meta: {
            title: 'Demo4'
          }
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      hidden: false,
      name: 'nav3',
      meta: {
        title: '导航三',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'demo3',
          name: 'Demo3',
          component: Demo3,
          meta: {
            title: 'Demo3'
          }
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      hidden: false,
      name: 'link',
      meta: {
        title: '外联',
        icon: 'el-icon-sold-out'
      },
      children: [
        {
          path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
          meta: { title: 'GeekFun' }
        }
      ]
    },
  ]
})
