<template>
  <VForm v-model="model" :schema="schema" ref="formRef">
    <template #actions>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </template>
  </VForm>
  {{ formValue }}
</template>

<script setup lang='ts'>
import type { FormSchema } from "@/components/Form/types";
import { useForm } from "@/components/Form/useForm";
import type { FormInstance, FormItemInstance } from 'element-plus';

definePage({
  meta: {
    title: '基础表单',
    icon: 'mdi:message',
    order: 110
  }
})

const formRef = ref<FormInstance>()
const formItemRef = ref<FormItemInstance>()

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
    ],
    itemRef: (ref: FormItemInstance) => {
      formItemRef.value = ref
    }
  },
  {
    prop: 'region',
    label: 'Activity zone',
    type: 'select',
    value: undefined,
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
            required: false,
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
        rules: [
          {
            type: 'date',
            required: false,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ]
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
    type: 'rate',
    prop: 'rate',
    value: '',
    label: 'Rate'
  },
  {
    prop: 'type',
    label: 'Activity type',
    type: 'checkbox-group',
    value: [],
    children: [
      {
        type: 'checkbox',
        label: 'Online activities',
        name: 'type'
      },
      {
        type: 'checkbox',
        label: 'Promotion activities',
        name: 'type'
      },
      {
        type: 'checkbox',
        label: 'Offline activities',
        name: 'type'
      },
      {
        type: 'checkbox',
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
    value: [],
    children: [
      {
        label: 'Sponsor',
        value: '111'
      },
      {
        label: 'Venue',
        value: '222'
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
    label: '',
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
  },
  {
    type: 'cascader',
    prop: 'component',
    attrs: {
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency',
                },
                {
                  value: 'feedback',
                  label: 'Feedback',
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency',
                },
                {
                  value: 'controllability',
                  label: 'Controllability',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation',
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation',
                },
              ],
            },
          ],
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout',
                },
                {
                  value: 'color',
                  label: 'Color',
                },
                {
                  value: 'typography',
                  label: 'Typography',
                },
                {
                  value: 'icon',
                  label: 'Icon',
                },
                {
                  value: 'button',
                  label: 'Button',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox',
                },
                {
                  value: 'input',
                  label: 'Input',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber',
                },
                {
                  value: 'select',
                  label: 'Select',
                },
                {
                  value: 'cascader',
                  label: 'Cascader',
                },
                {
                  value: 'switch',
                  label: 'Switch',
                },
                {
                  value: 'slider',
                  label: 'Slider',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker',
                },
                {
                  value: 'upload',
                  label: 'Upload',
                },
                {
                  value: 'rate',
                  label: 'Rate',
                },
                {
                  value: 'form',
                  label: 'Form',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table',
                },
                {
                  value: 'tag',
                  label: 'Tag',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'tree',
                  label: 'Tree',
                },
                {
                  value: 'pagination',
                  label: 'Pagination',
                },
                {
                  value: 'badge',
                  label: 'Badge',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert',
                },
                {
                  value: 'loading',
                  label: 'Loading',
                },
                {
                  value: 'message',
                  label: 'Message',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox',
                },
                {
                  value: 'notification',
                  label: 'Notification',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'Menu',
                },
                {
                  value: 'tabs',
                  label: 'Tabs',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown',
                },
                {
                  value: 'steps',
                  label: 'Steps',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip',
                },
                {
                  value: 'popover',
                  label: 'Popover',
                },
                {
                  value: 'card',
                  label: 'Card',
                },
                {
                  value: 'carousel',
                  label: 'Carousel',
                },
                {
                  value: 'collapse',
                  label: 'Collapse',
                },
              ],
            },
          ],
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'docs',
              label: 'Design Documentation',
            },
          ],
        },
      ]
    },
    events: {
      change: (value) => {
        console.log(value)
      }
    }
  }
] as FormSchema)

const { model, formValue } = useForm(schema.value)

const onUpdate = (model: any) => {
  // Object.assign(form, model)
}

const onSubmit = () => {
  formRef.value?.validate()
}

const onCancel = () => {
  formItemRef.value?.clearValidate()
}
</script>
<style scoped lang="scss"></style>