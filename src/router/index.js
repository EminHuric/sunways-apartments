import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home.vue'
import Sobe from '../page/Sobe.vue'
import Galerija from '../page/Galerija.vue'
import Kontakt from '../page/Kontakt.vue'
import Lokacija from '../page/Lokacija.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobe', component: Sobe },
  { path: '/galerija', component: Galerija },
  { path: '/kontakt', component: Kontakt },
  { path: '/lokacija', component: Lokacija }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
