import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronLineLeftIcon } from "@lifesg/react-icons/chevron-line-left";
import { ChevronLineRightIcon } from "@lifesg/react-icons/chevron-line-right";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { EllipsisHorizontalIcon } from "@lifesg/react-icons/ellipsis-horizontal";
import { Chevron2LeftIcon } from "@lifesg/react-icons/chevron-2-left";
import { Chevron2RightIcon } from "@lifesg/react-icons/chevron-2-right";

import React, { useState } from "react";
import {
    EllipsisContainer,
    EllipsisItem,
    Hover,
    InputView,
    Label,
    LabelDivider,
    NavigationButton,
    NavigationItem,
    PageItem,
    PaginationList,
    PaginationMenu,
    PaginationMobileInput,
    PaginationWrapper,
} from "./pagination.styles";
import { PaginationsProps } from "./types";
import { useMediaQuery } from "react-responsive";
import { MediaWidths } from "../spec/media-spec";

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
    const [hoverRightButton, setHoverRightButton] = useState(false);
    const [hoverLeftButton, setHoverLeftButton] = useState(false);
    const boundaryRange = 1;
    const siblingRange = 1;
    const totalPages = Math.ceil(totalItems / pageSize);
    const isFirstPage = activePage === 1;
    const isLastPage = activePage === totalPages;
    const isMobile = useMediaQuery({
        maxWidth: MediaWidths.mobileL,
    });

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
            ? () =>
                  handlePaginationItemOnClick(
                      parseInt(activePage.toString()) + 1
                  )
            : undefined;

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemOnClick = (pageIndex: number) => {
        if (onPageChange) {
            onPageChange(pageIndex);
        }
    };

    const handleFastForwardOnClick = () => {
        handlePaginationItemOnClick(activePage - 5);
        setHoverRightButton(false);
        setHoverLeftButton(false);
    };

    const handleFastBackwardsOnClick = () => {
        handlePaginationItemOnClick(activePage + 5);
        setHoverRightButton(false);
        setHoverLeftButton(false);
    };

    const setInput4 = (value) => {
        if (value < totalPages && value > 0) {
            onPageChange(value);
        } else if (value > totalPages) {
            onPageChange(totalPages);
        } else {
            onPageChange(1);
        }
    };

    const onHoverRightButton = () => {
        setHoverRightButton(true);
    };

    const onLeaveRightButton = () => {
        setHoverRightButton(false);
    };

    const onHoverLeftButton = () => {
        setHoverLeftButton(true);
    };

    const onLeaveLeftButton = () => {
        setHoverLeftButton(false);
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
                <EllipsisContainer key={pageIndex}>
                    <EllipsisItem key={pageIndex} focusHighlight={false}>
                        <EllipsisHorizontalIcon />
                    </EllipsisItem>
                    {ellipsisStart && (
                        <>
                            <NavigationItem
                                onClick={handleFastForwardOnClick}
                                disabled={false}
                                focusHighlight={false}
                                aria-label="Fast Forward"
                                onMouseOver={onHoverLeftButton}
                                onMouseOut={onLeaveLeftButton}
                            >
                                <Chevron2LeftIcon />
                            </NavigationItem>
                            {hoverLeftButton && <Hover>Previous 5 Pages</Hover>}
                        </>
                    )}
                    {ellipsisEnd && (
                        <>
                            <NavigationItem
                                onClick={handleFastBackwardsOnClick}
                                disabled={false}
                                focusHighlight={false}
                                aria-label="Fast Backward"
                                onMouseOver={onHoverRightButton}
                                onMouseOut={onLeaveRightButton}
                            >
                                <Chevron2RightIcon />
                            </NavigationItem>
                            {hoverRightButton && <Hover>Next 5 Pages</Hover>}
                        </>
                    )}
                </EllipsisContainer>
            );
        }

        const paginationStart =
            (pageIndex <= startRange &&
                activePage + siblingRange <= startRange) ||
            pageIndex <= boundaryRange;
        const paginationMiddle =
            pageIndex === activePage ||
            (pageIndex <= activePage + siblingRange &&
                pageIndex >= activePage - siblingRange - 1);
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

    const renderMobile = () => (
        <PaginationMobileInput>
            <InputView
                placeholder="Page"
                value={activePage}
                onChange={(event) => setInput4(event.target.value)}
                autoComplete="off"
                type="number"
                id={(id || "pagination") + "-input"}
                data-testid={(dataTestId || "pagination") + "-input"}
            />
            <LabelDivider>/</LabelDivider>
            <Label>{totalPages}</Label>
        </PaginationMobileInput>
    );

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
                        <NavigationButton
                            onClick={firstPaginationItem}
                            disabled={isFirstPage}
                            focusHighlight={false}
                            $position="left"
                            aria-label="First page"
                        >
                            <ChevronLineLeftIcon aria-hidden />
                        </NavigationButton>
                    )}
                    <NavigationButton
                        onClick={prevPaginationItem}
                        disabled={isFirstPage}
                        focusHighlight={false}
                        $position="left"
                        aria-label="Previous Page"
                    >
                        <ChevronLeftIcon aria-hidden />
                    </NavigationButton>
                    {isMobile ? renderMobile() : paginationItemList}
                    <NavigationButton
                        onClick={nextPaginationItem}
                        disabled={isLastPage}
                        focusHighlight={false}
                        $position="right"
                        aria-label="Next Page"
                    >
                        <ChevronRightIcon aria-hidden />
                    </NavigationButton>
                    {showFirstAndLastNav && (
                        <NavigationButton
                            onClick={lastPaginationItem}
                            disabled={isLastPage}
                            focusHighlight={false}
                            $position="right"
                            aria-label="last page"
                        >
                            <ChevronLineRightIcon aria-hidden />
                        </NavigationButton>
                    )}
                </PaginationMenu>
            </PaginationList>
        </PaginationWrapper>
    );
};
export const Pagination = React.forwardRef(Component);
