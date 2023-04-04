export interface PaginationsProps extends React.AriaAttributes {
    id?: string | undefined;
    "data-testid"?: string | undefined;
    totalPages: number;
    activePage: number;
    boundaryRange?: number;
    siblingRange?: number;
    showFirstAndLastNav?: boolean;
    showJumper?: boolean;
    onPageChange?: (page: number) => void;
}
