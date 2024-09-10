<template>
  <div>
    <VideoPlayer :options="options"></VideoPlayer>
  </div>
</template>
<script setup lang="ts">
import type { VideoPlayerOptions } from '@/components/Player/types'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})

const options = ref({
  sources: [
    {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      type: 'video/mp4'
    }
  ]
} as VideoPlayerOptions)



</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>