import React from "react";

import { PaginationsProps } from "./types";
import {
    ArrowChevron2LeftIcon,
    ArrowChevron2RightIcon,
    ArrowChevronLeftIcon,
    ArrowChevronRightIcon,
    EllipsisHorizontal,
    EllipsisItem,
    InputView,
    Item,
    Label,
    Link,
    LinkIcon,
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
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemOnClick = (pageIndex: number) => {
        if (onPageChange) {
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
                    <EllipsisHorizontal $disabled={false} />
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
            data-testid={dataTestId || "pagination"}
        >
            <PaginationList>
                <PaginationMenu>
                    {showFirstAndLastNav && (
                        <LinkIcon
                            onClick={firstPaginationItem}
                            $disabled={activePage === 1}
                        >
                            <ArrowChevron2LeftIcon
                                $disabled={activePage === 1}
                            />
                        </LinkIcon>
                    )}
                    <LinkIcon
                        onClick={prevPaginationItem}
                        $disabled={activePage === 1}
                    >
                        <ArrowChevronLeftIcon $disabled={activePage === 1} />
                    </LinkIcon>
                    {paginationItemList}
                    <LinkIcon
                        onClick={nextPaginationItem}
                        $disabled={activePage === totalPages}
                    >
                        <ArrowChevronRightIcon
                            $disabled={activePage === totalPages}
                        />
                    </LinkIcon>
                    {showFirstAndLastNav && (
                        <LinkIcon
                            onClick={lastPaginationItem}
                            $disabled={activePage === totalPages}
                        >
                            <ArrowChevron2RightIcon
                                $disabled={activePage === totalPages}
                            />
                        </LinkIcon>
                    )}
                    {/* {showJumper && (
                            <PaginationJumper>
                                <Label>Go to </Label>
                                <InputView
                                    onKeyPress={handleJumperInput}
                                    onBlur={handleJumperInput}
                                />
                                <Label>Page</Label>
                            </PaginationJumper>
                        )} */}
                </PaginationMenu>
            </PaginationList>
        </PaginationWrapper>
    );
};
export const Pagination = React.forwardRef(Component);
