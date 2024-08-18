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
      <el-tab-pane label="排序" name="3">
        <VTable :columns="orderColumns" :data="tableData" :default-sort="{ prop: 'date', order: 'descending' }">
        </VTable>
      </el-tab-pane>
      <el-tab-pane label="过滤" name="4">
        <VTable :columns="filterColumns" :data="filterTableData" ref="filterTableRef">
        </VTable>
        <div>
          <el-button @click="resetDateFilter">reset date filter</el-button>
          <el-button @click="clearFilter">reset all filters</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="插槽" name="5">
        <VTable :columns="customColumns" :data="customTableData">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </VTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang='tsx'>

import type { TableColumnType } from "@/components/Table/types"
import type { ElTable } from "element-plus"


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
  console.log("handleRowClick", args)
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
  tag?: string
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
  }
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
//排序
const orderColumns = [
  { label: '日期', prop: 'date', sortOrders: true },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
]
//过滤
const filterHandler = (
  value: string,
  row: User,
  column: TableColumnType
) => {
  const property = column['property']
  return row[property as string] === value
}

const filterColumns = [
  {
    label: '日期', prop: 'date', filters: [
      { text: '2016-05-01', value: '2016-05-01' },
      { text: '2016-05-02', value: '2016-05-02' },
      { text: '2016-05-03', value: '2016-05-03' },
      { text: '2016-05-04', value: '2016-05-04' },
    ],
    'filterMethod': filterHandler,
    columnKey: 'date',
    sortable: true
  },
  { label: '姓名', prop: 'name' },
  { label: '地址', prop: 'address' },
  {
    label: '标签', prop: 'tag', filterMethod: (value, row) => {
      return row.tag === value
    }, filters: [
      { text: 'old', value: 'old' }, { text: 'new', value: 'new' }
    ]
  }
]

const filterTableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'new' // add a new property called 'tag'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'old'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'old'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'old'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'old'
  }
]

const filterTableRef = ref()

const resetDateFilter = () => {
  filterTableRef.value!.clearFilter(['date'])
}

const clearFilter = () => {
  filterTableRef.value!.clearFilter()
}
import Popover from "./components/Popover.vue"
import { Timer } from '@element-plus/icons-vue';
import { Clock } from '@element-plus/icons-vue';
// 自定义列模板
const customColumns = [
  {
    label: 'date',
    defaultSlot: (scope: any) => (
      <>
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left:5px">{scope.row.date}</span>
        </div>
      </>
    )
  },
  {
    label: 'name',
    defaultSlot: (scope: any) => {
      const { row } = scope
      return h(Popover, {
        props: row
      })
    }
  }
] as TableColumnType[]

const customTableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

</script>
<style scoped></style>