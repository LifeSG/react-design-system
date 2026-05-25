import clsx from "clsx";
import dayjs from "dayjs";
import { isEmpty, throttle } from "lodash";
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { useResizeDetector } from "react-resize-detector";

import { LoadingDotsSpinner } from "../animations";
import { ErrorDisplay } from "../error-display";
import type { PopoverV2TriggerProps } from "../popover-v2";
import { PopoverTrigger } from "../popover-v2";
import { VisuallyHidden } from "../shared/accessibility";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { TimeHelper } from "../util/time-helper";
import {
    MIN_INTERVAL_WIDTH,
    ROW_BAR_COLOR_ALTERNATE_COLOR,
    ROW_BAR_COLOR_SEQUENCE,
    ROW_HEADER_WIDTH,
    ROW_INTERVAL,
} from "./const";
import * as styles from "./timetable.styles";
import { TimeTableHeader } from "./timetable-header/timetable-header";
import { RowBar } from "./timetable-row/row-bar";
import type { TimeTableProps, TimeTableRef, TimeTableRowData } from "./types";

const Component = (props: TimeTableProps, ref: React.Ref<TimeTableRef>) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        date,
        emptyContentMessage,
        rowData,
        loading,
        minTime = "00:00",
        maxTime = "23:00",
        initialScrollTime,
        minDate,
        maxDate,
        totalRecords,
        showCurrentDateAsToday,
        showDateAsShortForm,
        onPage,
        onRefresh,
        onNextDayClick,
        onPreviousDayClick,
        onCalendarDateSelect,
        roundInitialScrollTime = true,
        ...otherProps
    } = props;
    const testId = otherProps["data-testid"] || "timetable";
    const timetableMinTime = TimeHelper.roundToNearestInterval(minTime, 60);
    const timetableMaxTime = TimeHelper.roundToNearestInterval(
        maxTime,
        60,
        true
    );
    const hourlyIntervals = TimeHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const numberOfIntervals = Math.ceil(
        (hourlyIntervals.length * 60) / ROW_INTERVAL
    );
    const formattedDate = dayjs(date).format("D MMMM YYYY");
    const timetableAriaLabel = `Timetable of resource availability, for ${formattedDate}, from ${dayjs(
        timetableMinTime,
        "HH:mm"
    ).format("ha")} to ${dayjs(timetableMaxTime, "HH:mm").format("ha")}`;
    const ariaRowCount = (totalRecords || rowData.length) + 1;
    const ariaColCount = numberOfIntervals + 1;

    const isEmptyContent = totalRecords === 0 || isEmpty(rowData);
    const allRecordsLoaded = isEmptyContent || rowData.length === totalRecords;
    const hasLazyLoad = !allRecordsLoaded && !!onPage;
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const columnHeaderRowRef = useRef<HTMLDivElement>(null);
    const loadingWrapperRef = useRef<HTMLDivElement>(null);
    const [isScrolledX, setIsScrolledX] = useState<boolean>(false);
    const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
    const [intervalWidth, setIntervalWidth] = useState<number>(0);
    const [loadMore, setLoadMore] = useState<boolean>(false);

    // Expose imperative handle
    useImperativeHandle(ref, () => ({
        resetScroll,
    }));

    useApplyStyle(columnHeaderRowRef, {
        [styles.tokens.columnHeaderRow.columnWidth]: `${intervalWidth * 4}px`,
    });

    useApplyStyle(loadingWrapperRef, {
        [styles.tokens.loadingWrapper.cellWidth]: `${intervalWidth * 4}px`,
    });

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const handleScroll = throttle(() => {
            if (tableContainerRef.current) {
                setIsScrolledX(tableContainerRef.current.scrollLeft > 0);
                setIsScrolledY(tableContainerRef.current.scrollTop > 0);
            }

            if (loadMore || !tableContainerRef.current) return;

            const { scrollTop, clientHeight, scrollHeight } =
                tableContainerRef.current;
            const scrollBottomTolerance = 1;
            const isEndReached =
                Math.ceil(scrollTop + clientHeight) >=
                scrollHeight - scrollBottomTolerance;
            const shouldLoadMore =
                isEndReached && !allRecordsLoaded && onPage && !loading;

            if (shouldLoadMore) {
                setLoadMore(true);
                onPage();
            }
        }, 100);

        const tableContainer = tableContainerRef.current;

        if (tableContainer) {
            tableContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (tableContainer) {
                tableContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, [allRecordsLoaded, loadMore, loading, onPage]);

    useEffect(() => {
        setLoadMore(false);
    }, [rowData]);

    // Initial scroll on mount and when dependencies change
    useEffect(() => {
        resetScroll();
    }, [initialScrollTime, intervalWidth, timetableMinTime, timetableMaxTime]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    /**
     * Handles when the TimeTable component is resized.
     *
     * @remarks
     * When the component is resized, we recalculate the width of each interval
     * in the Timetable. We do this by dividing the width of the container by
     * the number of intervals per row bar. We also make sure that the width
     * of each interval is at least 21px, otherwise it becomes too small.
     */
    const handleResize = () => {
        if (tableContainerRef.current) {
            const numberOfIntervalsPerRowBar = Math.ceil(
                (hourlyIntervals.length * 60) / ROW_INTERVAL
            );
            const tableContainerWidth =
                tableContainerRef.current.clientWidth - ROW_HEADER_WIDTH;
            const calcWidth = tableContainerWidth / numberOfIntervalsPerRowBar;
            const width =
                calcWidth > MIN_INTERVAL_WIDTH ? calcWidth : MIN_INTERVAL_WIDTH;
            setIntervalWidth(width);
        }
    };

    useResizeDetector({
        onResize: handleResize,
        targetRef: tableContainerRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    const handleRowNameClick = (
        data: TimeTableRowData,
        event: React.MouseEvent
    ) => {
        if (data.onRowNameClick) {
            data.onRowNameClick(data, event);
        }
    };

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    /**
     * Using closures to more efficiently loop through and wrap the color sequencing instead of modding large numbers repeatedly
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure
     */
    const getColorFromSequence = (() => {
        let colorIndex = 0;
        const colorSequenceLength = ROW_BAR_COLOR_SEQUENCE.length;

        return () => {
            const mainColor = ROW_BAR_COLOR_SEQUENCE[colorIndex];
            const alternateColor = ROW_BAR_COLOR_ALTERNATE_COLOR[colorIndex];
            colorIndex = (colorIndex + 1) % colorSequenceLength;
            return { mainColor, alternateColor };
        };
    })();

    const buildPopoverTrigger = (
        data: TimeTableRowData,
        child: JSX.Element
    ) => {
        if (!data.rowHeaderPopover) {
            return child;
        }

        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            customOffset: data.rowHeaderPopover.offset,
            children: child,
            trigger: data.rowHeaderPopover.trigger,
            delay: data.rowHeaderPopover.delay,
            popoverContent: data.rowHeaderPopover.content,
        };

        return (
            <PopoverTrigger
                {...popoverTriggerProps}
                className={styles.popoverTrigger}
                key={`${data.id}-popover-trigger`}
                zIndex={2}
            >
                {child}
            </PopoverTrigger>
        );
    };

    // Function to reset scroll to initialScrollTime
    const resetScroll = () => {
        if (
            initialScrollTime &&
            tableContainerRef.current &&
            intervalWidth > 0
        ) {
            const scrollPosition = TimeHelper.calculateScrollPosition({
                scrollTime: initialScrollTime,
                minTime: timetableMinTime,
                maxTime: timetableMaxTime,
                interval: ROW_INTERVAL,
                intervalWidth,
                options: {
                    roundToInterval: roundInitialScrollTime,
                },
            });

            if (scrollPosition !== null) {
                tableContainerRef.current.scrollLeft = scrollPosition;
            }
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderRowHeader = (data: TimeTableRowData) => {
        const rowHeaderContent = (
            <>
                <Typography.BodyMD
                    className={clsx(
                        styles.clickableRowHeaderTitle,
                        !!data.onRowNameClick &&
                            styles.clickableRowHeaderTitleClickable
                    )}
                    onClick={(event: React.MouseEvent) =>
                        handleRowNameClick(data, event)
                    }
                    weight="semibold"
                    data-testid={`${data.id}-row-header-title`}
                >
                    {data.name}
                </Typography.BodyMD>

                <Typography.BodyXS
                    weight="bold"
                    className={clsx(
                        styles.rowHeaderSubtitle,
                        !data.subtitle && styles.rowHeaderSubtitleHidden
                    )}
                    data-testid={`${data.id}-row-header-subtitle`}
                >
                    {data.subtitle}
                </Typography.BodyXS>
            </>
        );

        return (
            <div
                className={clsx(
                    styles.rowHeader,
                    isScrolledX && styles.rowHeaderScrolled
                )}
                key={`${data.id}-row-header`}
                role="rowheader"
                aria-colindex={1}
            >
                {buildPopoverTrigger(data, rowHeaderContent)}
            </div>
        );
    };

    const renderColumnHeaders = () => {
        // Don't render first column if there are no rows

        return hourlyIntervals.map((columnHeader: string) => (
            <div
                className={styles.columnHeader}
                key={`${columnHeader}-column-key`}
                data-testid={`${columnHeader}-column`}
            >
                <Typography.BodySM
                    className={styles.columnHeaderTitle}
                    weight={"semibold"}
                >
                    {columnHeader}
                </Typography.BodySM>
            </div>
        ));
    };

    const renderRows = () => {
        if (loading) {
            return (
                <LoadingDotsSpinner
                    className={clsx(
                        styles.loadingSpinner,
                        isEmptyContent
                            ? styles.loadingSpinnerEmptyContent
                            : styles.loadingSpinnerHasContent
                    )}
                />
            );
        }

        return (
            <div
                className={styles.timeTableBody}
                data-testid="content-container-id"
                ref={contentContainerRef}
                role="rowgroup"
            >
                {rowData.map((data, index) => {
                    return (
                        <div
                            className={styles.timeTableRow}
                            key={`${index}-timetable-row`}
                            role="row"
                            aria-rowindex={index + 2}
                            aria-label={data.name}
                        >
                            {renderRowHeader(data)}
                            <RowBar
                                key={`${index}-row-bar`}
                                timetableMinTime={timetableMinTime}
                                timetableMaxTime={timetableMaxTime}
                                rowBarColor={getColorFromSequence()}
                                intervalWidth={intervalWidth}
                                containerRef={contentContainerRef}
                                {...data}
                            />
                        </div>
                    );
                })}
                {renderLazyLoadRow()}
            </div>
        );
    };

    const renderLazyLoadRow = () => {
        if (loading || !loadMore) return;
        return (
            <div className={styles.timeTableRow}>
                <div
                    className={clsx(
                        styles.rowHeader,
                        isScrolledX && styles.rowHeaderScrolled
                    )}
                >
                    <div className={styles.loadingBar} />
                </div>
                <div
                    ref={loadingWrapperRef}
                    className={styles.loadingWrapper}
                    data-testid="lazy-loader"
                    role="presentation"
                >
                    {hourlyIntervals.map((_, index) => (
                        <div
                            className={styles.loadingCell}
                            key={`lazy-load-cell-${index}`}
                        >
                            <div className={styles.loadingBar} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    if (isEmptyContent) {
        return (
            <div {...otherProps} data-testid={testId}>
                <TimeTableHeader
                    selectedDate={date}
                    loading={loading || loadMore}
                    tableContainerRef={tableContainerRef}
                    minDate={minDate}
                    maxDate={maxDate}
                    totalRecords={totalRecords}
                    showCurrentDateAsToday={showCurrentDateAsToday}
                    showDateAsShortForm={showDateAsShortForm}
                    onPreviousDayClick={onPreviousDayClick}
                    onNextDayClick={onNextDayClick}
                    onRefresh={onRefresh}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
                <div
                    className={clsx(
                        styles.emptyTableContainer,
                        "empty-container"
                    )}
                    tabIndex={0}
                    aria-live="polite"
                    aria-atomic
                    aria-busy={loading}
                >
                    {!loading ? (
                        <ErrorDisplay
                            className={styles.noResultsFound}
                            type="no-item-found"
                            description={emptyContentMessage}
                        />
                    ) : (
                        <>
                            <VisuallyHidden>{`Loading ${timetableAriaLabel}`}</VisuallyHidden>
                            <LoadingDotsSpinner
                                className={clsx(
                                    styles.loadingSpinner,
                                    isEmptyContent
                                        ? styles.loadingSpinnerEmptyContent
                                        : styles.loadingSpinnerHasContent
                                )}
                            />
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div {...otherProps} data-testid={testId}>
            <TimeTableHeader
                data-id="timetable-date-navigator"
                selectedDate={date}
                loading={loading || loadMore}
                tableContainerRef={tableContainerRef}
                minDate={minDate}
                maxDate={maxDate}
                totalRecords={totalRecords}
                showCurrentDateAsToday={showCurrentDateAsToday}
                showDateAsShortForm={showDateAsShortForm}
                onPreviousDayClick={onPreviousDayClick}
                onNextDayClick={onNextDayClick}
                onRefresh={onRefresh}
                onCalendarDateSelect={onCalendarDateSelect}
            />
            <div
                data-id="timetable-container"
                data-testid="timetable-container"
                ref={tableContainerRef}
                className={clsx(
                    styles.timeTableContainer,
                    hasLazyLoad && styles.timeTableContainerNotAllLoaded,
                    loading && styles.timeTableContainerLoading
                )}
                role="grid"
                aria-label={timetableAriaLabel}
                aria-rowcount={ariaRowCount}
                aria-colcount={ariaColCount}
                aria-busy={loadMore}
                tabIndex={0}
            >
                <div
                    className={styles.timeTableHeaderRow}
                    role="row"
                    aria-rowindex={1}
                    data-testid={"row-header-column-id"}
                >
                    <div
                        className={clsx(
                            styles.rowColumnHeader,
                            (isScrolledX || isScrolledY) &&
                                styles.rowColumnHeaderScrolled,
                            isScrolledX && styles.rowColumnHeaderScrolledX,
                            isScrolledY && styles.rowColumnHeaderScrolledY
                        )}
                        role="columnheader"
                        aria-colindex={1}
                    >
                        <VisuallyHidden>Resource</VisuallyHidden>
                    </div>
                    <div
                        ref={columnHeaderRowRef}
                        className={clsx(
                            styles.columnHeaderRow,
                            isScrolledY && styles.columnHeaderRowScrolled
                        )}
                        role="presentation"
                    >
                        {renderColumnHeaders()}
                    </div>
                </div>
                {renderRows()}
            </div>
        </div>
    );
};

export const TimeTable = forwardRef<TimeTableRef, TimeTableProps>(Component);
