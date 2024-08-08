import type { ButtonType, Placement, PartialOptions, ButtonProps, AvatarProps } from 'element-plus'

export interface DropMenuProps {
  trigger?: 'click' | 'hover' | 'contextmenu'
  effect?: string
  type?: ButtonType
  placement?: Placement
  popperOptions?: Partial<PartialOptions>
  id?: string
  size?: string
  splitButton?: boolean
  hideOnClick?: boolean
  loop?: boolean
  showTimeout?: number
  hideTimeout?: number
  tabindex?: number | string
  maxHeight?: number | string
  popperClass?: string
  disabled?: boolean
  role?: string
  buttonProps?: ButtonProps
  teleported?: boolean
}
export type DropDownMenuItem = string | number | { key: string | number | object; value: string }

export interface AvatarMenuProps
  extends Partial<DropMenuProps>,
    Partial<Omit<AvatarProps, 'size'>> {
  //单独定义AvatarProps的size属性
  avatarSize: number | 'large' | 'default' | 'small'
  data: DropDownMenuItem[]
  username: string
}

// 这个写法会导致组件部分的属性设置不生效，虽然看着简单，但是并不好用
// import { dropdownProps } from 'element-plus';
// import type { ExtractPropTypes } from 'vue'

// type DropMenuProps = ExtractPropTypes<typeof dropdownProps>

// interface AvatarMenuProps extends /* @vue-ignore */ Partial<DropMenuProps> {

// }
