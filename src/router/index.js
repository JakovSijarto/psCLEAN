import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/pages/home.vue"
import aboutus from "../components/pages/aboutus.vue"
import kontakt from "../components/pages/kontakt.vue"
import NotFound from "../components/notfound.vue"


const routes = [
    {
        path: '/',
        component: home
    },
    {
        path:'/aboutus',
        component:aboutus
    },
    {
        path:'/kontakt',
        component:kontakt
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { top:0 }
      }
})

export default router 
