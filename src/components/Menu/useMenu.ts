import type { AppRouteMenuItem } from './types'

export function useMenu() {
  function generateMenuKeys(menu: AppRouteMenuItem[], level = '0') {
    //过滤被隐藏的菜单
    const filteredMenus = menu
      .filter((m) => !m.meta?.hideMenu)
      .sort((a, b) => {
        const orderA = a.meta?.order ?? 100
        const orderB = b.meta?.order ?? 100
        return orderA - orderB
      })
    console.log('filteredMenus', filteredMenus)
    let i = 1
    filteredMenus.forEach((item) => {
      //通过index中是否存在-来判断是否是第一级菜单
      const key = level.indexOf('-') !== -1 ? `${level}-${i}` : `${i}`

      item.meta = {
        ...item.meta,
        key
      }
      i++
      //如存在子菜单，则递归调用当前方法
      if (item.children && item.children.length > 0) {
        return (item.children = generateMenuKeys(item.children, `${key}-`))
      }
    })
    return filteredMenus
  }

  function getIndex(item: AppRouteMenuItem): string {
    return `${item.meta?.key}`
  }

  function menuHasChildren(item: AppRouteMenuItem): boolean {
    //有子菜单的判断：当前菜单没有被隐藏，当前菜单的children属性是数组，并且数组内容不为空
    return !item.meta?.hideMenu && Array.isArray(item.children) && item.children.length > 0
  }
  //是将函数名称暴漏出去
  return {
    generateMenuKeys,
    menuHasChildren,
    getIndex
  }
}
