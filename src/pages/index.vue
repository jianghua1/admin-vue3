<template>
  <div>
    <Menu mode="horizontal" :data="data" class="w-[600px] mx-auto!">
      <template #icon>
        123
      </template>
    </Menu>
    <VueEcharts :option="option" theme="#12ffff" :height="600"></VueEcharts>
  </div>
</template>


<script setup lang="ts">
import type { AppRouteMenuItem } from '@/components/Menu/types'

definePage({
  meta: {
    title: '首页',
    icon: 'mdi:home'
  }
})

const option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

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
