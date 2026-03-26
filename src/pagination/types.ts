/**
 * Props for the Pagination component - page navigation control.
 *
 * Renders page number buttons and optional first/last navigation, with an
 * optional page-size dropdown. Requires `totalItems` and `activePage` to
 * be controlled by the parent.
 *
 * @example
 * ```tsx
 * <Pagination
 *     totalItems={200}
 *     activePage={currentPage}
 *     onPageChange={(page) => setCurrentPage(page)}
 * />
 * ```
 * @keywords pager, page numbers, next previous, paging control, results navigation
 */
export interface PaginationProps {
    /** The unique id attribute of the component. */
    id?: string | undefined;
    /** The test identifier for the component. */
    "data-testid"?: string | undefined;
    /** CSS class selector for the component. */
    className?: string | undefined;
    /**
     * The number of items displayed per page.
     *
     * @default 10
     */
    pageSize?: number | undefined;
    /** The total number of items across all pages. */
    totalItems: number;
    /** The currently active page number (1-based). */
    activePage: number;
    /** The list of page-size options shown in the page-size dropdown. */
    pageSizeOptions?: PageSizeItemProps[] | undefined;
    /**
     * When `true`, shows first and last page navigation buttons.
     *
     * @default false
     */
    showFirstAndLastNav?: boolean | undefined;
    /**
     * When `true`, shows a page size changer dropdown on desktop.
     *
     * @default false
     */
    showPageSizeChanger?: boolean | undefined;
    /** Called when the user selects a page number. */
    onPageChange?: ((page: number) => void) | undefined;
    /**
     * Called when the user selects a page size.
     *
     * @param page - Reset page (typically 1).
     * @param pageSize - The newly selected page size.
     */
    onPageSizeChange?: ((page: number, pageSize: number) => void) | undefined;
}

export interface PageSizeItemProps {
    value: number;
    label: string;
}
