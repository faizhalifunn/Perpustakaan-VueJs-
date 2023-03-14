// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Dashboard from '../views/DashboardView.vue'
import UserView from '../components/siswa/UserView.vue'
import TambahSiswa from '../components/siswa/TambahSiswa.vue'
import EditSiswa from '../components/siswa/EditSiswa.vue'
import BukuView from '../components/buku/BukuView.vue'
import TambahBuku from '../components/buku/TambahBuku.vue'
import EditBuku from '../components/buku/EditBuku.vue'
import PinjamBuku from '../components/transaksi/PinjamBuku.vue'
import HistoryPinjam from '../components/transaksi/HistoryPeminjaman.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    name: 'UserView',
    path: '/getsiswa',
    component: UserView
  },
  {
    name: 'TambahSiswa',
    path: '/createsiswa',
    component: TambahSiswa
  },
  {
    name: 'EditSiswa',
    path: '/editsiswa/:id',
    component: EditSiswa
  },
  {
    name: 'getbuku',
    path: '/getbuku',
    component: BukuView
  },
  {
    name: 'createbuku',
    path: '/createbuku',
    component: TambahBuku
  },
  {
    name: 'Editbuku',
    path: '/editbuku/:id',
    component: EditBuku
  },
  {
    name: 'PinjamBuku',
    path: '/pinjam',
    component: PinjamBuku
  },
  {
    name: 'HistoryPinjam',
    path: '/History',
    component: HistoryPinjam
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router