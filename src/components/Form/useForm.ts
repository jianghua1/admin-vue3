//方法调用前要声明 const model = ref<any>()
export function setForm(arr: any[], level = 0): any {
  const obj = {}
  let i = 0
  arr.forEach((item) => {
    if (!item.prop) item.prop = `form${level}-${i}`
    if (item.value) obj[item.prop] = item.value
    else if (item.schema && item.schema.length) {
      obj[item.prop] = setForm(item.schema, level + 1)
      i++
    } else obj[item.prop] = undefined
  })
  return obj
}

//方法调用前要声明 const rules = ref<any>()
export function setRules(arr: any[]): any {
  let formRules = {}
  arr.forEach((item) => {
    if (item.prop && item.rules) {
      formRules[item.prop] = item.rules
    }
    if (item.schema && item.schema.length) {
      formRules = { ...formRules, ...setRules(item.schema) }
    }
  })
  return formRules
}

export function flatObj(obj) {
  let result = {}
  if (typeof obj !== 'object') return result

  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && Object.keys(obj[key]).length)
      result = { ...result, ...flatObj(obj[key]) }
    else {
      if (!key.startsWith('form')) {
        result[key] = obj[key]
      }
    }
  }
  return result
}

export function initForm(props: any): any {
  return setForm(props?.schema || [])
}

export function initRules(props: any): any {
  return setRules(props?.schema || [])
}
