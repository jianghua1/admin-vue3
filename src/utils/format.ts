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

//使用事件名称和参数动态生成emits事件
export function forwardEventsUtils(emits: any, arr: string[]) {
  const forwardEvents: Record<string, (...args: any[]) => void> = {}
  arr.forEach((eventName) => {
    const name = convertDashToCamelCase(eventName)
    forwardEvents[name] = (...args: any[]) => {
      emits(eventName, ...args)
    }
  })
  return forwardEvents
}
