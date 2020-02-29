import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: () => import('../pages/Recommend.vue')
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: () => import('../pages/Recommend.vue')
    },
    {
      path: '/rank',
      name: 'Rank',
      component: () => import('../pages/Rank.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../pages/Search.vue')
    }
  ]
})
