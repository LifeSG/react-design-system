export interface PaginationsProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    totalSize?: number | undefined;
    totalItems: number;
    activePage: number;
    showFirstAndLastNav?: boolean | undefined;
    onPageChange?: ((page: number) => void) | undefined;
}
