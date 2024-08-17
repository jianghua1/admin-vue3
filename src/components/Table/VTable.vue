<template>
  <el-table v-bind="props" v-on="events" style="width: 100%">
    <Column v-for="(column, index) in columns" :key="index" v-bind="column">
    </Column>
    <slot></slot>
  </el-table>
  <div v-if="isDefined(pagination)" :class="['p-2 flex', paginationClass]">
    <el-pagination v-bind="pagination" />
  </div>
</template>

<script lang="ts" setup>
import type { TableEventsType, VTableProps } from './types';
import { isDefined } from '@vueuse/core';
import Column from './VTableColumn.vue';
import { forwardEventsUtils } from '@/utils'

const props = withDefaults(defineProps<VTableProps>(), {
  pagination: () => ({
    align: 'center',
    small: false,
    background: false,
    layout: 'total, prev, pager, next, jumper',
    pagerCount: 7,
    pageSizeOptions: [10, 20, 30, 40, 50],
    modelValue: 10,
    total: 300
  }),
  stripe: false,
  border: false,
  fit: true,
  showHeader: true,
  highlightCurrentRow: false,
  emptyText: '暂无数据',
  defaultExpandAll: false,
  tooltipEffect: 'dark',
  showSummary: false,
  flexible: false,
  selectOnIndeterminate: true,
  indent: 16,
  tableLayout: 'fixed',
  scrollbarAlwaysOn: true
})
//集中定义table组件的emits
const emits = defineEmits<TableEventsType>()
//emits的事件名称虽然是驼峰，这里是-，但是在内部vue是有这个处理能力的，所以这里不处理是可以的
const eventsName: (keyof TableEventsType)[] = [
  'select',
  'select-all',
  'selection-change',
  'cell-mouse-enter',
  'cell-mouse-leave',
  'cell-click',
  'cell-dblclick',
  'cell-contextmenu',
  'row-click',
  'row-contextmenu',
  'row-dblclick',
  'header-click',
  'header-contextmenu',
  'sort-change',
  'filter-change',
  'current-change',
  'header-dragend',
  'expand-change',
];


const events = forwardEventsUtils(emits, eventsName)

const paginationClass = computed(() => {
  let defaultClass = 'justify-center'
  if (props.pagination && props.pagination.align) {
    if (props.pagination.align === 'left') {
      defaultClass = 'justify-start'
    }
    if (props.pagination.align === 'right') {
      defaultClass = 'justify-end'
    }
  }
  return defaultClass
})

</script>
