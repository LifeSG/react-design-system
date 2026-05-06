import { Chevron2LeftIcon } from "@lifesg/react-icons/chevron-2-left";
import { Chevron2RightIcon } from "@lifesg/react-icons/chevron-2-right";
import { ChevronLeftIcon } from "@lifesg/react-icons/chevron-left";
import { ChevronLineLeftIcon } from "@lifesg/react-icons/chevron-line-left";
import { ChevronLineRightIcon } from "@lifesg/react-icons/chevron-line-right";
import { ChevronRightIcon } from "@lifesg/react-icons/chevron-right";
import { EllipsisHorizontalIcon } from "@lifesg/react-icons/ellipsis-horizontal";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

import { Input } from "../input";
import { InputSelect } from "../input-select";
import { VisuallyHidden } from "../shared/accessibility";
import { ClickableIcon } from "../shared/clickable-icon";
import {
    Breakpoint,
    useDesignToken,
    useSafeMaxWidthMediaQuery,
} from "../theme";
import { Typography } from "../typography";
import { SimpleIdGenerator, useIsMounted } from "../util";
import * as styles from "./pagination.styles";
import type { PageSizeItemProps, PaginationProps } from "./types";

const Component = (
    {
        id,
        "data-testid": dataTestId,
        className,
        pageSize = 10,
        totalItems,
        activePage,
        pageSizeOptions = DEFAULT_OPTIONS,
        showFirstAndLastNav,
        showPageSizeChanger = false,
        onPageChange,
        onPageSizeChange,
    }: PaginationProps,
    ref: React.Ref<HTMLDivElement>
) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================

    const isMounted = useIsMounted();
    const mobileBreakpoint = useDesignToken(Breakpoint["sm-max"]);
    const isMobile = useSafeMaxWidthMediaQuery(mobileBreakpoint);
    const [hoverRightButton, setHoverRightButton] = useState(false);
    const [hoverLeftButton, setHoverLeftButton] = useState(false);
    const [inputText, setInputText] = useState<string>("");

    const [selectedOption, setSelectedOption] = useState<
        PageSizeItemProps | undefined
    >(pageSizeOptions[0]);
    const [pageSizeLocal, setPageSize] = useState<number>(
        !isMobile && showPageSizeChanger
            ? selectedOption
                ? selectedOption.value
                : pageSize
            : pageSize
    );

    const boundaryRange = 1;
    const siblingRange = 1;

    const internalId = useRef(SimpleIdGenerator.generate());
    const paginationId = `${internalId.current}-pagination`;

    const totalPages = Math.ceil(totalItems / pageSizeLocal);
    const isFirstPage = activePage === 1;
    const isLastPage = activePage === totalPages;

    const firstPaginationItem =
        activePage > 1 ? () => handlePaginationItemClick(1) : undefined;
    const lastPaginationItem =
        activePage < totalPages
            ? () => handlePaginationItemClick(totalPages)
            : undefined;
    const prevPaginationItem =
        activePage > 1
            ? () => handlePaginationItemClick(activePage - 1)
            : undefined;
    const nextPaginationItem =
        activePage < totalPages
            ? () =>
                  handlePaginationItemClick(parseInt(activePage.toString()) + 1)
            : undefined;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        if (activePage) {
            setInputValue(activePage);
        }
    }, [activePage]);

    useEffect(() => {
        setPageSize(pageSize);
        setSelectedOption(
            pageSizeOptions.find((option) => option.value === pageSize)
        );
    }, [pageSize]);

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const setInputValue = (value: number) => {
        setInputText(value.toString());
    };

    const closeAllTooltips = () => {
        setHoverRightButton(false);
        setHoverLeftButton(false);
    };

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handlePaginationItemClick = (pageIndex: number) => {
        if (onPageChange) {
            onPageChange(pageIndex);
            setInputValue(pageIndex);
        }
    };

    const handleFastForwardClick = () => {
        const currentIndex = Math.min(totalPages, activePage + 5);
        handlePaginationItemClick(currentIndex);
        setInputValue(currentIndex);
        setHoverRightButton(true);
        setHoverLeftButton(false);
    };

    const handleFastBackwardClick = () => {
        const currentIndex = Math.max(1, activePage - 5);
        handlePaginationItemClick(currentIndex);
        setInputValue(currentIndex);
        setHoverRightButton(false);
        setHoverLeftButton(true);
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericRegex = /^[0-9]+$/;
        if (value === undefined || value.length === 0) {
            setInputText("");
        } else if (!numericRegex.test(value)) {
            setInputText(value.replace(/[^0-9]/g, ""));
        } else {
            const newPage = parseInt(value.replace(/[^0-9]/g, ""));
            setInputValue(Math.max(1, Math.min(totalPages, newPage)));
        }
    };

    const handleInputSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (inputText) {
            onPageChange?.(parseInt(inputText));
        }
    };

    const onHoverRightButton = () => {
        setHoverRightButton(true);
    };

    const onBlurRightButton = () => {
        setHoverRightButton(false);
    };

    const onHoverLeftButton = () => {
        setHoverLeftButton(true);
    };

    const onBlurLeftButton = () => {
        setHoverLeftButton(false);
    };

    const handleListItemClick = (item: PageSizeItemProps) => {
        setSelectedOption(item);
        const pagesize = item.value;
        const totalPage = Math.ceil(totalItems / pagesize);

        setPageSize(pagesize);

        const page = activePage >= totalPage ? totalPage : activePage;

        if (onPageSizeChange) {
            onPageSizeChange(page, pagesize);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderPaginationItems = () => {
        return [...Array(totalPages)].map((e, i) => {
            const pageIndex = i + 1;
            const startRange = boundaryRange + 2 + siblingRange * 2;
            const endRange = totalPages - startRange;
            const totalRange = (boundaryRange + siblingRange) * 2 + 3;
            const active = activePage === pageIndex;
            if (totalPages <= totalRange) {
                return (
                    <button
                        key={pageIndex}
                        onClick={() => handlePaginationItemClick(pageIndex)}
                        className={clsx(
                            styles.pageItem,
                            active && styles.pageItemSelected
                        )}
                        aria-label={`page ${pageIndex} of ${totalPages}`}
                        aria-current={active ? "page" : false}
                        onMouseOver={closeAllTooltips}
                        onFocus={closeAllTooltips}
                    >
                        {pageIndex}
                    </button>
                );
            }

            const ellipsisStart =
                activePage + siblingRange > startRange &&
                pageIndex === boundaryRange + 1;
            if (ellipsisStart) {
                return renderStartEllipsis(pageIndex);
            }

            const ellipsisEnd =
                activePage - siblingRange <= endRange &&
                pageIndex === totalPages - boundaryRange - 1;
            if (ellipsisEnd) {
                return renderEndEllipsis(pageIndex);
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
                (pageIndex > endRange &&
                    activePage - siblingRange > endRange) ||
                pageIndex > totalPages - boundaryRange;
            if (paginationStart || paginationMiddle || paginationEnd) {
                return (
                    <button
                        key={pageIndex}
                        onClick={() => handlePaginationItemClick(pageIndex)}
                        className={clsx(
                            styles.pageItem,
                            active && styles.pageItemSelected
                        )}
                        aria-label={`page ${pageIndex} of ${totalPages}`}
                        aria-current={active ? "page" : false}
                        onMouseOver={closeAllTooltips}
                        onFocus={closeAllTooltips}
                    >
                        {pageIndex}
                    </button>
                );
            }

            return null;
        });
    };

    const renderStartEllipsis = (pageIndex: number) => (
        <div key={pageIndex} className={styles.ellipsisContainer}>
            <ClickableIcon
                className={styles.iconButton}
                focusHighlight={false}
                focusOutline="browser"
                aria-label={"Previous 5 pages"}
                onMouseEnter={onHoverLeftButton}
                onMouseLeave={onBlurLeftButton}
                onFocus={onHoverLeftButton}
                onBlur={onBlurLeftButton}
                onClick={handleFastBackwardClick}
            >
                {hoverLeftButton ? (
                    <Chevron2LeftIcon aria-hidden />
                ) : (
                    <EllipsisHorizontalIcon aria-hidden />
                )}
            </ClickableIcon>
            {hoverLeftButton && (
                <div className={styles.hover}>Previous 5 pages</div>
            )}
        </div>
    );

    const renderEndEllipsis = (pageIndex: number) => (
        <div key={pageIndex} className={styles.ellipsisContainer}>
            <ClickableIcon
                className={styles.iconButton}
                focusHighlight={false}
                focusOutline="browser"
                aria-label={"Next 5 pages"}
                onMouseEnter={onHoverRightButton}
                onMouseLeave={onBlurRightButton}
                onFocus={onHoverRightButton}
                onBlur={onBlurRightButton}
                onClick={handleFastForwardClick}
            >
                {hoverRightButton ? (
                    <Chevron2RightIcon aria-hidden />
                ) : (
                    <EllipsisHorizontalIcon aria-hidden />
                )}
            </ClickableIcon>
            {hoverRightButton && (
                <div className={styles.hover}>Next 5 pages</div>
            )}
        </div>
    );

    const renderMobile = () => (
        <div className={styles.paginationMobileInput}>
            <form onSubmit={handleInputSubmit}>
                <Input
                    className={styles.inputView}
                    value={inputText}
                    onChange={handleInput}
                    autoComplete="off"
                    type="numeric"
                    id={(id || "pagination") + "-input"}
                    data-testid={(dataTestId || "pagination") + "-input"}
                    aria-label={`Page ${activePage} of ${totalPages}`}
                />
            </form>
            <Typography.BodyBL className={styles.labelDivider}>
                /
            </Typography.BodyBL>
            <Typography.BodyBL className={styles.label}>
                {totalPages}
            </Typography.BodyBL>
        </div>
    );

    return (
        <nav
            className={clsx(styles.paginationWrapper, className)}
            ref={ref}
            id={id || "pagination-wrapper"}
            data-testid={dataTestId || "pagination"}
            aria-labelledby={paginationId}
        >
            <VisuallyHidden id={paginationId} aria-hidden>
                pagination
            </VisuallyHidden>
            <div className={styles.paginationList}>
                <div className={styles.paginationMenu}>
                    {showFirstAndLastNav && (
                        <ClickableIcon
                            className={clsx(
                                styles.iconButton,
                                styles.iconButtonNavigation
                            )}
                            onClick={firstPaginationItem}
                            disabled={isFirstPage}
                            focusHighlight={false}
                            aria-label="First page"
                            focusOutline="browser"
                        >
                            <ChevronLineLeftIcon aria-hidden />
                        </ClickableIcon>
                    )}
                    <ClickableIcon
                        className={clsx(
                            styles.iconButton,
                            styles.iconButtonNavigation
                        )}
                        onClick={prevPaginationItem}
                        disabled={isFirstPage}
                        focusHighlight={false}
                        aria-label="Previous page"
                        focusOutline="browser"
                    >
                        <ChevronLeftIcon aria-hidden />
                    </ClickableIcon>
                    {isMounted && isMobile
                        ? renderMobile()
                        : renderPaginationItems()}
                    <ClickableIcon
                        className={clsx(
                            styles.iconButton,
                            styles.iconButtonNavigation
                        )}
                        onClick={nextPaginationItem}
                        disabled={isLastPage}
                        focusHighlight={false}
                        aria-label="Next page"
                        focusOutline="browser"
                    >
                        <ChevronRightIcon aria-hidden />
                    </ClickableIcon>
                    {showFirstAndLastNav && (
                        <ClickableIcon
                            className={clsx(
                                styles.iconButton,
                                styles.iconButtonNavigation
                            )}
                            onClick={lastPaginationItem}
                            disabled={isLastPage}
                            focusHighlight={false}
                            aria-label="Last page"
                            focusOutline="browser"
                        >
                            <ChevronLineRightIcon aria-hidden />
                        </ClickableIcon>
                    )}
                </div>
            </div>
            {showPageSizeChanger && !isMobile && (
                <div className={styles.inputSelectWrapper}>
                    <VisuallyHidden id={`${paginationId}-page-size`}>
                        Items per page
                    </VisuallyHidden>
                    <InputSelect
                        aria-labelledby={`${paginationId}-page-size`}
                        options={pageSizeOptions}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        selectedOption={selectedOption}
                        onSelectOption={handleListItemClick}
                    />
                </div>
            )}
        </nav>
    );
};
export const Pagination = React.forwardRef(Component);

const DEFAULT_OPTIONS: PageSizeItemProps[] = [
    { value: 10, label: "10 per page" },
    { value: 20, label: "20 per page" },
    { value: 30, label: "30 per page" },
];
