<template>
  <div>
    <VForm :schema="(schema as FormItemProp[])" v-model="editorOptions"></VForm>
    <!-- <VForm :schema="schema" v-model="editorOptions"></VForm> -->
    <Editor class="mt-5" :options="editorOptions" v-model="value"></Editor>
  </div>
</template>

<script setup lang='ts'>
import type { EditorOptions } from '@/components/Editor/types'
import { colProps } from 'element-plus';
import { ref } from 'vue';
// editorOptions.ts
import type { II18n } from '@/components/II18n/types';
import type { FormItemProp } from '@/components/Form/types';
definePage({
  meta: {
    title: '编辑器组件',
    icon: 'icon-park-outline:editor',
    order: 300
  }
})

const value = ref('')

const editorOptions = ref({
  lang: 'zh-CN' as keyof II18n,
  mode: 'ir'
} as EditorOptions)

const schema = ref([
  {
    type: 'radio-group',
    label: '模式',
    value: 'ir',
    prop: 'mode',
    children: [
      { type: 'radio-button', label: 'WYSIWYG', value: 'wysiwyg' },
      { type: 'radio-button', label: '即时渲染', value: 'ir' },
      { type: 'radio-button', label: '分屏预览', value: 'sv' }
    ],
    colProps: {
      md: 6,
      sm: 12,
      xs: 24
    },
    span: 12
  },
  {
    type: 'radio-group',
    value: 'zh-CN',
    label: '设置语言',
    prop: 'lang2',
    attrs: {
      size: 'small'
    },
    children: [
      { type: 'radio-button', label: '简体中文', value: 'zh-CN' },
      { type: 'radio-button', label: '繁体中文', value: 'zh-TW' },
      { type: 'radio-button', label: '英文', value: 'en_US' }
    ],
    colProps: {
      md: 6,
      sm: 12,
      xs: 24
    },
    span: 12
  },
  {
    type: 'input-number',
    value: 400,
    label: '设置高度',
    prop: 'height',
    attrs: {
      size: 'small',
      step: 10,
      min: 400
    },
    colProps: {
      md: 6,
      sm: 12,
      xs: 24
    }
  }
])
</script>
<style scoped></style>