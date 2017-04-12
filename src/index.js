import Vue from 'vue'
import App from './components/App.vue'
import {getCookie, setCookie} from './cookie.js'
import router from './routers.js'

Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie

new Vue({
    el: '#app',
    router,
    components: {
        app: App,
    },
    created() {
        this.checkLogin();
    },
    methods: {
        checkLogin() {
            console.log("checkLogin")
            // 检查是否存在session
            if (!this.getCookie('session')) {
                console.log("log in page")
                this.$router.push('/login')
            }            
            else {
                this.$router.push('/menu')
            }
        }
    }
})
