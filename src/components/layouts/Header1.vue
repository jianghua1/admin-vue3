<template>
  <el-row>
    <Iconify :icon="collapse ? 'ep:expand' : 'ep:fold'" class="text-xl cursor-pointer"></Iconify>
    <div class="flex-grow"></div>
    <el-row class="items-center">
      <!-- 这个settings是从HeaderProps中来的 -->
      <ThemeSetting v-bind="settings" @change="handleChange"></ThemeSetting>
      <DarkModeToggle class="mr-3"></DarkModeToggle>
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
  collapse: true
})
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
//依然是声明不是实现
const handleChange = (settings: ThemeSettingsProps) => emits('settingsChange', settings)
</script>
<style scoped></style>
