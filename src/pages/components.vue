<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
definePage({
  meta: {
    title: '组件示例',
    icon: 'mdi:apps'
  },
  redirect: '/components/icons/ep-icon-list'
})
</script>
<style scoped></style>