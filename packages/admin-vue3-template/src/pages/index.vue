<template>
  <HelloWorld></HelloWorld>
</template>

<script setup lang="tsx">
import { HelloWorld } from 'el-admin-components'
definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
