<template>
  <div>
    <IconPicker @submit="handleSubmit"></IconPicker>
  </div>
</template>

<script setup lang='ts'>
import type { IconPickerSubmitDataType } from '@/components/types';

const handleSubmit = (data: IconPickerSubmitDataType) => {
  console.log("111")
}
</script>
<style scoped></style>