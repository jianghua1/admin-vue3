<template>
  <el-tabs type="card" v-bind="$attrs" class="myTabs" closable>
    <el-tab-pane :label="item.meta && item.meta?.title" :name="item.path" v-for="item in data"
      :key="item.name">User</el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import type { TabsProps } from 'element-plus'
import type { AppRouteMenuItem } from '../Menu/types'

interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}

defineProps<HeaderTabsProps>()
</script>
<style scoped></style>