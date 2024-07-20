<template>
  <div>
    <el-dropdown trigger="click">
      <span>
        <Notification v-bind="$props"></Notification>
      </span>
      <template #dropdown>
        <Lists :lists="lists" :actions="actions" :wrap-class="wrapClass" :wrap-style="wrapStyle" v-bind="$attrs">
        </Lists>
      </template>
    </el-dropdown>

  </div>
</template>

<script setup lang='ts'>
import Lists from './NoticeMessageList.vue'
import Notification from './Notification.vue'
import { NoticeProps } from './types'

const props = defineProps<NoticeProps>()

const filterdProps = computed(() => {
  const { actions, lists, ...restProps } = props
  return [restProps]
})

</script>
<style scoped></style>