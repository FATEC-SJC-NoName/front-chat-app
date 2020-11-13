export default [
  {
    path: "/testes",
    name: "Testes",
    component: () => import(/* webpackChunkName: "Testes" */ './pages/Testes')
  },    

]