<template>
  <div ref="editorRef"></div>
</template>

<script setup lang='ts'>
import Vditor from 'vditor'
import type { EditorProps, VditorOptions } from './types.d'
import 'vditor/dist/index.css'

const defaultOptions: IOptions = {
  rtl: false,//从左往右还是从右往左
  mode: 'ir',
  value: '',
  debugger: false,
  typewriterMode: true,
  height: 'auto',
  minHeight: 400,
  width: 'auto',
  placeholder: '',
  fullscreen: {
    index: 90
  },
  counter: {
    enable: false,
    type: 'markdown',
  },
  link: {
    isOpen: true
  },
  image: {
    isPreview: true
  },
  lang: 'zh_CN',
  cache: {
    id: Math.random().toString(36).slice(2),
    enable: true
  },
  theme: 'classic',
  icon: 'ant',
  cdn: 'https://unpkg.com/vditor@3.9.6'
}

const props = defineProps<EditorProps>()
const modelValue = defineModel()

const editorRef = ref()
const editorInstance = shallowRef<Vditor>()
const history = ref('')

const emits = defineEmits(['init'])

watch(modelValue, (newVal) => {
  if (editorInstance.value && newVal && `${newVal}` !== editorInstance.value.getValue()) {
    editorInstance.value.setValue(newVal + '')
  }
})

watch(() => props.options, (newOptions) => {
  history.value = editorInstance.value?.getValue() || ''
  editorInstance.value?.destroy()
  initEditor(newOptions)

}, { deep: true })

function initEditor(options) {
  editorInstance.value = new Vditor(editorRef.value, Object.assign(defaultOptions, props.options))
  const defaultInput = options?.input || (() => { })
  const defaultAfter = options?.after || (() => { })
  const instance = new Vditor(editorRef.value, Object.assign
    (defaultOptions, {
      ...options, after: () => {
        defaultAfter && defaultAfter()
        if (history.value) {
          instance.setValue(history.value, true)
        }
        modelValue.value = editorInstance.value?.getValue()
      }
      , input: (md) => {
        defaultInput && defaultInput(md)
        modelValue.value = md
      }
    }))
  editorInstance.value = instance
  modelValue.value = options?.value || ''
  return instance
}

onMounted(() => {
  initEditor(props.options)
  emits('init', editorInstance.value)
})

onBeforeUnmount(() => {
  editorInstance.value?.destroy()
})
</script>
<style scoped></style>