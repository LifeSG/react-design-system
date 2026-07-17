// @storybookSection Table.Head
/**
 * Inherits props from [HTMLTableSectionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 */
export interface HeadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

// @storybookSection Table.Body
/**
 * Inherits props from [HTMLTableSectionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableSectionElement)
 */
export interface BodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

// @storybookSection Table.Row
/**
 * Inherits props from [HTMLTableRowElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement)
 */
export interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

// @storybookSection Table.Cell
/**
 * Inherits props from [HTMLTableCellElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 */
export interface CellProps
    extends React.TdHTMLAttributes<HTMLTableCellElement> {}

// @storybookSection Table.HeaderCell
/**
 * Inherits props from [HTMLTableCellElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableCellElement)
 */
export interface HeaderProps
    extends React.ThHTMLAttributes<HTMLTableCellElement> {}

// @storybookSection Table.Container
/**
 * Inherits props from [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// @storybookSection Table
/**
 * Inherits props from [HTMLTableElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement)
 */
export interface TableProps
    extends React.TableHTMLAttributes<HTMLTableElement> {}
