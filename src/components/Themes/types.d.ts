export interface ThemeSettingsProps {
  theme: string
  darkMode: boolean
  menuWidth?: number
  showLogo: boolean
  showTabs: boolean
  fixedHead: boolean
  showBreadcrumb: boolean
  mode: 'siderbar' | 'mix' | 'top' | 'mixbar'
  backgroundColor: string
}
