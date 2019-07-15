import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import Auth from '@/components/auth/Auth'
import EventoAdmin from '@/components/evento/EventoAdmin'
import ComunicadoAdmin from '@/components/Comunicado/ComunicadoAdmin'
import GrupoAdmin from '@/components/grupoAcesso/GrupoAdmin'




import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'auth',
    path: '/',
    component: Auth
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: false }
}, {
 
    name: 'eventoAdmin',
    path: '/evento',
    component: EventoAdmin
},
{
 
    name: 'GrupoAdmin',
    path: '/novogrupo',
    component: GrupoAdmin
},
{
    name: 'comunicadoAdmin',
    path: '/comunicado',
    component: ComunicadoAdmin
},  {
    name: 'home',
    path: '/home',
    component: Home
}]


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router
