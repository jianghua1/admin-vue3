<template>
  <div>
    <p>示例的table</p>
    <VTable :columns="columns" :data="tableData"></VTable>
  </div>
</template>

<script setup lang='ts'>
import type { TableColumnType } from '@/components/Table/types';

definePage({
  meta: {
    title: '基础表格',
    icon: 'mdi:message'
  }
})

const columns = [
  {
    prop: 'date',
    label: '日期'
  },
  {
    prop: 'name',
    label: '姓名'
  },
  {
    prop: 'address',
    label: '地址'
  }
] as TableColumnType[]

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style scoped></style>