import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import AdminEmpresa from '@/components/admin/AdminEmpresa'
import Login from '@/components/login/Login'
import EventoAdmin from '@/components/evento/EventoAdmin'
import ComunicadoAdmin from '@/components/Comunicado/ComunicadoAdmin'
import GrupoAdmin from '@/components/grupoAcesso/GrupoAdmin'
import DecodeAdmin from '@/components/utilitarios/DecodeAdmin'
import InforAdmin from '@/components/configuracoes/InforAdmin'







import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'login',
    path: '/',
    component: Login
}, {
    name: 'adminPages',
    path: '/usuarios',
    component: AdminPages,
    meta: { requiresAdmin: false }
},
{
    name: 'adminEmpresas',
    path: '/empresas',
    component: AdminEmpresa,
    meta: { requiresAdmin: false }
},

{
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
}, 
{
    name: 'DecodeAdmin',
    path: '/decode',
    component: DecodeAdmin
},
{
    name: 'InforAdmin',
    path: '/config',
    component: InforAdmin
},
{
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
