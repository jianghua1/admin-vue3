<template>
  <VideoPlayer :options="options"></VideoPlayer>
  <div class="pt-2">
    <el-button type="primary" @click="handleClick">ChangeSource</el-button>
  </div>
</template>

<script setup lang="ts">
definePage({
  meta: {
    title: 'components.video-player',
    icon: 'ph:video'
  }
})

import type { VideoPlayerOptions } from '@/components/Player/types'

const options = ref({
  sources: [
    {
      src: 'https://toimc-online.static.toimc.com/vue-toimc-admin/video/001.mp4',
      type: 'video/mp4'
    }
  ]
} as VideoPlayerOptions)

const handleClick = () => {
  options.value.sources = [
    {
      src: 'https://toimc-online.static.toimc.com/vue-toimc-admin/video/002.mp4',
      type: 'video/mp4'
    }
  ]
}
</script>

<style scoped></style>
