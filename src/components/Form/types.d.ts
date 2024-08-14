import Iconify from '@/components/Icon/Iconify.vue'
import type { IconifyIcon } from '@iconify/vue'

/**
 * 适用于第三方登录
 */
export interface LoginItem {
  icon: IconifyIcon | string
  url: string
}
/**
 * 表单数据模型
 */
export interface LoginFormProps {
  position?: 'left' | 'center' | 'right'
  title?: string
  loginItems?: LoginItem[]
}

export interface LoginFormInterface {
  username: string
  password: string
  repassword: string
  phone: string
  email: string
  code: string
  remeber: boolean
}
