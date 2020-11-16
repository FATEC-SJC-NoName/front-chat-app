export default [
  {
    path: "/testes",
    name: "testes",
    component: () => import(/* webpackChunkName: "Testes" */ './pages/Testes')
  },    

]