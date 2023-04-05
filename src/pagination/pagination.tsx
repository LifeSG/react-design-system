import React from "react";
import {
    ChevronLeftIcon,
    ChevronLineLeftIcon,
    ChevronLineRightIcon,
    ChevronRightIcon,
    EllipsisHorizontalIcon,
} from "@lifesg/react-icons";

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

const Component = <T,>(
    {
        id,
        "data-testid": dataTestId,
        className,
        totalPages,
        activePage,
        boundaryRange,
        siblingRange,
        showFirstAndLastNav,
        showJumper,
        onPageChange,
        ...otherProps
    }: PaginationsProps,
    ref: React.Ref<HTMLDivElement>
) => {
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
    // const prevChevronClass = prevPaginationItem ? "" : "disabled";
    // const nextChevronClass = nextPaginationItem ? "" : "disabled";

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemOnClick = (pageIndex: number) => {
        if (onPageChange) {
            // const resultsHeading = document.getElementsByClassName(
            //     "paginated-list-results"
            // )[0];
            // if (resultsHeading) {
            //     resultsHeading.scrollIntoView();
            // }
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
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const paginationItemList = [...Array(totalPages)].map((e, i) => {
        const pageIndex = i + 1;
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
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
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
                <EllipsisItem key={pageIndex}>
                    <EllipsisHorizontalIcon />
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
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
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
            className={className}
            ref={ref}
            id={id || "pagination-wrapper"}
            data-testid={otherProps["data-testid"] || "pagination"}
        >
            <Page>
                <PaginationList>
                    <PaginationMenu>
                        {showFirstAndLastNav && (
                            <Link onClick={firstPaginationItem}>
                                <ChevronLineLeftIcon />
                            </Link>
                        )}
                        <Link onClick={prevPaginationItem}>
                            <ChevronLeftIcon />
                        </Link>
                        {paginationItemList}
                        <Link onClick={nextPaginationItem}>
                            <ChevronRightIcon />
                        </Link>
                        {showFirstAndLastNav && (
                            <Link onClick={lastPaginationItem}>
                                <ChevronLineRightIcon />
                            </Link>
                        )}
                        {showJumper && (
                            <PaginationJumper>
                                <Label>Go to </Label>
                                <InputView
                                    onKeyPress={handleJumperInput}
                                    onBlur={handleJumperInput}
                                />
                                <Label>Page</Label>
                            </PaginationJumper>
                        )}
                    </PaginationMenu>
                </PaginationList>
            </Page>
        </PaginationWrapper>
    );
};
export const Pagination = React.forwardRef(Component);
