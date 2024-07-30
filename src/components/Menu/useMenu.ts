import type { AppRouteMenuItem } from './types'

export function useMenu() {
  function generateMenuKeys(menu: AppRouteMenuItem[], level = '0') {
    //首先过滤隐藏的菜单
    const filteredMenus = menu.filter((m) => !m.meta?.hideMenu)
    let i = 0
    filteredMenus.forEach((item) => {
      const key = level.indexOf('-') !== -1 ? `${level}-${i}` : `${i}`

      item.meta = {
        ...item.meta,
        key
      }
      if (item.children && item.children.length > 0) {
        return (item.children = generateMenuKeys(item.children, `${key}-`))
      }
      i++
    })
    return filteredMenus
  }
  function getIndex(item: AppRouteMenuItem): string {
    return `${item.meta?.key}`
  }
  function menuHasChildren(item: AppRouteMenuItem): boolean {
    return !item.meta?.hideMenu && Array.isArray(item.children) && item.children.length > 0
  }
  //这部是将函数名称暴漏出去
  return {
    generateMenuKeys,
    menuHasChildren,
    getIndex
  }
}
