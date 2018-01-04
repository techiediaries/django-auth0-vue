
/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductCreate from '@/components/ProductCreate'
import Callback from '@/components/Callback'
import Home from '@/components/Home'
import AuthService from '../auth/AuthService'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList,
    meta: { requiresAuth : true }
  },
  {
    path: '/product-create',
    name: 'ProductCreate',
    component: ProductCreate,
    meta: { requiresAuth : true }    
  },
  {
    path: '/product-update/:pk',
    name: 'ProductUpdate',
    component: ProductCreate
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  }]

const router = new Router({
  mode: 'history',
  routes
})

//const auth = new AuthService()

router.beforeEach((to, from, next) => {
  console.log('routing ', from, AuthService.authenticated())
  if(to.meta.requiresAuth)
  {
    if(!AuthService.authenticated())
    {
      next('/');
    }
  }
  next()
})

export function authGuard(to, from, next) {

  if(!AuthService.authenticated()){
    next('/');
  }
  next()

}

export default router
