<template>
  <Iconify icon="ri:brush-2-line" @click="drawer = true"></Iconify>
  <el-drawer v-model="drawer" title="I am the title">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup lang='ts'>
import Iconify from '../Icon/Iconify.vue'

const drawer = ref(false)
</script>
<style scoped></style>