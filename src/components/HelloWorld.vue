<template>
  <div>
    <h1>HelloWorld组件</h1>
    <div>请选择以下技师为你服务</div>
    <div>
      <button
        v-for="(item, index) in boys"
        :key="index"
        @click="fnChoiseBoy(index)"
      >
        {{ index }} : {{ item }}
      </button>
    </div>
    <div>你选择了【{{ choiseBoy }}】为你服务</div>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue';
import { ref } from 'vue';

// export default defineComponent({
//   name: 'HelloWorld',
//   setup () {
//     const boys = ref(['小军', '小黑', '小哈']);
//     const choiseBoy = ref("");
//     const fnChoiseBoy = (index: number) => {
//       choiseBoy.value = boys.value[index]
//     }
//     return{
//       boys,
//       choiseBoy,
//       fnChoiseBoy,
//     }
//   }
// });
// reactive优化程序
export default {
  name: 'HelloWorld',
  setup () {
    const boys = ref(['小军', '小黑', '小哈']);
    const choiseBoy = ref("");
    const fnChoiseBoy = (index: number) => {
      choiseBoy.value = boys.value[index]
    }
    return{
      boys,
      choiseBoy,
      fnChoiseBoy,
    }
  }
};
</script>

<style scoped>

</style>
