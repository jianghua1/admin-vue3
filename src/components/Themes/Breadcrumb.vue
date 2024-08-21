<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="ml-4">
    <el-breadcrumb-item :to="{ path: item.name }" v-for="(item, index) in breadcrumnData" :key="item.fullPath">
      <span>
        {{ item.meta?.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
x
<script setup lang='tsx'>
import { useRoute } from 'vue-router/auto'
//获取页面路由
const route = useRoute()
//右箭头
const ArrowRight = () => <i class="i-ep:arrow-right"></i>

const breadcrumnData = ref<any>([])

function getBreadcrumnData() {
  breadcrumnData.value = route.matched.filter(item => item.name && item.meta && item.meta.title)
}

watch(route, () => {
  getBreadcrumnData()
}, { immediate: true })
</script>
<style scoped></style>