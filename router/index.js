import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        name:"Main",
        component:()=>import('@/Vues/Main.vue'),
        children:[
            {
                path:"/home",
                name:"home",
                component:()=>import('@/Vues/home')
            },
            {
                path:"/user",
                name:"user",
                component:()=>import('@/Vues/user')
            },
        ]
    },
]

const router = new VueRouter({
    mode:"history",
    routes,
})

export default router
