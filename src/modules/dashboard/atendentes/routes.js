export default [
  {
    path: "/contatos/atendentes",
    name: "atendentes",
    component: () => import(/* webpackChunkName: "Atendentes" */ './pages/Atendentes')
  }
]