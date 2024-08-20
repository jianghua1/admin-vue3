<template>
  <VForm :model="form" :schema="[
    { type: 'radio', label: 'Name', prop: 'name' },
    { type: 'checkbox', label: 'Checkbox', prop: 'name' },
    { type: 'time-picker', label: 'Time', prop: 'name' },
    { type: 'date-picker', label: 'Date', prop: 'name' },
    { type: 'switch', label: 'Switch', prop: 'name' }
  ]"></VForm>
</template>

<script setup lang='ts'>
definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
</script>
<style scoped lang="scss"></style>