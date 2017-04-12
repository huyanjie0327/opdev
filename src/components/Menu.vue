<template>
    <div>
        <button @click="onCrontabButtonClick()">定时任务管理</button>
        <button enable="false">上线任务</button>
    </div>
</template>

<script>
    export default {
        methods: {
            onCrontabButtonClick() {
                console.log("onCrontabButtonClick...")
                this.$router.push('/crontab/')
            }
        }
    }
</script>

<style>
</style>
