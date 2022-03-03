<template>
    <div>
        <img :src="result && result.imgUrl" alt="">
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import {defineComponent} from 'vue'
export default defineComponent({
    async setup() {
        const rowData = await axios.get('https://apiblog.jspang.com/default/getGirl')
        return{
            result: rowData.data
        }
    }
})
</script>