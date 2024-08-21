<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="ml-4">

    <transition-group name="breadcrumb">
      <!-- <transition-group name="breadcrumb" @enter="onEnter" :css="false"> -->
      <el-breadcrumb-item :to="{ path: item.name }" v-for="(item, index) in breadcrumnData" :key="item.name"
        :data-index="index">
        <span>
          {{ item.meta?.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup lang='tsx'>
import { useRoute } from 'vue-router/auto'
import gsap from 'gsap'
//获取页面路由
const route = useRoute()
const change = ref(-1)
//右箭头
const ArrowRight = () => <i class="i-ep:arrow-right"></i>

const breadcrumnData = ref<any>([])

function getBreadcrumnData() {
  breadcrumnData.value = route.matched.filter(item => item.name && item.meta && item.meta.title)
}

function onEnter(el, done) {
  let index = el.dataset.index
  if (change.value === 1) {
    index = 1
  }
  gsap.fromTo(
    el,
    {
      opacity: 0,
      x: 30
    }, {
    opacity: 1,
    x: 0,
    delay: index * 0.15,
    onComplete: done
  })
}

watch(route, () => {
  getBreadcrumnData()
},
  { immediate: true }
)

watch(breadcrumnData, (newValue, oldValue) => {
  change.value = 0
  for (let i = 0; i < Math.max(newValue.length, oldValue.length); i++) {
    if (newValue.length < i || oldValue.length < i || newValue[i] == oldValue[i]) {
      change.value++
    }
  }
})
</script>
<style scoped lang="scss">
.breadcrumb-move,
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>