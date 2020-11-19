import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Alunos from '../views/Alunos.vue'
import Atendentes from '../views/Atendentes.vue'
import Atividades from '../views/Atividades.vue'
import Diretores from '../views/Diretores.vue'
import Home from '../views/Home.vue'
import Instrutores from '../views/Instrutores.vue'
import Login from '../views/Login.vue'
import Testes from '../views/Testes.vue'

Vue.use(VueRouter)


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifAuthenticated
   
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: ifNotAuthenticated
    

  },

  {
    path: '/contatos/alunos',
    name: 'Alunos',
    component: Alunos,
    beforeEnter: ifAuthenticated
  },

  {
    path: '/contatos/atendentes',
    name: 'Atendentes',
    component: Atendentes,
    beforeEnter: ifAuthenticated
  },

  {
    path: '/contatos/instrutores',
    name: 'Instrutores',
    component: Instrutores,
    beforeEnter: ifAuthenticated
  },

  {
    path: '/contatos/diretores',
    name: 'Diretores',
    component: Diretores,
    beforeEnter: ifAuthenticated
  },

  {
    path: '/atividades',
    name: 'Atividades',
    component: Atividades,
    beforeEnter: ifAuthenticated
  },

  {
    path: '/testes',
    name: 'Testes',
    component: Testes,
    beforeEnter: ifAuthenticated
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})






export default router
