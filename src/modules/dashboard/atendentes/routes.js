export default [
  {
    path: "/contatos/atendentes",
    name: "Atendentes",
    component: () => import(/* webpackChunkName: "Atendentes" */ './pages/Atendentes')
  }
]