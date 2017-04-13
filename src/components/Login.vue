<template>
    <div>
        用户名<input type="text" placeholder="username" v-model="username"></input>
        密码<input type="password" placeholder="password" v-model="password"></input>
        <button @click="onLogin()">登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                username: "",
                password: "",
            }
        },
        methods: {
            onLogin() {
                if (this.username != "" && this.password != "") {
                    this.login()
                }
            },
            login() {
                var vm = this
                this.$http.post(
                    'http://101.201.237.209:9001/account/login/',
                    {
                        username: vm.username,
                        password: vm.password,
                    },
                )
                .then(function(res) {
                    if (res.data.ret == "success") {
                        console.log("登录成功")
                        vm.$cookie.set('username', vm.username, {expires: '2h'})
                        vm.$router.push('/menu/')
                    }
                })
                .catch(function(err) {
                    console.log(err)
                })             
            }
        }
    }
</script>

<style>
</style>
