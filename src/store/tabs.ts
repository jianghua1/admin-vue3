import type { AppRouteMenuItem } from '@/components/Menu/types'
import { defineStore } from 'pinia'

interface TabStoreType {
  tabs: AppRouteMenuItem[]
  current: string
}

export const useTabsStore = defineStore('tabs', {
  state: () => ({
    tabs: [] as AppRouteMenuItem[],
    current: ''
  }),
  actions: {
    addRoute(route: AppRouteMenuItem) {
      if (this.tabs.some((item) => item.name === route.name)) return
      this.tabs.push({ ...route })
    }
  }
})
