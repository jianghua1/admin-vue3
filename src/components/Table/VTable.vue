<template>
  <el-table v-bind="props" style="width: 100%">
    <el-table-column v-for="(column, index) in columns" :key="index" v-bind="column"></el-table-column>
  </el-table>
  <div :class="['p-2 flex', paginationClass]">
    <el-pagination v-bind="pagination" />
  </div>
</template>

<script lang="ts" setup>
import type { VTableProps } from './types';

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
