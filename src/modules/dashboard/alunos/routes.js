export default [
  {
    path: "/contatos/alunos",
    name: "alunos",
    component: () => import(/* webpackChunkName: "Alunos" */ './pages/Alunos')
  },
]