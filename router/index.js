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
            {
                path:"/mall",
                name:"mall",
                component:()=>import('@/Vues/mall')
            },
            {
                path:"/page1",
                name:"page1",
                component:()=>import('@/Vues/other/page1')
            },
            {
                path:"/page2",
                name:"page2",
                component:()=>import('@/Vues/other/page2')
            },
        ]
    },
]

const router = new VueRouter({
    mode:"history",
    routes,
})

export default router
