<template>
  <el-menu v-bind="menuProps" :style="{ '--bg-color': backgroundColor }" @select="handleSelect" @open="handleOpen"
    @close="handleClose">
    <slot name="icon"></slot>
    <div class="flex-grow" v-if="isDefined(slots['icon'])" />
    <sub-menu v-for="menu in fileredMenus" :key="menu.path" :data="menu" :collapse="collapse" v-bind="subMenuProps">
    </sub-menu>
  </el-menu>
</template>
<script setup lang='ts'>
import type { MenuProps as ElMenuProps, SubMenuProps } from 'element-plus'
import type { AppRouteMenuItem, IconOptions } from './types'
import { useMenu } from './useMenu'

import { isDefined } from '@vueuse/core'
import { provide } from 'vue';

interface MenuProps extends Partial<ElMenuProps> {
  data: AppRouteMenuItem[]
  subMenuProps?: Partial<SubMenuProps>
  iconProps?: Partial<IconOptions>
}
const props = withDefaults(defineProps<MenuProps>(), {
  data: () => [],
  iconProps: () => ({
    style: { fontSize: '22px' },
    class: 'mr-3'
  }),
  backgroundColor: 'bg-sky'
})
//初始化根组件的iconProps（icon的样式）
provide('iconProps', props.iconProps)

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