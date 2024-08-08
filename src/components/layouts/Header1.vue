<template>
  <el-row>
    <Iconify :icon="collapse ? 'ep:expand' : 'ep:fold'" class="text-xl cursor-pointer"></Iconify>
    <div class="flex-grow"></div>
    <el-row class="items-center">
      <DarkModeToggle class="mr-3"></DarkModeToggle>
      <FullScreen></FullScreen>
    </el-row>
  </el-row>
</template>

<script setup lang='ts'>
import Iconify from '../Icon/Iconify.vue'

interface HeaderProps {
  collapse: boolean
}
//初始化函数
withDefaults(defineProps<HeaderProps>(), {
  collapse: true
})
</script>
<style scoped></style>