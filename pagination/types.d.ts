export interface PaginationProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    pageSize?: number | undefined;
    totalItems: number;
    activePage: number;
    pageSizeOptions?: PageSizeItemProps[] | undefined;
    showFirstAndLastNav?: boolean | undefined;
    showPageSizeChanger?: boolean | undefined;
    onPageChange?: ((page: number) => void) | undefined;
    onPageSizeChange?: ((page: number, pageSize: number) => void) | undefined;
}
export interface PageSizeItemProps {
    value: number;
    label: string;
}
