<template>
    <div>
        <button @click="onLogout()">Logout</button>
    </div>
</template>

<script>
    export default {
        name: "logout",
        methods: {
            onLogout() {
                var vm = this
                this.$http.get(
                    'http://101.201.237.209:9001/account/logout'
                )
                .then(function(res) {
                    
                })
                .catch(function(err) {

                });    
                vm.$cookie.delete('username')
            }
        }
    }
</script>
