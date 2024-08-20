<template>
  <VForm :model="form" :schema="schema"></VForm>
</template>

<script setup lang='ts'>
import { colProps, type ColProps } from 'element-plus';

definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})

const schema = [
  { type: 'input', label: 'Activity name', prop: 'name' },
  {
    type: 'select', label: 'Activity zone', prop: '', children: [
      {
        label: 'Zone one',
        value: 'shanghai'
      },
      {
        label: 'Zone two',
        value: 'beijing'
      }
    ]
  },
  {
    type: 'date-picker', label: 'Activity time', prop: '', attrs: {
      placeholder: 'Pick a date',
      style: 'width: 100%'
    },
    colProps: {
      span: 11
    } as ColProps
  },
  {
    prop: 'name', label: 'Activity Name', schema: [
      {
        span: 11, prop: 'date1', type: 'date-picker', label: 'Pick a date', attrs: {
          type: 'date',
          placeholder: 'Pick a date',
          style: {
            width: '100%'
          }
        }
      }, {
        span: 2, value: '-', attrs: {
          class: 'text-center w-full'
        }
      }, {
        span: 11, type: 'time-picker', label: 'Pick a date', attrs: {
          type: 'date',
          placeholder: 'Pick a time',
          style: {
            width: '100%'
          }
        }
      }
    ]
  },
  { type: 'switch', label: 'Instant delivery', prop: 'name' },
  {
    type: 'checkbox', label: 'Activity type', prop: 'name', children: [
      {
        label: 'Online activities',
        name: 'type'
      }, {
        label: 'Promotion activities',
        name: 'type'
      }, {
        label: 'Offline activities',
        name: 'type'
      }, {
        label: 'Simple brand activities',
        name: 'type'
      }
    ]
  },
  {
    type: 'radio', label: 'Resources', prop: '', children: [
      {
        label: 'Sponsor'
      }, {
        label: 'Venue'
      }
    ]
  },
  { type: 'input', label: 'Activity form', prop: '', attrs: { type: 'textarea' } },
]

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