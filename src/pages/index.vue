<template>
  <Menu mode="horizontal" :data="data" class="w-[600px] mx-auto!">
    <template #icon>
      123
    </template>
  </Menu>
</template>


<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

import type { AppRouteMenuItem } from '@/components/menu/types'

const data: AppRouteMenuItem[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      order: 1,
      icon: 'ep:bell',
      key: 'dashboard',
      hideMenu: false,
      disabled: false
    },
    children: [
      {
        name: 'Analytics',
        path: '/dashboard/analytics',
        meta: {
          title: 'Analytics',
          order: 1,
          icon: '',
          key: 'analytics',
          hideMenu: false,
          disabled: false
        },
        children: [
          {
            name: 'Reports',
            path: '/dashboard/analytics/reports',
            meta: {
              title: 'Reports',
              order: 1,
              key: 'reports',
              hideMenu: false,
              disabled: false
            }
          }
        ]
      }
    ]
  }
]

onMounted(() => {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration && registration.update()
      }, 3600000)
    }
  })
})

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
