<template>
  <el-form v-bind="props">
    <slot name="default">
      <template v-if="schema && schema.length">
        <VFormLayout v-for="(item, index) in schema" :key="index" v-bind="item" v-model="model[item.prop as string]">
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
import { initForm } from './useForm'

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

const model = ref<any>()

const emits = defineEmits(['update:modelValue'])

onBeforeMount(() => {
  model.value = initForm(props)
})


watch(model, () => {
  emits('update:modelValue', model.value)
}, {
  deep: true
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style scoped></style>
