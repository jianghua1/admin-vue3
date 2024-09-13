<template>
  <div :class="['flex items-center flex-nowrap h-[50px] z-100 bg-white dark:bg-dark']">
    <VpIconify :icon="collapseModel ? 'ep:expand' : 'ep:fold'" class="ml-2 text-2xl cursor-pointer"
      @click="collapseModel = !collapseModel" v-if="settings?.mode !== 'top'" v-show="showCollapse"></VpIconify>
    <VpBreadcrumb v-if="!['mix', 'top'].includes(settings?.mode || '')"></VpBreadcrumb>
    <div class="relative overflow-x-hidden flex-grow">
      <slot></slot>
    </div>
    <el-row class="items-center flex-nowrap">
      <VpThemeSettings v-bind="settings" @change="handleChange"></VpThemeSettings>
      <VpDarkModeToggle :dark="settings?.darkMode" @change="handleDarkModeToggle" class="mr-2"></VpDarkModeToggle>
      <VpFullScreen class="mr-2"></VpFullScreen>
      <el-divider direction="vertical"></el-divider>
      <!-- 用户头像下拉菜单 -->
      <VpAvatarMenu v-if="username || src" class="mr-4" v-bind="avatarProps" @command="handleCommand"></VpAvatarMenu>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import type { ThemeSettingsProps } from './types'
import type { HeaderProps } from './types'

const props = withDefaults(defineProps<HeaderProps>(), {
  collapse: false,
  showCollapse: true
})

const collapseModel = defineModel('collapse', {
  default: false
})

const localProps = reactive({ ...props })

const emits = defineEmits<{
  menuChange: [arg: string | number | object]
  settingsChange: [settings: ThemeSettingsProps]
}>()

const avatarProps = computed(() => {
  const { collapse, settings, ...restProps } = props
  return restProps
})

const handleCommand = (command: string | number | object) => emits('menuChange', command)

watch(
  () => localProps.settings,
  () => {
    emits('settingsChange', localProps.settings!)
  },
  {
    deep: true
  }
)

// 获取菜单设置
const handleChange = (settings: ThemeSettingsProps) => {
  localProps.settings = settings
  // emits('settingsChange', localProps.settings)
}
const handleDarkModeToggle = (dark: boolean) => {
  localProps.settings!.darkMode = dark
  // emits('settingsChange', localProps.settings!)
}
</script>

<style scoped></style>
