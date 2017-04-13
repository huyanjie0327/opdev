import Vue from 'vue'
import VueCookie from 'vue-cookie'

import router from './routers.js'
import App from './components/App.vue'
import http from './http.js'


Vue.use(VueCookie)

Vue.prototype.$http = http

new Vue({
    el: '#app',
    router,
    components: {
        app: App,
    },
    watch: {
        "$route": 'checkLogin'
    },
    created() {
        this.checkLogin();
    },
    methods: {
        checkLogin() {
            // 检查是否存在session
            if (!this.$cookie.get('username')) {
                this.$router.push('/login/')
            }            
        }
    }
})
