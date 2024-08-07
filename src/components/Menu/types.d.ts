import type { IconifyIcon } from '@iconify/vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<T>)
  | (() => Promise<typeof import('*.vue')>)

export interface AppRouteMenuItem {
  // 菜单名（别名）
  name?: string | Symbol
  meta?: RouteMeta
  children?: AppRouteMenuItem[]
  alias?: string
  path: string
  component?: Component
}

export interface RouteMeta extends Record<string | number | symbol, unknown> {
  layout?: string
  // 菜单的组件名
  title?: string
  // 菜单排序
  order?: number
  icon?: string | IconifyIcon
  hideMenu?: boolean
  disabled?: boolean
  // key: string
}

//控制icon的基础样式
export interface IconOptions {
  style: CSSProperties
  class: string
}
