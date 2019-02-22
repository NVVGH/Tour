import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import Catalog from '@/components/Ads/Catalog'
import NewAd from '@/components/Ads/NewAd'
import Login from '@/components/Auth/Login'
import registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/NewAd',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
