import type { AppRouteMenuItem } from '@/components/Menu/types'
import { defineStore } from 'pinia'

interface TabStoreType {
  tabs: AppRouteMenuItem[]
  current: string
}

export const useTabsStore = defineStore('tabs', {
  state: () =>
    ({
      tabs: [] as AppRouteMenuItem[],
      current: ''
    } as TabStoreType),
  actions: {
    addRoute(route: AppRouteMenuItem) {
      if (this.tabs.some((item) => item.name === route.name)) return
      this.tabs.push({ ...route })
    },
    removeRoute(path: string) {
      this.tabs = this.tabs.filter((item) => item.path !== path)
    }
  },
  persist: true
})
