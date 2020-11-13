export default [
  {
    path: "/contatos/diretores",
    name: "Diretores",
    component: () => import(/* webpackChunkName: "Diretores" */ './pages/Diretores')
  },
]