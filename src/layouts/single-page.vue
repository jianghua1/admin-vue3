<template>
  <div class="w-screen h-screen overflow-hidden">
    <div v-if="settings.bg"
      :class="['bg-center bg-cover w-full lg:w-1/3 xl:w-1/2 h-screen position-absolute left-0 top-0 z--1', settings.position === 'right' ? 'left-0' : 'right-0', settings.position === 'center' ? 'w-full!' : '']"
      :style="bgStyle" ref="bgRef">
    </div>
    <div class="flex flex-col items-center justify-center h-screen mx-60" :style="marginStyle">
      <div :class="['bg-white p-4 rounded', formClass]" ref="formRef">
        <!-- <div class="text-2xl mb-10">{{ settings.title }}</div> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
const settings = reactive({
  bg: '',
  title: '欢迎登录',
  position: 'right',
  imageWidth: ''
})
const route = useRoute()

onBeforeMount(() => {
  settings.bg = route.meta.backgroundImage as string
  settings.title = route.meta.title as string
  settings.position = route.meta.position as string
})

const marginStyle = computed(() => { })

const bgStyle = computed(() => ({
  backgroundImage: `url(${settings.bg})`
}))

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

const formClass = computed(() => {
  let cls = ''
  if (settings.position === 'center') {
    cls = 'self-center'
  }
  if (settings.position === 'left') {
    cls = 'self-start'
  }
  if (settings.position === 'right') {
    cls = 'self-end'
  }
  return cls
})
</script>
<style scoped></style>