import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    name: 'ebook',
    component: () => import('@/views/ebook/index.vue'),
    children: [
      {
        path: ':fileName',
        conponent: () => import('@/components/ebook/EbookReader.vue')
      }
    ]
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
