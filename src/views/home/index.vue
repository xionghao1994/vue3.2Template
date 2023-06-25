<template>
  <div class="container">
    <app-button>按钮</app-button>
    <div>welcome to vue3+ts+pinia</div>
    <div class="scss">测试scss</div>
  </div>
</template>
<script lang="ts" setup>
import { cloneDeep } from "lodash";
import useStore from "@/store/modules/demo";
const store = useStore();

// demo()
// function demo() {
//   // 存储数据
// 	store.$patch((state: any)=>{

// 		state.roles = [{
//       name: '张三',
//       age: '20'
//     },{
//       name: '李四',
//       age: 30
//     }]
//   })
// }

// 获取数据
console.log(cloneDeep(store.roles));
</script>
<style scoped lang="scss">
// .container {
//   color: red;
//   div {
//     font-weight: 700;
//     width: 300px;
//     height: 100px;
//     background: #fff;
//   }
//   .scss {
//     color: yellow;
//   }
// }
</style>
