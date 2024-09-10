<template>
  <el-form-item v-bind="props" :ref="(ref) => props?.itemRef && props.itemRef(ref as FormItemInstance)">
    <slot name="prefix">
      <template v-if="props?.prefixSlot">
        <component :is="props.prefixSlot" v-bind="props" />
      </template>
    </slot>
    <template #default v-if="props?.defaultSlot">
      <component :is="props?.defaultSlot" v-bind="props" />
    </template>
    <template #default v-else>
      <el-select v-if="type === 'select'" v-model="modelValue" v-bind="attrs" v-on="events">
        <el-option :label="item.label" :value="item.value" v-bind="item" v-for="(item, index) in children"
          :key="index" />
      </el-select>
      <el-checkbox-group v-else-if="type === 'checkbox' || type === 'checkbox-group'" v-model="modelValue"
        v-bind="attrs" v-on="events" :ref="(ref) => props?.childRef && props.childRef(ref)">
        <component :is="'el-' + item.type" v-for="(item, index) in children" :key="index" :label="item.label"
          :value="item.value" v-bind="item" />
      </el-checkbox-group>
      <el-radio-group v-else-if="type === 'radio' || type === 'radio-group'" v-model="modelValue" v-bind="attrs"
        v-on="events">
        <component :is="'el-' + item.type" v-for="(item, index) in children" :key="index" v-bind="item"
          :label="item.value">
          {{
            item.label
          }}</component>
      </el-radio-group>
      <component :is="'el-' + type"
        v-else-if="!['checkbox', 'radio', 'select'].includes(type) && typeof type !== 'undefined' && type !== ''"
        v-model="modelValue" v-bind="attrs" v-on="events" :ref="(ref) => props?.childRef && props.childRef(ref)" />
      <span v-else class="text-gray-500" v-bind="attrs">{{ value }}</span>
    </template>
    <slot name="suffix">
      <template v-if="props?.suffixSlot">
        <component :is="props.suffixSlot" v-bind="props" />
      </template>
    </slot>
    <template #label="scope" v-bind="props.labelSlot">
      <component :is="props.labelSlot" v-bind="scope" />
    </template>
    <template #error="scope" v-bind="props.errorSlot">
      <component :is="props.errorSlot" v-bind="scope" />
    </template>
  </el-form-item>
</template>

<script setup lang='ts'>
import type { FormItemInstance } from "element-plus"
import type { FormItemProp } from "./types"
import { exposeEventsUtils } from "@/utils";

const props = withDefaults(defineProps<FormItemProp>(), {
  showMessage: true,
  labelWidth: '',
  inlineMessage: '',
  required: undefined,
  type: ''
})

// const formItemRef = ref<FormItemInstance>()

// const exposeEventNames = ['resetField', 'clearValidate', 'size', 'validateMessage', 'validateState', 'validate']

const modelValue = defineModel()

// const exposes = exposeEventsUtils(formItemRef, exposeEventNames)

// defineExpose({ ...exposes })

onBeforeMount(() => {
  // if (props.type === 'select' && props.value === '') {
  //   modelValue.value = undefined
  // } else {
  //   modelValue.value = props.value
  // }
})

// onMounted(() => {
// watch(formItemRef, () => {
//   if (formItemRef.value && props.itemRef) {
//     props.itemRef(formItemRef.value)
//   }
// })
</script>
<style scoped></style>