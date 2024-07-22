<template>
  <!-- <Icon icon="mdi:home" class="text-3xl text-red-500" @click="handleClick" />
  <SvgIcon type="微信" class="text-red w-5 h-5"></SvgIcon>
  <NetIcon url="//at.alicdn.com/t/c/font_4421207_cksjqt2r42n.css" type="icon-youjiantou"></NetIcon>
  <IconFontIcon type="icon-youjiantou"></IconFontIcon> -->
  <!-- <IconList></IconList> -->
  <!-- <ThemesDarkModeToggle></ThemesDarkModeToggle> -->
  <ThemesFullScreen></ThemesFullScreen>
</template>


<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
import { Icon } from '@iconify/vue';

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})


</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
