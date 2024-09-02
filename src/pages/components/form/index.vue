<template>
  <VForm v-model="form" :schema="schema" @update:model-value="onUpdate"></VForm>
  {{ formValue }}
</template>

<script setup lang='ts'>
import type { FormItemProp } from "@/components/Form/types";
import { flatObj } from "@/components/Form/useForm"
import type { ColProps } from 'element-plus';

definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})

const schema = ref([
  {
    prop: 'name',
    label: 'Activity name',
    type: 'input',
    value: '',
    rules: [
      {
        required: true,
        trigger: 'blur'
      },
      {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur',
        informType: 'warning'
      }
    ]
  },
  {
    prop: 'region',
    label: 'Activity zone',
    type: 'select',
    value: '',
    rules: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change'
      }
    ],
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
    prop: '',
    label: 'Activity time',
    schema: [
      {
        span: 11,
        prop: 'date1',
        type: 'date-picker',
        label: 'Pick a date',
        value: '',
        attrs: {
          type: 'date',
          placeholder: 'Pick a date',
          style: {
            width: '100%'
          }
        },
        rules: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ]
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
        prop: 'date2',
        type: 'time-picker',
        label: 'Pick a time',
        value: '',
        attrs: {
          placeholder: 'Pick a time',
          style: {
            width: '100%'
          }
        },
      }
    ]
  },
  {
    prop: 'delivery',
    label: 'Instant delivery',
    type: 'switch',
    value: false
  },
  {
    prop: 'type',
    label: 'Activity type',
    type: 'checkbox',
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
    ],
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change'
      }
    ]
  },
  {
    prop: 'resource',
    label: 'Resources',
    type: 'radio',
    value: '',
    children: [
      {
        label: 'Sponsor'
      },
      {
        label: 'Venue'
      }
    ],
    rules: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change'
      }
    ]
  },
  {
    prop: 'desc',
    label: 'Activity form',
    type: 'input',
    value: '',
    attrs: {
      type: 'textarea'
    },
    rules: [
      {
        required: true,
        message: 'Please input activity form',
        trigger: 'blur'
      }
    ]
  }
] as FormItemProp[])

const formValue = computed(() => flatObj(form))


const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onUpdate = (model: any) => {
  Object.assign(form, model)
}
// const modelValue = defineModel()
</script>
<style scoped lang="scss"></style>