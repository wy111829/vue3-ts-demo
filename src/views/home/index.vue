<template>
  <div>
    <el-input v-model="inputValue" placeholder=""/>
    {{obj.value}}
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const obj = reactive({
  value: '12312'
})
const inputValue = ref('123')
console.log(inputValue.value)
</script>
<style lang="less" scoped>
  .el-input{
    width: 100px;
  }
</style>
