<template>
  <div>
    <VideoPlayer :options="options"></VideoPlayer>
  </div>
  <div @click="handleClick">111</div>
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

const handleClick = () => {
  options.value.sources = [
    {
      src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
      type: 'video/mp4'
    }
  ]
}
</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>