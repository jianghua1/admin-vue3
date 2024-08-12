<template>
  <el-menu v-bind="menuProps" :style="{ '--bg-color': backgroundColor }" class="border-r-0!" @select="handleSelect"
    @open="handleOpen" @close="handleClose">
    <slot name="icon"></slot>
    <div class="flex-grow" v-if="isDefined(slots['icon'])" />
    <sub-menu v-for="menu in fileredMenus" :key="menu.path" :data="menu" :collapse="collapse" v-bind="subMenuProps">
    </sub-menu>
  </el-menu>
</template>
<script setup lang='ts'>
import type { MenuProps as ElMenuProps, SubMenuProps } from 'element-plus'
import type { AppRouteMenuItem, EmitSelectType, IconOptions, OpenCloseType } from './types'
import type { NavigationFailure } from 'vue-router';

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
  backgroundColor: 'transparent'
})
//当折叠时，iconProps中的样式要发生改变
const iconProps = reactive(props.iconProps)

watch(
  () => props.collapse,
  () => {
    iconProps.class = props.collapse ? '' : 'mr-3'
  }
)

//初始化根组件的iconProps（icon的样式）
provide('iconProps', props.iconProps)

const slots = useSlots()

const { generateMenuKeys, getItem } = useMenu()

const fileredMenus = computed(() => {
  return generateMenuKeys(props.data)
})

const menuProps = computed(() => {
  const { subMenuProps, data, ...restProps } = props
  return restProps
})

const emits = defineEmits<{
  select: [item: AppRouteMenuItem],
  open: OpenCloseType,
  close: OpenCloseType
}>()

const handleOpen = (...args: OpenCloseType) => {
  emits('open', ...args)
}

const handleClose = (...args: OpenCloseType) => {
  emits('close', ...args)
}

const handleSelect = (...args: EmitSelectType) => {
  const [index] = args
  const item = getItem(fileredMenus.value, index)
  if (!item) return
  emits('select', item)
}

</script>
<style lang="scss" scoped>
:deep(.el-sub-menu__title) {
  padding-right: 0 !important;
}
</style>