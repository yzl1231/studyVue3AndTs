<template>
    <teleport to="#model">
        <div id="center">
            <h3>弹出框组件</h3>
        </div>
    </teleport>
</template>
<script lang="ts">
import {ref} from 'vue'
export default{
}
</script>
<style scoped>
#center{
    width: 200px;
    height: 200px;
    border: 2px solid #cccccc;
    margin: 0 auto;
    background-color: red;
}
</style>