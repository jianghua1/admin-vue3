<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!-- 左右布局 -->
    <!-- 左边 -->
    <div
      :style="{ width: localSettings.collapse ? '64px' : `${menuWidth}px`, backgroundColor: settings?.backgroundColor }"
      class="h-full transition-width" v-if="settings?.mode !== 'top'">
      <el-row class="h-full">
        <el-scrollbar :class="[settings?.mode !== 'mixbar' ? 'flex-1' : 'w-[64px] py-4']"
          :style="{ backgroundColor: settings?.mode === 'mixbar' ? darken(settings?.backgroundColor, 0.1) : settings?.backgroundColor }">
          <!-- 一级菜单 -->
          <Menu :class="[{ mixbar: settings?.mode === 'mixbar' }]"
            v-if="settings?.mode === 'siderbar' || settings?.mode === 'mixbar'" :data="mixMenus"
            :collapse="settings?.mode !== 'mixbar' && localSettings.collapse" text-color="#b8b8b8"
            :background-color="settings?.mode === 'mixbar' ? 'transparent' : 'auto'">
          </Menu>
        </el-scrollbar>
        <el-scrollbar v-if="settings?.mode === 'mix' || settings?.mode === 'mixbar'" class="flex-1">
          <!-- 二级菜单 -->
          <Menu :data="getSubMenus(menus)" :collapse="localSettings.collapse" text-color="#b8b8b8"
            :background-color="settings?.backgroundColor"></Menu>
        </el-scrollbar>
      </el-row>
    </div>
    <!-- 右边 撑满右边的整个区域-->
    <div class="flex-1 h-full">
      <!-- header：主题、按钮、暗黑模式等 -->
      <Header1 :username="username" :src="avatar" :data="avatarMenu" @settings-change="handleSettingsChange"
        v-model:collapse="localSettings.collapse">
        <Menu v-if="settings?.mode === 'top' || settings?.mode === 'mix'" :data="menus" :collapse="false"
          text-color="#b8b8b8" mode="horizontal">
        </Menu>
      </Header1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto';
import type { AppRouteMenuItem } from '../components/Menu/types';
import type { DropDownMenuItem } from '../components/Avatar/types';
import type { HeaderProps } from '../components/layouts/types';
import type { ThemeSettingsProps } from '../components/Themes/types';
import { useMenu } from '../components/Menu/useMenu';
import { darken } from '@/utils'
import { routes } from 'vue-router/auto/routes'

// console.log('routes', routes)
interface ThemeSettingOptions extends HeaderProps {
  username: string,
  avatar: string,
  avatarMenu: DropDownMenuItem[]
}

const localSettings = reactive<ThemeSettingOptions>({
  username: 'toimc',
  //菜单折叠
  collapse: false,
  avatar: '',
  avatarMenu: [{ key: 1, value: '退出登陆' }],
  settings: {
    menuWidth: 280,
    backgroundColor: '#FF0000'
  } as ThemeSettingsProps
})

//对localSettings进行解构赋值
const { username, avatar, avatarMenu } = toRefs(localSettings)

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

const settings = computed(() => localSettings.settings)
//根据导航模式切换一级菜单数据
const mixMenus = computed(() => settings.value?.mode === 'mixbar' ? getTopMenus(menus.value) : menus.value)

const menuWidth = computed(() => localSettings.settings ? localSettings.settings.menuWidth : '240')

const { getTopMenus, getSubMenus } = useMenu()

const handleSettingsChange = (themeSettings: ThemeSettingsProps) => {
  localSettings.settings = themeSettings
}

</script>

<style lang="scss" scoped></style>
