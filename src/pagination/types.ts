export interface PaginationsProps {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    className?: string;
    totalPages: number;
    activePage: number;
    boundaryRange?: number;
    siblingRange?: number;
    showFirstAndLastNav?: boolean;
    showJumper?: boolean;
    onPageChange?: (page: number) => void;
}
