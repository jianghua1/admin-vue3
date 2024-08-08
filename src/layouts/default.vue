<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!-- 左右布局 -->
    <!-- 左边 -->
    <div :style="{ width: typeof menuWidth === 'number' ? `${menuWidth}px` : menuWidth }" class="h-full bg-sky">
      <el-scrollbar>
        <!-- 菜单 -->
        <Menu :data="menus"></Menu>
      </el-scrollbar>
    </div>
    <!-- 右边 撑满右边的整个区域-->
    <div class="flex-1 h-full">
      <!-- header：主题、按钮、暗黑模式等 -->
      <Header1></Header1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppRouteMenuItem } from '@/components/Menu/types';
import type { RouteRecordRaw } from 'vue-router/auto';
import { routes } from 'vue-router/auto/routes'

console.log('routes', routes)
interface ThemeSetting {
  menuWidth: number | string
}

//初始化函数
withDefaults(defineProps<ThemeSetting>(), {
  menuWidth: 240
})

function generateMenuData(routes: RouteRecordRaw[]): AppRouteMenuItem[] {
  /**
   * 将route中的属性添加到menuData中，形成我们自己的路由元数据，元数据的标准是既能够满足
   * route的要求，又带有我们自己的属性，方便我们开发route组件所不具有的功能
   **/
  const menuData: AppRouteMenuItem[] = []
  routes.forEach((route) => {
    //构建临时变量
    let menuItem: AppRouteMenuItem = {
      path: route.path,
      name: route.name,
      meta: route.meta,
      alias: typeof route.redirect === 'string' ? route.redirect : undefined,
      component: route.component
    }
    //若存在children属性进行递归操作
    if (route.children && Array.isArray(route.children) && route.children.length > 0) {
      menuItem.children = generateMenuData(route.children)
    }
    //将路由添加到数组内
    menuData.push(menuItem)
  })
  return menuData
}

//生成菜单的逻辑
const menus = computed(() => generateMenuData(routes))
</script>

<style scoped></style>
