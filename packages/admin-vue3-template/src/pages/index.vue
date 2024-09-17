<template>
  <div>home

    <HelloWorld msg="hello monorepo with vue"></HelloWorld>
  </div>
</template>

<script setup lang="tsx">
import { HelloWorld } from 'el-admin-components'

definePage({
  meta: {
    title: 'pages.home',
    icon: 'mdi:home'
  }
})
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
