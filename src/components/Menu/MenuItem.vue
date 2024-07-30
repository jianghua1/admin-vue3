<template>
  <!-- 没有ICON显示这个 -->
  <el-menu-item :index="getIndex(data)" :disabled="data.meta?.disabled" v-if="!data.meta?.icon">
    {{ data.meta?.title }}
  </el-menu-item>
  <!-- 有ICON显示这个 -->
  <template v-else>
    <!-- 折叠 -->
    <el-menu-item :index="getIndex(data)" :disabled="data.meta?.disabled" v-if="collapse">
      <Iconify :icon="data.meta?.icon"></Iconify>
      <template #title>
        {{ data.meta?.title }}
      </template>
    </el-menu-item>
    <!-- 侧栏 -->
    <el-menu-item :index="getIndex(data)" :disabled="data.meta?.disabled">
      <Iconify :icon="data.meta?.icon"></Iconify>
      <span>{{ data.meta?.title }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang='ts'>
import type { AppRouteMenuItem } from './types';
import { useMenu } from './useMenu'

interface MenuItemProps {
  data: AppRouteMenuItem
  //折叠开关
  collapse?: boolean
}

defineProps<MenuItemProps>()

const { getIndex } = useMenu()
</script>
<style scoped></style>