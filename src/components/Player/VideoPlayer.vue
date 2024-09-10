<template>
  <div ref="videoRef">
    <video ref="playerRef" class="video-js"></video>
  </div>
</template>

<script setup lang='ts'>
import type { VideoPlayerOptions, VideoPlayerProps } from './types'
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'

const props = defineProps<VideoPlayerProps>()

const videoRef = ref()
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
//当配置改变时
watch(
  () => props.options,
  (newOptions) => {
    if (videojsInstance.value) {
      //存在则销毁播放器实例
      videojsInstance.value.pause()
      videojsInstance.value.dispose()

      //创建video标签
      const newVideo = document.createElement('video')
      newVideo.className = 'video-js'
      videoRef.value.appendChild(newVideo)
      playerRef.value = newVideo
      videojsInstance.value = videojs(playerRef.value,
        Object.assign(defaultOptions, newOptions))

      emits('init', videojsInstance.value)
    }
  })
//当播放源改变时
watch(() => props.options?.sources, (sources) => {
  if (videojsInstance.value) {
    //暂停视频播放
    videojsInstance.value.pause()
    videojsInstance.value?.reset()
    videojsInstance.value?.src(sources)
    videojsInstance.value?.load()
  }
}, {
  deep: true
})

onMounted(() => {
  if (playerRef.value) {
    videojsInstance.value = videojs(playerRef.value,
      Object.assign(defaultOptions, props.options))
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