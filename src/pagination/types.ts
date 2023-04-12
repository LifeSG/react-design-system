export interface PaginationsProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string | undefined;
    totalPages: number;
    activePage: number;
    showFirstAndLastNav?: boolean | undefined;
    onPageChange?: ((page: number) => void) | undefined;
}
