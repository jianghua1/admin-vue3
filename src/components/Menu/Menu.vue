<template>
  <el-menu v-bind="menuProps">
    <slot name="icon"></slot>
    <div class="flex-grow" v-if="isDefined(slots['icon'])" />
    <SubMenu v-for="(menu) in fileredMenus" :key="menu.path" :data="menu" :collapse="collapse" v-bind="subMenuProps">
    </SubMenu>
  </el-menu>
</template>
<script setup lang='ts'>
import type { MenuProps as ElMenuProps, SubMenuProps } from 'element-plus'
import type { AppRouteMenuItem } from './types'
import { useMenu } from './useMenu'

import { isDefined } from '@vueuse/core'

interface MenuProps extends Partial<ElMenuProps> {
  data: AppRouteMenuItem[]
  subMenuProps?: Partial<SubMenuProps>
}
const props = withDefaults(defineProps<MenuProps>(), {
  data: () => []
})
const slots = useSlots()

const { generateMenuKeys } = useMenu()

const fileredMenus = computed(() => {
  return generateMenuKeys(props.data)
})

const menuProps = computed(() => {
  const { subMenuProps, data, ...restProps } = props
  return restProps
})
</script>
<style scoped></style>