<template>
  <el-form v-bind="props" ref="tableRef">
    <slot name="default">
      <template v-if="schema && schema.length">

        <VFormLayout v-for="(item, index) in schema" :key="index" v-bind="item" v-model="form[item?.prop as string]">
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
import type { FormInstance } from 'element-plus'
import type { VFromProps } from './types';

import { initForm, initRules } from './useForm'
import { useForm } from './useForm2';

const props = withDefaults(defineProps<VFromProps>(), {
  inline: false,
  labelPosition: 'right',
  hideRequiredAsterisk: false,
  showMessage: true,
  inlineMessage: false,
  statusIcon: false,
  validateOnRuleChange: true,
  disabled: false,
  scrollToError: false
})

const tableRef = ref<FormInstance>()

const rules = ref<any>()

const emits = defineEmits(['update:modelValue'])
const form = ref({
  aaaaa: ''
})

const { model } = useForm(props.schema || [])
onBeforeMount(() => {
  form.value = initForm(props)
  // rules.value = initRules(props)
})

watch(form, () => {
  emits('update:modelValue', form.value)
}, {
  deep: true
})

const onSubmit = () => {
  tableRef.value?.validate()
}


</script>
<style scoped></style>
