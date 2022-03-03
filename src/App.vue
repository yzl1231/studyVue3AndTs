<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>请选择一位美女为你服务</div>
    <div>
      <button
        v-for="(item, index) in girls"
        :key="index"
        @click="selectGirlFun(index)"
      >
        {{ index }} : {{item}}
      </button>
    </div>
    <div>你选择了【{{ selectGirl }}】为你服务</div>
    <div><button @click="overAvtion()">点餐完毕</button></div>
    <div>{{ overText }}</div>
    <div>
      <h3>随机图片</h3>
      <div v-if="loading">loading...</div>
      <img v-if="loaded" :src="result.imgUrl" alt="">
    </div>
    <hello-world></hello-world>
    <time-mudle></time-mudle>
    <my-model></my-model>
    <Suspense>
      <template #default> 
        <!-- 全部请求完毕的内容 -->
        <div>
          <async-show />
          <girl-show />
        </div>
      </template>
      <template #fallback>
        <!-- 还没有请求回来时显示的内容 -->
        <h3>Suspense请求中。。。</h3>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue';
import { onErrorCaptured, reactive, ref, toRefs, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TimeMudle from './components/TimeMudle.vue'; // 显示时间方法
import useUrlAvator from './hooks/useUrlGetAvator'; // axios请求方法
import MyModel from './components/MyModel.vue'; // 独立组件-可挂载到指定的DOM元素上
import AsyncShow from './components/AsyncShow.vue'; // 异步请求组件
import GirlShow from './components/GirlShow.vue';
// export default defineComponent({
//   name: 'App',
//   components:{
//     HelloWorld,
//   },
//   setup () {
//     const girls = ref(["大脚", "刘颖", "晓红"]);
//     const selectGirl = ref("");
//     const selectGirlFun = (index: number) => {
//       selectGirl.value = girls.value[index];
//     }
//     return {
//       girls,
//       selectGirl,
//       selectGirlFun,
//     }
//   }
// });
// reactive优化程序
interface DataProps{
  girls: string[],
  selectGirl: string,
  watchThree: number,
  selectGirlFun: (index: number) => void
}
export default {
  name: 'App',
  components:{
    HelloWorld,
    TimeMudle,
    MyModel,
    AsyncShow,
    GirlShow
  },
  setup () {
    const data: DataProps = reactive({
      girls: ["大脚", "刘颖", "晓红"],
      selectGirl: '',
      watchThree: 5,
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index];
        data.watchThree = index;
      }
    });
    // onBeforeMount(() => {
    //   console.log('onBeforeMount')
    // })
    // onMounted(() => {
    //   console.log('onMounted')
    // })
    // onBeforeUpdate(() => {
    //   console.log('onBeforeUpdate')
    // })
    // onUpdated(() => {
    //   console.log('onUpdated')
    // })

    // onRenderTracked((event) => {
    //   // 全部状态跟踪钩子函数
    //   console.log(event);
    // });
    // onRenderTriggered((event) => {
    //   // 状态跟踪
    //   console.log(event)
    // });
    const refData = toRefs(data); // 可响应式数据，可以在模板中直接使用变量名
    const overText = ref('红浪漫');
    const overAvtion = () => {
      overText.value = '点餐完成|' + overText.value;
    };
    watch([overText, () => data.selectGirl, () => data.watchThree], (newValue, oldValue) => {
      console.log('新值---' + newValue);
      console.log('老值---' + oldValue);
      document.title = newValue[0];
    });
    // 随机图片
    const {result, loading, loaded, error} = useUrlAvator('https://apiblog.jspang.com/default/getGirl');
    onErrorCaptured((error) => { // 捕获异常钩子函数
      console.log(error)
      return true
    })
    return {
      ...refData,
      overText,
      overAvtion,
      result,
      loading,
      loaded,
      error
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
