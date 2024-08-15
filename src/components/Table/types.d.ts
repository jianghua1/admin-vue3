import type { PaginationProps, TableColumnCtx, TableProps } from 'element-plus'

export type TableColumnType = TableColumnCtx<any>

export interface PaginationType extends Partial<PaginationProps> {
  align: 'center' | 'left' | 'right'
  total: number
}

export interface VTableProps extends TableProps<any> {
  columns: TableColumnType[]
  pagination: PaginationType
}
