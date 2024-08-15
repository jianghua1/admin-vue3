<template>
  <div class="w-full h-screen overflow-hidden flex">
    <!-- 左右布局 -->
    <div :style="{ width: mixMenuWidth, backgroundColor: settings?.backgroundColor }"
      class="h-full transition-width shrink-0" v-if="settings?.mode !== 'top'">
      <el-row class="h-full">
        <el-scrollbar v-if="settings?.mode !== 'mix'"
          :class="[settings?.mode !== 'mixbar' ? 'flex-1' : 'w-[64px] py-4']"
          :style="{ backgroundColor: settings?.mode === 'mixbar' ? darken(settings?.backgroundColor, 0.1) : settings?.backgroundColor }">
          <!-- 一级菜单 -->
          <Menu :class="[{ mixbar: settings?.mode === 'mixbar' }]"
            v-if="settings?.mode === 'siderbar' || settings?.mode === 'mixbar'" :data="mixMenus"
            :collapse="settings?.mode !== 'mixbar' && localSettings.collapse" text-color="#b8b8b8"
            :background-color="settings?.mode === 'mixbar' ? 'transparent' : 'auto'" @select="handleSelect">
          </Menu>
        </el-scrollbar>
        <el-scrollbar v-if="settings?.mode === 'mix' || settings?.mode === 'mixbar'" class="flex-1">
          <!-- 二级菜单 -->
          <Menu :data="getSubMenus(menus)" :collapse="localSettings.collapse" text-color="#b8b8b8"
            :background-color="settings?.backgroundColor" @select="handleSelect"></Menu>
        </el-scrollbar>
      </el-row>
    </div>
    <!-- 右边-->
    <div class="w-full h-full">
      <Header1 v-model:collapse="localSettings.collapse" :username="username" :src="avatar" :data="avatarMenu"
        :settings="settings" @settings-change="handleSettingsChange">
        <Menu v-if="settings?.mode === 'top' || settings?.mode === 'mix'" mode="horizontal"
          :data="settings?.mode === 'mix' ? getTopMenus(menus) : menus" :collapse="false" @select="handleSelect">
        </Menu>
      </Header1>
      <el-scrollbar>
        <router-view></router-view>
      </el-scrollbar>
    </div>
    <!-- 左侧菜单按钮抽屉组件 -->
    <el-drawer v-if="isMobile" class="w-full!" direction="ltr" :model-value="!localSettings.collapse"
      :style="{ backgroundColor: settings?.backgroundColor }" @close="localSettings.collapse = true">
      <Menu :data="menus" text-color="#b8b8b8" :background-color="settings?.backgroundColor" @select="handleSelect">
      </Menu>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto';
import type { AppRouteMenuItem, EmitSelectType } from '../components/Menu/types';
import type { DropDownMenuItem } from '../components/Avatar/types';
import type { HeaderProps } from '../components/layouts/types';
import type { ThemeSettingsProps } from '../components/Themes/types';
import { useMenu } from '../components/Menu/useMenu';
import { darken } from '@/utils'
import { routes } from 'vue-router/auto/routes'
import { useRouter } from 'vue-router';



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
    backgroundColor: '#FF0000',
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

//判断二级菜单的顶级是否所有菜单项都设置了Icon
const isFullIcon = computed(() => () => getSubMenus(menus.value).every((menu) => typeof menu.meta?.icon !== 'undefined' && menu.meta?.icon))
//混合左侧双菜单模式下的菜单宽度
const mixMenuWidth = computed(() => {
  if (isMobile.value)
    return 0
  if (settings.value?.mode === 'mixbar' && isFullIcon)
    return localSettings.collapse ? 'auto' : `${menuWidth.value}px`
  else
    return localSettings.collapse ? '64px' : `${menuWidth.value}px`
})

const { getTopMenus, getSubMenus } = useMenu()

const temWidth = ref(0)
const changeWidthFlag = ref(false);
const isMobile = ref(false);

useResizeObserver(document.body, (entries) => {
  const { width } = entries[0].contentRect
  //当中间变量宽度为0时，初始化宽度数据
  if (temWidth.value === 0)
    temWidth.value = width


  if (width > temWidth.value)
    //屏幕变大时
    //当屏幕还很小，我们不去折叠它已经展开的菜单
    changeWidthFlag.value = width < 640
  else
    //屏幕变小时
    //当屏幕还很大，我们不去打开它已经折叠起来的菜单
    changeWidthFlag.value = width > 1200

  if (width < 640 && !changeWidthFlag.value)
    localSettings.collapse = true
  if (width > 1200 && !changeWidthFlag.value)
    localSettings.collapse = false
  //若是移动端隐藏菜单
  isMobile.value = width < 440

  temWidth.value = width
})

onBeforeMount(() => {
  const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (mobile) {
    isMobile.value = true
    /**
     * isMobile是计算属性，所以当前函数逻辑是慢于常规菜单组件的展示速度的，
     * 所以移动端会出现黑色瞬间的遮罩，为了解决这个问题强制折叠按钮为true
     */
    localSettings.collapse = true
  }
})
const handleSettingsChange = (themeSettings: ThemeSettingsProps) => {
  localSettings.settings = themeSettings
}
const router = useRouter()
const handleSelect = (item: AppRouteMenuItem) => {
  if (item && item.name) {
    router.push(item.name as string)
    if (isMobile.value)
      localSettings.collapse = true
  }
}
</script>

<style lang="scss" scoped></style>
