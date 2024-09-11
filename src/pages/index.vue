<template>
  <div v-copy.mute="msg">copy directive</div>
  <input type="text" v-model="msg">
  {{ msg }}
  <div v-copy="msg2">copy directive</div>
  <input type="text" v-model="msg2">
  {{ msg2 }}
</template>
<script setup lang="ts">

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})
const msg = ref('hello world')
const msg2 = ref('hello world2')
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>