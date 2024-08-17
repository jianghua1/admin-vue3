import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'

export interface TableColumnType extends TableColumnCtx<any> {
  defaultSlot?: typeof Component
  headerSlot?: typeof Component
  children?: TableColumnType[]
}

export interface PaginationType extends Partial<PaginationProps> {
  align?: 'center' | 'left' | 'right'
  total: number
}

export interface VTableProps extends TableProps<any> {
  columns: TableColumnType[]
  pagination?: PaginationType
}
