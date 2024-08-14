<template>
  <div class="w-screen h-screen overflow-hidden">
    <div v-if="bg" class="bg-center bg-cover w-full lg:w-1/3 xl:w-1/2 h-screen position-absolute left-0 top-0 z--1"
      :style="{ backgroundImage: `url(${bg})` }"></div>
    <div class="flex flex-col items-center justify-center h-screen mx-60" :style="marginStyle">
      <div :class="['self-center bg-white p-4 rounded', formClass]" ref="formRef">
        <div class="text-2xl mb-10">{{ settings.title }}</div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

const route = useRoute()

const settings = reactive({
  bg: '',
  title: '欢迎登录',
  position: '',
  imageWidth: ''
})

const bgRef = ref()
const formRef = ref()
const margin = ref()

useResizeObserver(bgRef, (entries) => {
  const { width } = entries[0].contentRect
  let changeWidth = 0
  if (formRef.value) {
    changeWidth = formRef.value.clientWidth
  }
  //from表单margin的距离
  margin.value = (document.body.clientWidth - width - changeWidth) / 2
})

onBeforeMount(() => {
  console.log('beforeMount', route.meta)
  settings.bg = route.meta.backgroundImage as string
  settings.title = route.meta.title as string
  settings.position = route.meta.position as string
})

const formClass = computed(() => {
  let cls = ''
  if (settings.position === 'center') {
    // cls = 'center'
  }
  if (settings.position === 'left') {
    // cls = 'center'
  }
  if (settings.position === 'right') {
    // cls = 'center'
  }

})
</script>
<style scoped></style>