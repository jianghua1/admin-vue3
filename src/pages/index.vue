<template>
  <div>
    <Menu mode="horizontal" :data="data" class="w-[600px] mx-auto!">
      <template #icon>
        123
      </template>
    </Menu>
  </div>
</template>


<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'

import type { AppRouteMenuItem } from '@/components/Menu/types'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})



const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center"
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"]
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
})

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
