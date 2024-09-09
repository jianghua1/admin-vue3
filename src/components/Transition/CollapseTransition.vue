<template>
  <transition name="collapse" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave"
    @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
    <slot></slot>
  </transition>
</template>

<script setup lang='ts'>
defineProps({
  duration: {
    type: String,
    default: '1s'
  }
})
function beforeEnter(el) {
  if (!el.dataset) el.dataset = {}
  el.dataset.oldPaddingTop = el.style.paddingTop
  el.dataset.oldPaddingBottom = el.style.paddingBottom

  el.style.height = 0
  el.style.paddingTop = 0
  el.style.paddingBottom = 0
}

function enter(el) {
  el.dataset.oldOverflow = el.style.overflow
  if (el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + 'px'
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  } else {
    el.style.height = ''
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }
  el.style.overflow = 'hidden'
}

function afterEnter(el) {
  el.style.height = ''
  el.style.overflow = el.dataset.oldOverflow
}
//将要离开的时候
function beforeLeave(el) {
  // 离开时，使用中间变量存储元素的初始状态
  if (!el.dataset) el.dataset = {}
  el.dataset.oldPaddingTop = el.style.paddingTop
  el.dataset.oldPaddingBottom = el.style.paddingBottom
  el.dataset.oldOverflow = el.style.overflow

  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}
//离开后的样子
function leave(el) {
  if (el.scrollHeight !== 0) {
    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  }
}
//离开后的收尾工作
function afterLeave(el) {
  el.style.height = ''
  el.style.overflow = el.dataset.oldOverflow
  el.style.paddingTop = el.dataset.oldPaddingTop
  el.style.paddingBottom = el.dataset.oldPaddingBottom
}


</script>
<style scoped lang="scss">
.collapse-enter-active,
.collapse-leave-active {
  transition: all v-bind(duration) ease-in-out;
}
</style>