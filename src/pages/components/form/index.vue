<template>
  <VForm v-model="form" :schema="schema" @update:model-value="onUpdate"></VForm>
  {{ formValue }}
</template>

<script setup lang='ts'>
import { flatObj } from "@/components/Form/useForm"

definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})

const rules = reactive<FormRules>({





  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ]
})

const schema = ref([
  {
    type: 'input',
    label: 'Activity name',
    prop: 'name',
    value: '',
    rules: [
      {
        required: true,
        trigger: 'blur',
      },
      {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur',
        informType: 'warning',
      },
    ]
  },
  {
    type: 'select',
    label: 'Activity zone',
    prop: 'region',
    value: '',
    rules: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
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
        },
        rules: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
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
        },
        rules: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
          }
        ]
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
    ],
    rules: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
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
    ],
    rules: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change',
      }
    ]
  },
  {
    type: 'textarea',
    value: '',
    label: 'Activity form',
    prop: 'desc',
    attrs: {
      type: 'textarea'
    },
    rules: [
      { required: true, message: 'Please input activity form', trigger: 'blur' }
    ]
  }
])

const formValue = computed(() => flatObj(form))


const form = reactive({

})

const onUpdate = (model: any) => {
  Object.assign(form, model)
}
// const modelValue = defineModel()
</script>
<style scoped lang="scss"></style>