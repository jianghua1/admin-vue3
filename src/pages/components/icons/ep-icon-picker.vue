<template>
  <div>
    <IconPicker @submit="handleSubmit"></IconPicker>
  </div>
</template>

<script setup lang='ts'>
import type { IconPickerSubmitDataType } from '@/components/Icon/types';
definePage({
  meta: {
    title: '通知选择器',
    icon: 'mdi:message'
  }
})
const handleSubmit = (data: IconPickerSubmitDataType) => {
}
</script>
<style scoped></style>