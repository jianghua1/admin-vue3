<!--  -->
<template>
  <div>
    <video ref="playerRef" class="video-js"></video>
  </div>
</template>

<script setup lang='ts'>
import type { VideoPlayerOptions, VideoPlayerProps } from './types'
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

const props = defineProps<VideoPlayerProps>()

const playerRef = shallowRef<HTMLVideoElement>()
const videojsInstance = shallowRef<any>()

const emits = defineEmits(['init'])

const defaultOptions = {
  autoplay: false,
  controls: true,
  fluid: true,
  aspectRatio: '16:9',
  playbackRates: [0.5, 1, 1.5, 2],
  muted: false,
  loop: false
} as VideoPlayerOptions

onMounted(() => {
  if (playerRef.value) {
    videojsInstance.value = videojs(playerRef.value, Object.assign(defaultOptions, props.options))
    emits('init', videojsInstance.value)
  }
})

//卸载事件
onBeforeUnmount(() => {
  if (videojsInstance.value) {
    videojsInstance.value.dispose()
  }
})
</script>
<style scoped></style>