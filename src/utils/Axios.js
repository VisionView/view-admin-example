import Vue from 'vue'
import axios from 'axios'
import Router from '@/router/index'
import { Message } from 'element-ui'

Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios

// 全局请求拦截
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token（登录信息）
    if (localStorage.getItem('token')) {
      config.headers.Authorization = localStorage.getItem('token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response  => {
    return response 
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          Message({
            showClose: false,
            message: '未授权，请重新登录(401)',
            type: 'error'
          })
          localStorage.clear()
          Router.push({ path: '/login' })
          break;
        case 404:
          Message({
            showClose: false,
            message: '请求出错(404)',
            type: 'error'
          })
          Router.push({ path: '/404' })
          break;
        case 404:
          Router.push({ path: '/404' })
          break;
        case 500:
          // this.$router.push({ path: '/login' })
          localStorage.clear()
          Router.push({ path: '/login' })
          break;
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
)

// case 400: err.message = '请求错误(400)'; break;
// case 401: err.message = '未授权，请重新登录(401)'; break;
// case 403: err.message = '拒绝访问(403)'; break;
// case 404: err.message = '请求出错(404)'; break;
// case 408: err.message = '请求超时(408)'; break;
// case 500: err.message = '服务器错误(500)'; break;
// case 501: err.message = '服务未实现(501)'; break;
// case 502: err.message = '网络错误(502)'; break;
// case 503: err.message = '服务不可用(503)'; break;
// case 504: err.message = '网络超时(504)'; break;
// case 505: err.message = 'HTTP版本不受支持(505)'; break;
// default: err.message = `连接出错(${err.response.status})!`;