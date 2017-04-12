import Vue from 'vue'
import App from './components/App.vue'
import router from './routers.js'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)

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
            if (!this.$cookie.get('account')) {
                this.$router.push('/login')
            }            
        }
    }
})
