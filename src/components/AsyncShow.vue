<template>
    <div>
        <h3>{{ result }}</h3>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    setup() {
        return new Promise((reslove, reject) => {
            setTimeout(() => {
                return reslove({result: 'jspang'})
            }, 2000)
        })
    }
})
</script>