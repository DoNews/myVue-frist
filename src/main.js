// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import echarts from 'echarts'
// 懒加载
import VueLazyload from 'vue-lazyload'
import { sum1 } from './common/util'
// import * as mufunction from './common/util' // 吧js内的所有方法导入到一个统一的字母里面
// console.log(`公共函数：${mufunction.sum1}`) // 取值调用的话用这个对象调用
console.log(`公共函数：${sum1}`) // 会把函数体打印出来
console.log(`公共函数：${sum1()}`) // 报错。NAN函数没参数
console.log(`公共函数：${sum1(5, 5)}`) // 10
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false
// 懒加载调用
Vue.use(VueLazyload)
// 带参数的懒加载样式
// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// define('util', function () {
//   return {
//     sum: function () {

//     },
//     max: function () {

//     }
//   }
// })
