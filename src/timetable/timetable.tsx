import { isEmpty, throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { PopoverV2TriggerProps } from "../popover-v2";
import { TimeHelper } from "../util/time-helper";
import {
    MIN_INTERVAL_WIDTH,
    ROW_BAR_COLOR_SEQUENCE,
    ROW_HEADER_WIDTH,
    ROW_INTERVAL,
} from "./const";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import { RowBar } from "./timetable-row/row-bar";
import {
    ClickableRowHeaderTitle,
    ColumnHeader,
    ColumnHeaderRow,
    ColumnHeaderTitle,
    ContentContainer,
    EmptyTableContainer,
    EmptyTableRowHeader,
    Loader,
    LoadingBar,
    LoadingCell,
    LoadingWrapper,
    NoResultsFound,
    RowColumnHeader,
    RowHeader,
    RowHeaderColumn,
    RowHeaderSubtitle,
    StyledPopoverTrigger,
    TimeTableContainer,
} from "./timetable.style";
import { TimeTableProps, TimeTableRowData } from "./types";

export const TimeTable = ({
    date,
    emptyContent,
    rowData,
    loading,
    minTime = "00:00",
    maxTime = "23:00",
    minDate,
    maxDate,
    totalRecords,
    onPage,
    onRefresh,
    onNextDayClick,
    onPreviousDayClick,
    ...otherProps
}: TimeTableProps): JSX.Element => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const testId = otherProps["data-testid"] || "timetable-container-id";
    const timetableMinTime = TimeHelper.roundToNearestHour(minTime);
    const timetableMaxTime = TimeHelper.roundToNearestHour(maxTime, true);
    const hourlyIntervals = TimeHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const isEmptyContent = totalRecords === 0 || isEmpty(rowData);
    const allRecordsLoaded = isEmptyContent || rowData.length === totalRecords;
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const [isScrolledX, setIsScrolledX] = useState<boolean>(false);
    const [isScrolledY, setIsScrolledY] = useState<boolean>(false);
    const [intervalWidth, setIntervalWidth] = useState<number>(0);
    const [loadMore, setLoadMore] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const handleScroll = throttle(() => {
            if (tableContainerRef.current) {
                setIsScrolledX(tableContainerRef.current.scrollLeft > 0);
                setIsScrolledY(tableContainerRef.current.scrollTop > 0);
            }

            if (loadMore) return;

            const { scrollTop, clientHeight, scrollHeight } =
                tableContainerRef.current;
            const isEndReached =
                Math.ceil(scrollTop + clientHeight) >= scrollHeight;
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
            const color = ROW_BAR_COLOR_SEQUENCE[colorIndex];
            colorIndex = (colorIndex + 1) % colorSequenceLength;
            return color;
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
            rootNode: tableContainerRef,
            customOffset: data.rowHeaderPopover.offset,
            children: child,
            trigger: data.rowHeaderPopover.trigger,
            delay: data.rowHeaderPopover.delay,
            popoverContent: data.rowHeaderPopover.content,
        };

        return (
            <StyledPopoverTrigger
                {...popoverTriggerProps}
                key={`${data.id}-popover-trigger`}
                zIndex={2}
            >
                {child}
            </StyledPopoverTrigger>
        );
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const ConditionalCellWrapper = ({
        wrapper,
        children,
    }: {
        wrapper: (child: JSX.Element) => JSX.Element;
        children: JSX.Element;
    }) => {
        return wrapper(children);
    };

    const renderRowHeaderColumn = () => {
        return (
            <>
                {rowData.map((data, index) => {
                    return (
                        <ConditionalCellWrapper
                            key={index}
                            wrapper={(child: JSX.Element) =>
                                buildPopoverTrigger(data, child)
                            }
                        >
                            <RowHeader
                                $isScrolled={isScrolledX}
                                key={`${data.id}-row-header`}
                            >
                                <ClickableRowHeaderTitle
                                    $isClickable={!!data.onRowNameClick}
                                    onClick={(event: React.MouseEvent) =>
                                        handleRowNameClick(data, event)
                                    }
                                    weight="semibold"
                                    data-testid={`${data.id}-row-header-title`}
                                >
                                    {data.name}
                                </ClickableRowHeaderTitle>

                                <RowHeaderSubtitle
                                    weight="bold"
                                    $show={!!data.subtitle}
                                    data-testid={`${data.id}-row-header-subtitle`}
                                >
                                    {data.subtitle}
                                </RowHeaderSubtitle>
                            </RowHeader>
                        </ConditionalCellWrapper>
                    );
                })}
                {renderRowHeaderColumnLazyLoad()}
            </>
        );
    };

    const renderRowHeaderColumnLazyLoad = () => {
        if (loading || !loadMore) return;
        return (
            <RowHeader $isScrolled={isScrolledX}>
                <LoadingBar />
            </RowHeader>
        );
    };

    const renderColumnHeaders = () => {
        // Don't render first column if there are no rows
        return hourlyIntervals.map((columnHeader: string) => {
            return (
                <ColumnHeader
                    key={`${columnHeader}-column-key`}
                    data-testid={`${columnHeader}-column`}
                >
                    <ColumnHeaderTitle weight={"semibold"}>
                        {columnHeader}
                    </ColumnHeaderTitle>
                </ColumnHeader>
            );
        });
    };

    const renderRowBarData = () => {
        if (loading) return <Loader $isEmptyContent={isEmptyContent} />;
        return (
            <ContentContainer
                data-testid="content-container-id"
                ref={contentContainerRef}
                $numOfRows={rowData.length}
            >
                {rowData.map((data, index) => {
                    return (
                        <RowBar
                            key={`${index}-row-bar`}
                            timetableMinTime={timetableMinTime}
                            timetableMaxTime={timetableMaxTime}
                            rowBarColor={getColorFromSequence()}
                            intervalWidth={intervalWidth}
                            containerRef={contentContainerRef}
                            {...data}
                        />
                    );
                })}
                {renderRowDataLazyLoad()}
            </ContentContainer>
        );
    };

    const renderRowDataLazyLoad = () => {
        if (loading || !loadMore) return;
        return (
            <LoadingWrapper data-testid="lazy-loader">
                {hourlyIntervals.map((_, index) => (
                    <LoadingCell
                        key={`lazy-load-cell-${index}`}
                        $width={intervalWidth * 4}
                    >
                        <LoadingBar />
                    </LoadingCell>
                ))}
            </LoadingWrapper>
        );
    };

    if (isEmptyContent) {
        return (
            <EmptyTableContainer className="empty-container" {...otherProps}>
                <EmptyTableRowHeader>
                    <TimeTableNavigator
                        selectedDate={date}
                        loading={loading || loadMore}
                        tableContainerRef={tableContainerRef}
                        minDate={minDate}
                        maxDate={maxDate}
                        totalRecords={totalRecords}
                        onLeftArrowClick={onPreviousDayClick}
                        onRightArrowClick={onNextDayClick}
                        onRefresh={onRefresh}
                    />
                </EmptyTableRowHeader>
                {!loading ? (
                    <NoResultsFound
                        type="no-item-found"
                        illustrationScheme={emptyContent?.illustrationScheme}
                        description={emptyContent?.description}
                    />
                ) : (
                    <Loader $isEmptyContent={isEmptyContent}></Loader>
                )}
            </EmptyTableContainer>
        );
    }

    return (
        <TimeTableContainer
            ref={tableContainerRef}
            data-testid={testId}
            {...otherProps}
            $loading={loading}
            $allRecordsLoaded={allRecordsLoaded || !onPage}
        >
            <RowColumnHeader
                $isScrolledY={isScrolledY}
                $isScrolledX={isScrolledX}
            >
                <TimeTableNavigator
                    selectedDate={date}
                    loading={loading || loadMore}
                    tableContainerRef={tableContainerRef}
                    minDate={minDate}
                    maxDate={maxDate}
                    totalRecords={totalRecords}
                    onLeftArrowClick={onPreviousDayClick}
                    onRightArrowClick={onNextDayClick}
                    onRefresh={onRefresh}
                />
            </RowColumnHeader>
            <RowHeaderColumn
                $numOfRows={rowData.length}
                $isScrolled={isScrolledX}
                data-testid={"row-header-column-id"}
            >
                {renderRowHeaderColumn()}
            </RowHeaderColumn>
            <ColumnHeaderRow
                $numOfColumns={hourlyIntervals.length}
                $isScrolled={isScrolledY}
            >
                {renderColumnHeaders()}
            </ColumnHeaderRow>
            {renderRowBarData()}
        </TimeTableContainer>
    );
};