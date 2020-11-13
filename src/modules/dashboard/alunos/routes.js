export default [
  {
    path: "/contatos/alunos",
    name: "Alunos",
    component: () => import(/* webpackChunkName: "Alunos" */ './pages/Alunos')
  },
]