import { useUserStore } from '@/store/user'
import type { Directive, DirectiveBinding } from 'vue'

const has: Directive = {
  mounted: function (el: HTMLElement, binding: DirectiveBinding) {
    const store = useUserStore()
    const values = binding.value
    const keys = Object.keys(binding.modifiers)
    const attribute = keys.find((o) => o !== 'not') || 'roles'

    if (keys && keys.length) {
      const checkPermission = () => {
        if (typeof values === 'string') {
          const flag = binding.modifiers.not
            ? store[attribute].includes(values)
            : !store[attribute].includes(values)
          if (flag) {
            el.style.display = 'none'
          } else {
            el.style.display = ''
          }
        }
        if (Array.isArray(values)) {
          const flag = binding.modifiers.not
            ? values.some((v) => store[attribute].includes(v))
            : !values.some((v) => store[attribute].includes(v))
          if (flag) {
            el.style.display = 'none'
          } else {
            el.style.display = ''
          }
        }
      }

      checkPermission()

      store.$subscribe(
        (mutation, _state) => {
          const { events } = mutation
          if ((events as unknown as any).key === attribute) {
            checkPermission()
          }
        },
        {
          deep: true
        }
      )
    }
  }
}

export default has
