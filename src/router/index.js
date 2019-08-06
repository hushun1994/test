import Vue from 'vue'
import Router from 'vue-router'
import Book from '@/book/book1'

import HomeRoute from '@/home/route'
import TaoBao from '@/taobao/taobao'

Vue.use(Router)

const PageNotFound = {
  template: '<div class="404">404</div>'
}

const routes = [
  ...HomeRoute,
  {
    path: '/aboutus',
    component: _ => import('@/aboutus/main')
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/taobao',
    component: TaoBao
  },
  {
    path: '*',
    component: PageNotFound
  },
]

const router = new Router({
  mode: 'history', 
  routes
})

export default router
