<template>
  <div>
    <VForm :schema="schema" v-model="editorOptions"></VForm>
    <Editor class="mt-5" :options="editorOptions" v-model="value"></Editor>
  </div>
</template>

<script setup lang='ts'>
import type { EditorOptions } from '@/components/Editor/types'

definePage({
  meta: {
    title: '编辑器组件',
    icon: 'icon-park-outline:editor',
    order: 300
  }
})

const value = ref('')

const editorOptions = ref({
  // lang: 'zh-CN'
} as EditorOptions)

const schema = ref([])
</script>
<style scoped></style>