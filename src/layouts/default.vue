<template>
  <div class="position-absolute left-0 top-0 w-full h-full overflow-hidden flex"
    :style="{ '--el-color-primary': settings?.theme }">
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
            :background-color="settings?.mode === 'mixbar' ? 'transparent' : 'auto'" @select="handleSelect"
            :active-text-color="settings?.theme">
          </Menu>
        </el-scrollbar>
        <el-scrollbar v-if="settings?.mode === 'mix' || settings?.mode === 'mixbar'" class="flex-1">
          <!-- 二级菜单 -->
          <Menu :data="getSubMenus(menus)" :collapse="localSettings.collapse" text-color="#b8b8b8"
            :background-color="settings?.backgroundColor" @select="handleSelect" :active-text-color="settings?.theme">
          </Menu>
        </el-scrollbar>
      </el-row>
    </div>
    <!-- 右边-->
    <div :class="['relative w-full h-full flex-1 overflow-hidden']">
      <div class="overflow-y-auto h-full">
        <keep-alive>
          <component>
            <Header1 v-model:collapse="localSettings.collapse" :username="username" :avatarSize="avatarSize"
              :src="avatar" :data="avatarMenu" :settings="settings" @settings-change="handleSettingsChange">
              <Menu v-if="settings?.mode === 'top' || settings?.mode === 'mix'" mode="horizontal"
                :data="settings?.mode === 'mix' ? getTopMenus(menus) : menus" :collapse="false" @select="handleSelect"
                :active-text-color="settings?.theme">
              </Menu>
            </Header1>
            <HeaderTabs v-if="settings?.showTabs" :data="tabsStore.tabs" @tab-click="handleTabClick"
              @tab-remove="handleTabRemove" @tab-menu-click="handleTabMenuClick" v-model="tabsStore.current">
            </HeaderTabs>
            <div :class="['p-2 bg', contentClass]">
              <el-scrollbar>
                <router-view v-slot="{ Component }">
                  <Transition :name="camelToHyphen(settings?.transition || 'fade') + '-transition'" mode="out-in">
                    <component :is="Component" :key="$route.fullPath" class="rounded bg-white shadow p-4"></component>
                  </Transition>
                </router-view>
              </el-scrollbar>
            </div>
          </component>
        </keep-alive>
      </div>
      <!-- 左侧菜单按钮抽屉组件 -->
      <el-drawer v-if="isMobile" class="w-full!" direction="ltr" :model-value="!localSettings.collapse"
        :style="{ backgroundColor: settings?.backgroundColor }" @close="localSettings.collapse = true">
        <Menu :data="menus" text-color="#b8b8b8" :background-color="settings?.backgroundColor" @select="handleSelect"
          :active-text-color="settings?.theme">
        </Menu>
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router/auto';
import type { AppRouteMenuItem, EmitSelectType } from '../components/Menu/types';
import type { DropDownMenuItem } from '../components/Avatar/types';
import type { HeaderProps } from '../components/layouts/types';
import { TabActions } from '../components/layouts/types';
import type { ThemeSettingsProps } from '../components/Themes/types';
import { useMenu } from '../components/Menu/useMenu';
import { darken, camelToHyphen } from '@/utils'
import { routes } from 'vue-router/auto/routes'
import { useRouter } from 'vue-router';
import { ElScrollbar } from 'element-plus'
import { useTabsStore } from '@/store/tabs'

// console.log('routes', routes)
interface ThemeSettingOptions extends HeaderProps {
  username: string,
  avatar: string,
  avatarSize: number | 'large' | 'default' | 'small',
  avatarMenu: DropDownMenuItem[]
}

const localSettings = reactive<ThemeSettingOptions>({
  username: 'toimc',
  //菜单折叠
  collapse: false,
  avatar: '',
  avatarSize: 16,
  avatarMenu: [{ key: 1, value: '退出登陆' }],
  settings: {
    menuWidth: 280,
    backgroundColor: '#FF0000',
  } as ThemeSettingsProps
})

//对localSettings进行解构赋值
const { username, avatarSize, avatar, avatarMenu } = toRefs(localSettings)

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
const changeWidthFlag = ref(false)
const isMobile = ref(false)
const route = useRoute()
const tabsStore = useTabsStore()

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

const contentClass = computed(() => {
  if (settings.value?.fixedHead) {
    if (settings.value?.showTabs) {
      return 'h-[calc(100%-90px)]'
    } else {
      return 'h-[calc(100%-50px)]'
    }
  } else {
    if (settings.value?.showTabs) {
      return 'min-h-[calc(100%-90px)]'
    } else {
      return 'min-h-[calc(100%-50px)]'
    }
  }
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

watch(route, () => {
  tabsStore.addRoute(route)
  tabsStore.current = route.name as string
}, { immediate: true })

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

const handleTabClick = (tab) => {
  const { index } = tab
  const route = tabsStore.tabs[index]
  router.push(route.name as string)
}

const handleTabRemove = (tab) => {
  tabsStore.removeRoute(tab as string)
  //若删除的标签页就是当前正在展示的，那么还要给一个默认展示的
  if (tabsStore.current === tab) {
    if (tabsStore.tabs.length !== 0) {
      tabsStore.current = tabsStore.tabs[0].name as string
    }
    else {
      const temRoute = menus.value.filter((menu) => menu.path === '/')[0]
      tabsStore.addRoute(temRoute)
      tabsStore.current = temRoute.name as string
    }
    router.push(tabsStore.current)
  }
}

const handleTabMenuClick = (action: TabActions) => {
  //当前页面的index属性
  const index = tabsStore.tabs.findIndex((item) => item.name === tabsStore.current)
  console.log(action)
  if (action === TabActions.closeAll) {
    tabsStore.tabs = []
    const temRoute = menus.value.filter((menu) => menu.path === '/')[0]
    tabsStore.addRoute(temRoute)
    tabsStore.current = temRoute.name as string
  }
  else if (action === TabActions.closeLeft) {
    tabsStore.tabs = tabsStore.tabs.slice(index, tabsStore.tabs.length - 1)
  }
  else if (action === TabActions.closeRight) {
    tabsStore.tabs = tabsStore.tabs.slice(0, index + 1)
  }
  else if (action === TabActions.closeOthers) {
    tabsStore.tabs = [tabsStore.tabs[index]]
  }
  router.push(tabsStore.current)
}
</script>

<style lang="scss" scoped>
.bg {
  background-color: var(--el-fill-color-light)
}

:deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
