export default [
  {
    path: "/contatos/diretores",
    name: "diretores",
    component: () => import(/* webpackChunkName: "Diretores" */ './pages/Diretores')
  },
]