<template>
  <el-form v-bind="props">
    <slot name="default">
      <template v-if="schema && schema.length">
        <VFormLayout v-for="(item, index) in schema" :key="index" v-bind="item" v-model="form[item.prop as string]">
        </VFormLayout>
      </template>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>

<script setup lang='ts'>
import type { VFromProps } from './types';


const props = withDefaults(defineProps<VFromProps>(), {
  inline: false,
  'label-position': 'right',
  'hide-required-asterisk': false,
  'show-message': true,
  'inline-message': false,
  'status-icon': false,
  'validate-on-rule-change': true,
  disabled: false,
  'scroll-to-error': false
})

const form = ref<any>()

const emits = defineEmits(['update:modelValue'])

onBeforeMount(() => {
  form.value = setForm(props?.schema || [])
})

function setForm(arr: any[], level = 0) {
  const obj = {}
  let i = 0
  arr.forEach(item => {
    if (!item.prop)
      item.prop = `form${level}-${i}`
    if (item.value)
      obj[item.prop] = item.value
    else if (item.schema && item.schema.length) {
      obj[item.prop] = setForm(item.schema, level + 1)
      i++
    } else
      obj[item.prop] = undefined
  })
  return obj
}

watch(form, () => {
  emits('update:modelValue', form.value)
}, {
  deep: true
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped></style>