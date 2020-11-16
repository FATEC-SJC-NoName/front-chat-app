export default [
    {        
        name: "login",
        path: "/login",
        component: () => import(/* webpackChunkName: "Login" */ './pages/Login')
    },
]