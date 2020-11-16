export default [
  {
    path: "/contatos/instrutores",
    name: "instrutores",
    component: () => import(/* webpackChunkName: "Instrutores" */ './pages/Instrutores')
  },
]