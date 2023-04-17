import React from "react";

import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { ChevronLineLeftIcon } from "@lifesg/react-icons/chevron-line-left";
import { ChevronLineRightIcon } from "@lifesg/react-icons/chevron-line-right";
import { EllipsisHorizontalIcon } from "@lifesg/react-icons/ellipsis-horizontal";

import {
    EllipsisItem,
    NavigationItem,
    PageItem,
    PaginationList,
    PaginationMenu,
    PaginationWrapper,
} from "./pagination.styles";
import { PaginationsProps } from "./types";

const Component = (
    {
        id,
        "data-testid": dataTestId,
        className,
        pageSize = 10,
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
    const totalPages = Math.ceil(totalItems / pageSize);
    const isFirstPage = activePage === 1;
    const isLastPage = activePage === totalPages;

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
        const startRange = boundaryRange + 2 + siblingRange * 2;
        const endRange = totalPages - startRange;
        const totalRange = (boundaryRange + siblingRange) * 2 + 3;
        const active = activePage === pageIndex;
        if (totalPages <= totalRange) {
            return (
                <PageItem
                    key={pageIndex}
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    $selected={active}
                    aria-label={"Page " + pageIndex}
                >
                    {pageIndex}
                </PageItem>
            );
        }

        const ellipsisStart =
            activePage + siblingRange > startRange &&
            pageIndex === boundaryRange + 1;
        const ellipsisEnd =
            activePage - siblingRange <= endRange &&
            pageIndex === totalPages - boundaryRange - 1;

        if (ellipsisStart || ellipsisEnd) {
            return (
                <EllipsisItem key={pageIndex} focusHighlight={false}>
                    <EllipsisHorizontalIcon />
                </EllipsisItem>
            );
        }

        const paginationStart =
            (pageIndex <= startRange &&
                activePage + siblingRange <= startRange) ||
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
                <PageItem
                    key={pageIndex}
                    onClick={() => handlePaginationItemOnClick(pageIndex)}
                    $selected={active}
                    aria-label={"Page " + pageIndex}
                >
                    {pageIndex}
                </PageItem>
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
                        <NavigationItem
                            onClick={firstPaginationItem}
                            disabled={isFirstPage}
                            focusHighlight={false}
                            aria-label="First page"
                        >
                            <ChevronLineLeftIcon aria-hidden />
                        </NavigationItem>
                    )}
                    <NavigationItem
                        onClick={prevPaginationItem}
                        disabled={isFirstPage}
                        focusHighlight={false}
                        aria-label="Previous Page"
                    >
                        <ChevronLeftIcon aria-hidden />
                    </NavigationItem>
                    {paginationItemList}
                    <NavigationItem
                        onClick={nextPaginationItem}
                        disabled={isLastPage}
                        focusHighlight={false}
                        aria-label="Next Page"
                    >
                        <ChevronRightIcon aria-hidden />
                    </NavigationItem>
                    {showFirstAndLastNav && (
                        <NavigationItem
                            onClick={lastPaginationItem}
                            disabled={isLastPage}
                            focusHighlight={false}
                            aria-label="last page"
                        >
                            <ChevronLineRightIcon aria-hidden />
                        </NavigationItem>
                    )}
                </PaginationMenu>
            </PaginationList>
        </PaginationWrapper>
    );
};
export const Pagination = React.forwardRef(Component);
