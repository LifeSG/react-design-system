import React from "react";

import { PaginationsProps } from "./types";
import {
    ArrowChevron2LeftIcon,
    ArrowChevron2RightIcon,
    ArrowChevronLeftIcon,
    ArrowChevronRightIcon,
    EllipsisHorizontal,
    EllipsisItem,
    LinkIcon,
    NavigationItem,
    PaginationList,
    PaginationMenu,
    PaginationWrapper,
} from "./pagination.styles";

const Component = <T,>(
    {
        id,
        "data-testid": dataTestId,
        className,
        totalSize = 10,
        totalItems,
        activePage,
        showFirstAndLastNav,
        onPageChange,
    }: PaginationsProps,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const boundaryRange = 1;
    const siblingRange = 1;
    const isFirstPage = activePage === 1;
    const isLastPage = activePage === totalItems;
    const totalPages = Math.round(Math.ceil(totalItems / totalSize));

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

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemOnClick = (pageIndex: number) => {
        if (onPageChange) {
            onPageChange(pageIndex);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const paginationItemList = [...Array(totalPages)].map((e, i) => {
        const pageIndex = i + 1;
        const startRangeLocal = boundaryRange + 2 + siblingRange * 2;
        const endRange = totalPages - startRangeLocal;
        const totalRange = (boundaryRange + siblingRange) * 2 + 3;
        const active = activePage === pageIndex;
        if (totalPages <= totalRange) {
            return (
                <NavigationItem
                    key={pageIndex}
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    $selected={active}
                    weight={active ? "bold" : "regular"}
                    aria-label={pageIndex + " Page"}
                    tabIndex={0}
                >
                    {pageIndex}
                </NavigationItem>
            );
        }

        const ellipsisStart =
            activePage + siblingRange > startRangeLocal &&
            pageIndex === boundaryRange + 1;
        const ellipsisEnd =
            activePage - siblingRange <= endRange &&
            pageIndex === totalPages - boundaryRange - 1;

        if (ellipsisStart || ellipsisEnd) {
            return (
                <EllipsisItem key={pageIndex}>
                    <EllipsisHorizontal $disabled={false} />
                </EllipsisItem>
            );
        }

        const paginationStart =
            (pageIndex <= startRangeLocal &&
                activePage + siblingRange <= startRangeLocal) ||
            pageIndex <= boundaryRange;
        const paginationMiddle =
            pageIndex === activePage ||
            (pageIndex <= activePage + siblingRange &&
                pageIndex >= activePage - siblingRange);
        const paginationEnd =
            (pageIndex > endRange && activePage - siblingRange > endRange) ||
            pageIndex > totalPages - boundaryRange;
        if (paginationStart || paginationMiddle || paginationEnd) {
            return (
                <NavigationItem
                    key={pageIndex}
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    $selected={active}
                    weight={active ? "bold" : "regular"}
                    aria-label={pageIndex + " Page"}
                    tabIndex={0}
                >
                    {pageIndex}
                </NavigationItem>
            );
        }

        return null;
    });

    return (
        <PaginationWrapper
            className={className}
            ref={ref}
            id={id || "pagination-wrapper"}
            data-testid={dataTestId || "pagination"}
        >
            <PaginationList>
                <PaginationMenu>
                    {showFirstAndLastNav && (
                        <LinkIcon
                            onClick={firstPaginationItem}
                            $disabled={isFirstPage}
                            aria-label="First page"
                            tabIndex={isFirstPage ? -1 : 0}
                        >
                            <ArrowChevron2LeftIcon $disabled={isFirstPage} />
                        </LinkIcon>
                    )}
                    <LinkIcon
                        onClick={prevPaginationItem}
                        $disabled={isFirstPage}
                        aria-label="Previous Page"
                        tabIndex={isFirstPage ? -1 : 0}
                    >
                        <ArrowChevronLeftIcon $disabled={isFirstPage} />
                    </LinkIcon>
                    {paginationItemList}
                    <LinkIcon
                        onClick={nextPaginationItem}
                        $disabled={isLastPage}
                        aria-label="Next Page"
                        tabIndex={isLastPage ? -1 : 0}
                    >
                        <ArrowChevronRightIcon $disabled={isLastPage} />
                    </LinkIcon>
                    {showFirstAndLastNav && (
                        <LinkIcon
                            onClick={lastPaginationItem}
                            $disabled={isLastPage}
                            aria-label="last page"
                            tabIndex={isLastPage ? -1 : 0}
                        >
                            <ArrowChevron2RightIcon $disabled={isLastPage} />
                        </LinkIcon>
                    )}
                </PaginationMenu>
            </PaginationList>
        </PaginationWrapper>
    );
};
export const Pagination = React.forwardRef(Component);
