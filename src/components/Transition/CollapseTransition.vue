<template>
  <transition name="collapse">
    <slot></slot>
  </transition>
</template>

<script setup lang='ts'>


</script>
<style scoped lang="scss">
.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.5s ease-in-out;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
}
</style>