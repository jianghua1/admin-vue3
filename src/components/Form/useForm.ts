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
