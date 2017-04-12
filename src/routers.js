import Vue from 'vue'
import VueRouter from "vue-router"
import Login from './components/Login.vue'
import Menu from './components/Menu.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            name: "login",
            component: Login
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        }
    ]
})

export default router
