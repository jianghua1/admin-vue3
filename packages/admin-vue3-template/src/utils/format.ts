import type { Ref } from 'vue'
export function convertDashToCamelCase(str: string): string {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

export function camelToHyphen(name: string) {
  return name.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

//使用事件名称和参数动态生成emits事件
export function forwardEventsUtils(emits: any, arr: string[], prefix: string = '') {
  const forwardEvents: Record<string, (...args: any[]) => void> = {}
  arr.forEach((eventName) => {
    const name = convertDashToCamelCase(eventName)
    forwardEvents[name] = (...args: any[]) => {
      emits(prefix + eventName, ...args)
    }
  })
  return forwardEvents
}

export function exposeEventsUtils(ref: Ref<any>, arr: string[]) {
  const exposeMethods: Record<string, Function> = {}
  arr.forEach((exposeName) => {
    exposeMethods[exposeName] = (...args: any[]) => {
      if (ref.value && typeof ref.value[exposeName] === 'function') {
        //设置对应名称函数的回调
        return ref.value[exposeName](...args)
      } else {
        return ref.value[exposeName]
      }
    }
  })
  return exposeMethods
}
