<template>
  <VpVideoPlayer :options="options"></VpVideoPlayer>
  <div class="pt-2">
    <el-button type="primary" @click="handleClick">ChangeSource</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// import type { VpVideoPlayerOptions } from '@/components/Player/types'

const options = ref({
  sources: [
    {
      src: 'https://toimc-online.static.toimc.com/vue-toimc-admin/video/001.mp4',
      type: 'video/mp4'
    }
  ]
} as any)
// } as VpVideoPlayerOptions)

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
