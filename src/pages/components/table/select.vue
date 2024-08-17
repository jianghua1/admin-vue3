<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="单选" name="1">
        <VTable @row-click="handleRowClick" :columns="fixedTableColumns" :data="fixedTableData" highlight-current-row>
        </VTable>
        <p>行点击回调内容</p>
        <p>{{ rowClickRef }}</p>
        <p>菜单点击回调内容</p>
        <p>{{ menuClickRef }}</p>
      </el-tab-pane>
      <el-tab-pane label="多选" name="2">
        <VTable ref="multipleTableRef" :columns="selectColumns" :data="tableData" highlight-current-row
          @selection-change="handleSelectionChange">
        </VTable>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">
            Toggle selection status of second and third rows
          </el-button>
          <el-button @click="toggleSelection()">Clear selection</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang='tsx'>

import type { TableColumnType } from "@/components/Table/types"
import type { ElTable } from "element-plus";

definePage({
  meta: {
    title: '单选表格',
    icon: 'mdi:message'
  }
})

const activeName = ref('1')
const rowClickRef = ref()
const menuClickRef = ref()
//单选的回调 三个参数： row，column，event
const handleRowClick = (...args: any) => {
  rowClickRef.value = args
}

const handleClick = (scope, opt: string) => {
  menuClickRef.value = scope.row + scope.column + opt
}

const fixedTableColumns = [
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '州', prop: 'state' },
  { label: '城市', prop: 'city' },
  { label: '地址', prop: 'address' },
  { label: '邮政编码', prop: 'zip' },
  { label: '标签', prop: 'tag' },
  {
    label: '操作', prop: 'operation', width: '120', fixed: 'right',
    defaultSlot: (_props) => (
      <>
        <el-button link type="primary" size="small" onClick={(e) => {
          e.stopPropagation();
          handleClick(_props, 'detail')
        }}>
          Detail
        </el-button>
        <el-button link type="primary" size="small" onClick={(e) => {
          e.stopPropagation();
          handleClick(_props, 'edit')
        }}>
          Edit
        </el-button>
      </>
    )
  }
] as TableColumnType[]


const fixedTableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]

//多选
interface User {
  date: string
  name: string
  address: string
}

const tableData: User[] = [
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
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const selectColumns = [
  { type: 'selection', width: '55' },
  { label: '日期', prop: 'date' },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
] as TableColumnType

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}


</script>
<style scoped></style>