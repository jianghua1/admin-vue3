import type { FormSchema } from './types'

export function useForm(schema: FormSchema) {
  const model = ref<any>()

  onBeforeMount(() => {
    model.value = setForm(schema || [])
  })

  function setForm(arr: any[], level = 0): any {
    const obj = {}
    let i = 0
    arr.forEach((item) => {
      if (!item.prop) item.prop = `form${level}-${i}`
      if (item.value || item.value === '' || item.value === false) {
        obj[item.prop] = item.value
      } else if (item.schema && item.schema.length) {
        obj[item.prop] = setForm(item.schema, level + 1)
        i++
      } else {
        obj[item.prop] = undefined
      }
    })
    return obj
  }

  return {
    model,
    setForm
  }
}
