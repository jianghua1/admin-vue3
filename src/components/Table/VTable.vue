<template>
  <el-table v-bind="props" v-on="events" style="width: 100%" ref="tableRef">
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
import { forwardEventsUtils, exposeEventUtils } from '@/utils'

const props = withDefaults(defineProps<VTableProps>(), {
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

const tableRef = ref()
const exposeEventNames = [
  "clearSelection",
  "getSelectionRows",
  "toggleRowSelection",
  "toggleAllSelection",
  "toggleRowExpansion",
  "setCurrentRow",
  "clearSort",
  "clearFilter",
  "doLayout",
  "sort",
  "scrollTo",
  "setScrollTop",
  "setScrollLeft",
  "columns"
]

const events = forwardEventsUtils(emits, eventsName)
const exposes = exposeEventUtils(tableRef, exposeEventNames)

defineExpose({
  ...exposes
})
/**
 * element plus表格组件的Table Exposes都是针对el-table标签的，但是由于组件封装所有的Exposes
 * 都要写到VTable上，为了能让Exposes穿过VTable作用到el-table上，所以在这里动态生成一组Exposes
 */


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
