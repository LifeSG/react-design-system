/**
 * Props for the `Pagination` component.
 */
export interface PaginationProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    /**
     * Number of items displayed per page.
     *
     * @default 10
     */
    pageSize?: number | undefined;
    /**
     * Total number of items across all pages. Used to compute the total page count.
     */
    totalItems: number;
    /**
     * The currently active 1-based page number. This is a controlled prop;
     * update it in response to `onPageChange`.
     */
    activePage: number;
    /**
     * Options listed in the page-size changer dropdown.
     *
     * Only relevant when `showPageSizeChanger` is `true`.
     *
     * @default 10, 20, 30 per page
     */
    pageSizeOptions?: PageSizeItemProps[] | undefined;
    /**
     * When `true`, renders first-page and last-page navigation buttons
     * alongside the previous/next buttons.
     */
    showFirstAndLastNav?: boolean | undefined;
    /**
     * When `true`, renders a dropdown on desktop viewports to change the `pageSize`.
     *
     * @default false
     */
    showPageSizeChanger?: boolean | undefined;
    /**
     * Called when the user navigates to a different page.
     *
     * @param page The 1-based index of the newly selected page.
     */
    onPageChange?: ((page: number) => void) | undefined;
    /**
     * Called when the user selects a different page size from
     * the dropdown  and `showPageSizeChanger` is `true`.
     *
     * @param page The adjusted active page after the size change. If the current
     * `activePage` exceeds the new total page count, this value is capped to the
     * new last page.
     * @param pageSize The newly selected number of items per page.
     */
    onPageSizeChange?: ((page: number, pageSize: number) => void) | undefined;
}

/**
 * A single option in the page-size changer dropdown.
 */
export interface PageSizeItemProps {
    value: number;
    label: string;
}
