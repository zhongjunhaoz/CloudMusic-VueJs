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
      component: () => import('../pages/Rank.vue'),
      children: [
        
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../pages/Search.vue')
    },
    {
      path: '/rank/:id',
      name: "RankDetail",
      component: () => import('../components/listDetail/RankDetail.vue'), //排行榜详细页
    },
    {
      path: '/recommend/:id',
      component: () => import('../components/listDetail/SheetDetail.vue') //歌单详细页
    },
    {
      path: '/MV/:id',
      component: () => import('../components/listDetail/MVDetail.vue') //MV详细页
    }
  ]
})
