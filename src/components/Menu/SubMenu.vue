<template>
  <menu-item :data="data" :collapse="collapse" v-if="!menuHasChildren(data)">
  </menu-item>
  <el-sub-menu :index="getIndex(data)" v-if="menuHasChildren(data)">
    <template #title v-if="!data.meta?.icon">{{ data.meta?.title }}</template>
    <template #title v-else>
      <Iconify :icon="data.meta?.icon"></Iconify>
      <span>{{ data.meta?.title }}</span>
    </template>
    <!-- data应该是子菜单的data -->
    <SubMenu v-for="child in data.children" :data="child" v-bind="subAttrs" :key="`${data.path}/${child.path}`">
    </SubMenu>
  </el-sub-menu>
</template>

<script setup lang='ts'>
import type { SubMenuProps as ElSubMenuProps } from 'element-plus'
import type { AppRouteMenuItem } from './types'
import { useMenu } from './useMenu'

interface SubMenuProps extends Partial<ElSubMenuProps> {
  data: AppRouteMenuItem
  collapse?: boolean
}
const props = defineProps<SubMenuProps>()
const { getIndex, menuHasChildren } = useMenu()
//对入参的解构赋值
const subAttrs = computed(() => {
  const { data, ...restProps } = props
  return restProps
})

</script>
<style scoped></style>