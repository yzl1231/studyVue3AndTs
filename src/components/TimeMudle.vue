<template>
    <div>
        <h3>{{ title }}</h3>
        <div><button @click="getNowTime()">显示时间</button></div>
        <div>{{ nowTime }}</div>
    </div>
</template>
<script lang="ts">
import { data } from './../hooks/useNowTime'
export default {
    setup() {
        return{
            ...data,
        }
    },
}
</script>
<style scoped>

</style>