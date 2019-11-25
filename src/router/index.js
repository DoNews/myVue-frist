import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import info from '@/view/introductInfo'
import yufa from '@/view/yufa'
import router from '@/view/router'
import productList from '@/view/productList'
import goodDetail from '@/view/goodDetail'
import Cart from '@/view/cart'
import vueResource from '@/view/vueResource'
import allList from '@/view/allList'
import homePage from '@/view/homePage'
import gojs from '@/view/gojs'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/allList',
      name: 'allList',
      component: allList
    },
    {
      path: '/gojs',
      name: 'gojs',
      component: gojs
    },
    {
      path: '/yufa',
      name: 'yufa',
      component: yufa
    },
    {
      path: '/router',
      name: 'router',
      component: router
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/vueResource',
      name: 'vueResource',
      component: vueResource
    },
    {
      path: '/goodDetail',
      // path: '/goodDetail:id/user/:username', 可传递多个参数
      name: 'goodDetail',
      component: goodDetail,
      children: [{
        path: '/title',
        name: 'title',
        component: () => import('@/components/titile')
      },
      {
        path: '/img',
        name: 'img',
        component: () => import('@/components/img')
      }
      ]
    }
  ]
})
