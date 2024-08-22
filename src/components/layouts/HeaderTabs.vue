<template>
  <el-tabs type="card" v-bind="$attrs" class="myTabs" closable v-on="forwardEvents" v-model="modelValue">
    <el-tab-pane :label="item.meta && item.meta?.title" :name="item?.name as string" v-for="item in data"
      :key="item.name as string"></el-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import type { TabsProps, TabsPaneContext } from 'element-plus'
import type { AppRouteMenuItem } from '../Menu/types'
import { forwardEventsUtils } from '../../utils/format';

interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}

type TabPaneName = string | number

type HeaderTabsEvents = {
  tabClick: [pane: TabsPaneContext, ev: Event]
  tabChange: [pane: TabPaneName]
  edit: [pane: TabPaneName | undefined, action: 'add' | 'remove']
  tabRemove: [pane: TabPaneName]
  tabAdd: []
}
const eventsName = ['tabClick', 'tabChange', 'edit', 'tabRemove', 'tabAdd']

defineProps<HeaderTabsProps>()

const emits = defineEmits<HeaderTabsEvents>()

const forwardEvents = forwardEventsUtils(emits, eventsName)

const modelValue = defineModel()
</script>
<style scoped lang="scss">
.myTabs {
  :deep(.el-tabs__header) {
    @apply p-0 m-0 border-b-none;

    .el-tabs__nav {
      @apply border-none;
    }
  }

  :deep(.el-tabs__item) {
    height: 34px;
    margin-right: 5px;
    line-height: 34px;
    border: 1px solid var(--el-border-color) !important;
    border-radius: 4px;
    box-sizing: border-box;
    transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;

    &.is-active {
      color: var(--el-color-primary) !important;
      background: var(--el-color-primary-light-9) !important;
      border: 1px solid var(--el-color-primary) !important;
    }
  }
}
</style>