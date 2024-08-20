<template>
  <VForm v-model="form" :schema="schema"></VForm>
</template>

<script setup lang='ts'>

definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})

const schema = ref([
  {
    type: 'input',
    label: 'Activity name',
    prop: 'name',
    value: ''
  },
  {
    type: 'select',
    label: 'Activity zone',
    prop: 'region',
    value: '',
    children: [
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
    type: 'date-picker',
    label: 'Activity time',
    prop: 'date1',
    value: '',
    attrs: {
      placeholder: 'Pick a date',
      style: 'width: 100%'
    },
    colProps: {
      span: 11
    }
  },
  {
    prop: 'name',
    label: 'Activity Name',
    schema: [
      {
        span: 11,
        prop: 'date1',
        value: '',
        type: 'date-picker',
        label: 'Pick a date',
        attrs: {
          type: 'date',
          placeholder: 'Pick a date',
          style: {
            width: '100%'
          }
        }
      },
      {
        span: 2,
        value: '-',
        attrs: {
          class: 'text-center w-full'
        }
      },
      {
        span: 11,
        type: 'time-picker',
        prop: 'date2',
        value: '',
        label: 'Pick a time',
        attrs: {
          type: 'date',
          placeholder: 'Pick a time',
          style: {
            width: '100%'
          }
        }
      }
    ]
  },
  {
    type: 'switch',
    prop: 'delivery',
    value: false,
    label: 'Instant delivery'
  },
  {
    type: 'checkbox',
    label: 'Activity type',
    prop: 'type',
    value: [],
    children: [
      {
        label: 'Online activities',
        name: 'type'
      },
      {
        label: 'Promotion activities',
        name: 'type'
      },
      {
        label: 'Offline activities',
        name: 'type'
      },
      {
        label: 'Simple brand activities',
        name: 'type'
      }
    ]
  },
  {
    type: 'radio',
    prop: 'resource',
    value: '',
    label: 'Resources',
    children: [
      {
        label: 'Sponsor'
      },
      {
        label: 'Venue'
      }
    ]
  },
  {
    type: 'input',
    value: '',
    label: 'Activity form',
    prop: 'desc',
    attrs: {
      type: 'textarea'
    }
  }
])

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

const modelValue = defineModel()
</script>
<style scoped lang="scss"></style>