<template>
  <el-row>
    <Iconify :icon="collapse ? 'ep:expand' : 'ep:fold'" class="text-xl cursor-pointer"></Iconify>
    <div class="flex-grow"></div>
    <el-row class="items-center">
      <DarkModeToggle class="mr-3"></DarkModeToggle>
      <FullScreen></FullScreen>
      <!-- <el-divider></el-divider> -->
      <!-- 用户头像下拉菜单 -->
      <avatar-menu class="mr-4" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        avatar-size="small" :data="[{ key: 1, value: '个人中心' }, { key: 2, value: '退出登录' }]"
        username="烈焰邪神"></avatar-menu>
    </el-row>
  </el-row>
</template>

<script setup lang='ts'>
import Iconify from '../Icon/Iconify.vue'

interface HeaderProps {
  collapse: boolean
}
//初始化函数
withDefaults(defineProps<HeaderProps>(), {
  collapse: true
})
</script>
<style scoped></style>
