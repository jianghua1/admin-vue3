<template>
  <el-row class="items-center flex-nowrap w-full w-[50px]">
    <Iconify v-if="settings?.mode !== 'top'" :icon="collapseModel ? 'ep:expand' : 'ep:fold'"
      class="text-xl cursor-pointer" @click="collapseModel = !collapseModel"></Iconify>
    <div class="relative overflow-x-hidden w-full">
      <slot></slot>
    </div>
    <el-row class="items-center flex-nowrap">
      <!-- 这个settings是从HeaderProps中来的 -->
      <ThemeSetting v-bind="settings" @change="handleChange"></ThemeSetting>
      <DarkModeToggle :dark="settings?.darkMode" @change="handleDarkModeToggle" class="mr-3"></DarkModeToggle>
      <FullScreen></FullScreen>
      <!-- 用户头像下拉菜单 如果没有设置昵称或用户头像，那么就不展示了-->
      <avatar-menu v-if="username || src" class="mr-4" v-bind="avatarProps"></avatar-menu>
    </el-row>
  </el-row>
</template>

<script setup lang='ts'>
import Iconify from '../Icon/Iconify.vue'
import type { ThemeSettingsProps } from '../Themes/types';
import type { HeaderProps } from './types';

//初始化函数
const props = withDefaults(defineProps<HeaderProps>(), {
})
const collapseModel = defineModel('collapse', {
  default: false,
})

//将主题设置的setting保存一份在当前组件中
const localProps = reactive({ ...props })

//为了解决头像组件，参数太多的问题，这里使用结构赋值
const avatarProps = computed(() => {
  const { collapse, ...restProps } = props;
  return restProps;
})
const emits = defineEmits<{
  menuChange: [command: string | number | object],
  settingsChange: [settings: ThemeSettingsProps]
}>()

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
//依然是声明不是实现
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
