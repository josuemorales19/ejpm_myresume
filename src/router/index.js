import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Achievements from '../views/Achievements.vue'
import CiscoCert from '../views/CiscoCert.vue'
import TsuCert from '../views/TsuCert.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Achievements',
    name: 'Achievements',
    component: Achievements
  },
  {
    path: '/CiscoCert',
    name: 'CiscoCert',
    component: CiscoCert
  },
  {
    path: '/TsuCert',
    name: 'TsuCert',
    component: TsuCert
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
