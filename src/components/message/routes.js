export default [
    {   
        path: "/Message",
        name: "Message",
        component: () => import(/* webpackChunkName: "Message" */ './pages/Message')
      },  
]