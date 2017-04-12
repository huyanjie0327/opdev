<template>
    <div>
        用户名<input type="text" placeholder="username@domain.com" v-model="account"></input>
        密码<input type="password" placeholder="password" v-model="password"></input>
        <button @click="onLogin()">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                account: "",
                password: "",
            }
        },
        methods: {
            onLogin() {
                if (this.account != "" && this.password != "") {
                    this.login()
                }
            },
            login() {
                this.$cookie.set('account', this.account, {expires: '2h'})
                this.$router.push('/menu/')
            }
        }
    }
</script>

<style>
</style>
