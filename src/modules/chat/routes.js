export default [
    {
      path: "/chat",
      name: "Chat",
      component: () => import(/* webpackChunkName: "Alunos" */ './pages/Chat')
    },
  ]