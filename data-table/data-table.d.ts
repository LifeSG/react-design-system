import type { DataTableProps } from "./types";
/**
 * Renders a sortable, selectable data table with scroll-aware action bar and loading state support.
 *
 * Use `DataTable` when presenting structured multi-column data that users may need to sort by
 * column or select rows for bulk actions. Row selection, sort indicators, and the action bar
 * content are all externally controlled; the component manages scroll detection, sticky-header
 * positioning, and floating action bar behaviour internally.
 */
export declare const DataTable: ({ id, headers, rows, className, sortIndicators, alternatingRows, loadState, enableMultiSelect, selectedIds, disabledIds, enableActionBar, enableSelectAll, enableStickyHeader, emptyView, actionBarContent, renderCustomEmptyView, onHeaderClick, onSelect, onSelectAll, onClearSelectionClick, ...otherProps }: DataTableProps) => import("react/jsx-runtime").JSX.Element;
