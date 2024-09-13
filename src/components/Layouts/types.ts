import type { TabsProps, TabsPaneContext } from 'element-plus'
import type { LocaleItem } from '../Themes/types'
import type { AvatarMenuProps } from '../Avatar/types'
import type { ThemeSettingsProps } from '../Themes/types'
import type { AppRouteMenuItem } from '../Menu/types'
import { TabActions } from './const'

export interface HeaderProps extends Partial<AvatarMenuProps> {
  collapse: boolean
  showCollapse?: boolean
  // availableLocales: string[]
  settings?: ThemeSettingsProps
}

export interface HeaderTabsProps extends Partial<TabsProps> {
  data: AppRouteMenuItem[]
}

export type TabPaneName = string | number

export type HeaderTabsEvents = {
  tabClick: [pane: TabsPaneContext, ev: Event]
  tabChange: [name: TabPaneName]
  edit: [paneName: TabPaneName | undefined, action: 'remove' | 'add']
  tabRemove: [name: TabPaneName]
  tabAdd: []
  tabMenuClick: [action: TabActions]
}

export interface ThemeSettingsProps {
  theme: string
  backgroundColor: string
  darkMode: boolean
  menuWidth?: number
  showLogo: boolean
  showTabs: boolean
  fixedHead: boolean
  showBreadcrumb: boolean
  mode: 'siderbar' | 'mix' | 'top' | 'mixbar'
  transition: TransitionNameEnum
}

export enum TransitionNameEnum {
  Fade = 'Fade',
  Scale = 'Scale',
  SlideY = 'SlideY',
  ScrollY = 'ScrollY',
  SlideYReverse = 'SlideYReverse',
  ScrollYReverse = 'ScrollYReverse',
  SlideX = 'SlideX',
  ScrollX = 'ScrollX',
  SlideXReverse = 'SlideXReverse',
  ScrollXReverse = 'ScrollXReverse',
  ScaleRotate = 'ScaleRotate'
}
