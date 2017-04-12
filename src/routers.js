import Vue from 'vue'
import VueRouter from "vue-router"
import Login from './components/Login.vue'
import Menu from './components/Menu.vue'
import Crontab from './components/Crontab.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            name: "login",
            component: Login
        },
        {
            path: '/',
            name: "index",
            component: Menu
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/crontab',
            name: 'crontab',
            component: Crontab
        }
    ]
})

export default router
