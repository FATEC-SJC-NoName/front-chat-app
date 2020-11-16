export default [
  {
    path: "/atividades",
    name: "atividades",
    component: () => import(/* webpackChunkName: "Atividades" */ './pages/Atividades')
  },
]