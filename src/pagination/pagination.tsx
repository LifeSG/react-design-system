import { PaginationsProps } from "./types";
import {
    EllipsisItem,
    InputView,
    Item,
    Label,
    Link,
    Page,
    PaginationJumper,
    PaginationList,
    PaginationMenu,
    PaginationWrapper,
} from "./pagination.styles";
import {
    ChevronLeftIcon,
    ChevronLineLeftIcon,
    ChevronLineRightIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
} from "@lifesg/react-icons";

export const Pagination = ({
    id,
    "data-testid": dataTestId,
    totalPages,
    activePage,
    boundaryRange,
    siblingRange,
    showFirstAndLastNav,
    showJumper,
    onPageChange,
    ...otherProps
}: PaginationsProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const firstPaginationItem =
        activePage > 1 ? () => handlePaginationItemOnClick(1) : undefined;
    const lastPaginationItem =
        activePage < totalPages
            ? () => handlePaginationItemOnClick(totalPages)
            : undefined;
    const prevPaginationItem =
        activePage > 1
            ? () => handlePaginationItemOnClick(activePage - 1)
            : undefined;
    const nextPaginationItem =
        activePage < totalPages
            ? () => handlePaginationItemOnClick(activePage + 1)
            : undefined;
    const prevChevronClass = prevPaginationItem ? "" : "disabled";
    const nextChevronClass = nextPaginationItem ? "" : "disabled";

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemOnClick = (pageIndex: number) => {
        if (onPageChange) {
            const resultsHeading = document.getElementsByClassName(
                "paginated-list-results"
            )[0];
            if (resultsHeading) {
                resultsHeading.scrollIntoView();
            }
            onPageChange(pageIndex);
        }
    };

    const handleJumperInput = (event) => {
        if (
            ((event.type === "keypress" && event.key === "Enter") ||
                event.type === "blur") &&
            onPageChange
        ) {
            const jumperInputVal = event.target.value;
            const numericPattern = /^-?\d+$/;
            if (numericPattern.test(jumperInputVal)) {
                const redirectPageIndex: number = Math.max(
                    1,
                    Math.min(totalPages, Number(jumperInputVal))
                );
                onPageChange(redirectPageIndex);
            }
            event.target.value = "";
        }
    };
    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const paginationItemList = [...Array(totalPages)].map((e, i) => {
        const pageIndex = i + 1;
        const paginationItemClass =
            activePage === pageIndex ? "item active" : "item";
        const boundaryRangeLocal =
            boundaryRange && boundaryRange > 0 ? boundaryRange : 1;
        const siblingRangeLocal =
            siblingRange && siblingRange >= 0 ? siblingRange : 0;
        const startRangeLocal = boundaryRangeLocal + 2 + siblingRangeLocal * 2;
        const endRange = totalPages - startRangeLocal;
        const totalRange = (boundaryRangeLocal + siblingRangeLocal) * 2 + 3;
        const active = activePage === pageIndex;
        if (totalPages <= totalRange) {
            return (
                <Item
                    key={pageIndex}
                    type="pageItem"
                    className={paginationItemClass}
                    aria-label="Pagination Item"
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    data-value={pageIndex}
                    $selected={active}
                >
                    {pageIndex}
                </Item>
            );
        }

        const ellipsisStart =
            activePage + siblingRangeLocal > startRangeLocal &&
            pageIndex === boundaryRangeLocal + 1;
        const ellipsisEnd =
            activePage - siblingRangeLocal <= endRange &&
            pageIndex === totalPages - boundaryRangeLocal - 1;

        if (ellipsisStart || ellipsisEnd) {
            return (
                <EllipsisItem
                    aria-label="Ellipsis"
                    key={pageIndex}
                    className="ellipsis-item"
                >
                    <EllipsisHorizontalIcon className="pagination-ellipsisH" />
                </EllipsisItem>
            );
        }

        const paginationStart =
            (pageIndex <= startRangeLocal &&
                activePage + siblingRangeLocal <= startRangeLocal) ||
            pageIndex <= boundaryRangeLocal;
        const paginationMiddle =
            pageIndex === activePage ||
            (pageIndex <= activePage + siblingRangeLocal &&
                pageIndex >= activePage - siblingRangeLocal);
        const paginationEnd =
            (pageIndex > endRange &&
                activePage - siblingRangeLocal > endRange) ||
            pageIndex > totalPages - boundaryRangeLocal;
        if (paginationStart || paginationMiddle || paginationEnd) {
            return (
                <Item
                    key={pageIndex}
                    type="pageItem"
                    className={paginationItemClass}
                    aria-label="Pagination Item"
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    data-value={pageIndex}
                    $selected={active}
                >
                    {pageIndex}
                </Item>
            );
        }

        return null;
    });

    return (
        <PaginationWrapper
            data-testid="pagination"
            className="sgds-pagination is-centered"
            role="navigation"
            aria-label="pagination"
        >
            <Page>
                <PaginationList>
                    <PaginationMenu
                        aria-label="Pagination Navigation"
                        role="navigation"
                        className="ui pagination-menu"
                    >
                        {showFirstAndLastNav ? (
                            <Link
                                className={`pagination-chevron push ${prevChevronClass}`}
                                aria-label="First Item"
                                onClick={firstPaginationItem}
                            >
                                <ChevronLineLeftIcon />
                            </Link>
                        ) : null}
                        <Link
                            className={`pagination-chevron ${prevChevronClass}`}
                            aria-label="Previous Item"
                            onClick={prevPaginationItem}
                        >
                            <ChevronLeftIcon />
                        </Link>
                        {paginationItemList}
                        <Link
                            className={`pagination-chevron ${nextChevronClass}`}
                            aria-label="Next Item"
                            onClick={nextPaginationItem}
                        >
                            <ChevronRightIcon />
                        </Link>
                        {showFirstAndLastNav ? (
                            <Link
                                className={`pagination-chevron push ${nextChevronClass}`}
                                aria-label="Last Item"
                                onClick={lastPaginationItem}
                            >
                                <ChevronLineRightIcon />
                            </Link>
                        ) : null}
                        {showJumper ? (
                            <PaginationJumper className="pagination-jumper">
                                <Label>Go to </Label>
                                <InputView
                                    aria-label="Jumper Input"
                                    onKeyPress={handleJumperInput}
                                    onBlur={handleJumperInput}
                                />
                                <Label>Page</Label>
                            </PaginationJumper>
                        ) : null}
                    </PaginationMenu>
                </PaginationList>
            </Page>
        </PaginationWrapper>
    );
};
