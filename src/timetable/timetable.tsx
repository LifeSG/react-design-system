import { isEmpty, throttle } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { PopoverV2TriggerProps } from "../popover-v2";
import { CalendarHelper } from "../util";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import { RowBar } from "./timetable-row/row-bar";
import { StyledPopoverContent } from "./timetable-row/row-cell.style";
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
import {
    CustomPopoverProps,
    ROW_BAR_COLOR_SEQUENCE,
    ROW_INTERVAL,
    RowData,
    TimeTableProps,
} from "./types";

export const TimeTable = ({
    date,
    rowData,
    isLoading,
    minTime = "00:00",
    maxTime = "23:00",
    onPage,
    ...optionalProps
}: TimeTableProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const timetableMinTime = CalendarHelper.roundToNearestHour(minTime);
    const timetableMaxTime = CalendarHelper.roundToNearestHour(maxTime, true);
    const hourlyIntervals = CalendarHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const isEmptyContent = optionalProps.totalRecords === 0 || isEmpty(rowData);
    const allRecordsLoaded =
        isEmptyContent || rowData.length === optionalProps.totalRecords;
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
                isEndReached && !allRecordsLoaded && onPage && !isLoading;

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
    }, [allRecordsLoaded, loadMore, isLoading, onPage]);

    useEffect(() => {
        setLoadMore(false);
    }, [rowData]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleResize = () => {
        if (tableContainerRef.current) {
            const numberOfIntervalsPerRowBar = Math.ceil(
                (hourlyIntervals.length * 60) / ROW_INTERVAL
            );
            const tableContainerWidth =
                tableContainerRef.current.clientWidth - 252;
            const width =
                tableContainerWidth / numberOfIntervalsPerRowBar > 21
                    ? tableContainerWidth / numberOfIntervalsPerRowBar
                    : 21;
            setIntervalWidth(width);
        }
    };

    useResizeDetector({
        onResize: handleResize,
        targetRef: tableContainerRef,
        refreshMode: "debounce",
        refreshRate: 50,
    });

    const handleRowNameClick = (data: RowData, event: React.MouseEvent) => {
        if (optionalProps.onNameClick) {
            optionalProps.onNameClick(data, event);
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

    const buildPopoverContent = (customPopoverProps: CustomPopoverProps) => {
        return (
            <StyledPopoverContent
                $padding={customPopoverProps.padding}
                $width={customPopoverProps.width}
                data-testid={`row-header-popover-card`}
            >
                {customPopoverProps.content}
            </StyledPopoverContent>
        );
    };

    const buildPopoverTrigger = (data: RowData, child: JSX.Element) => {
        if (!data.rowHeaderCustomPopover) {
            return child;
        }

        const popoverTriggerProps: PopoverV2TriggerProps = {
            position: "bottom-start",
            rootNode: tableContainerRef,
            offset: data.rowHeaderCustomPopover.offset,
            children: child,
            trigger: data.rowHeaderCustomPopover.trigger,
            delay: data.rowHeaderCustomPopover.delay,
            popoverContent: () =>
                buildPopoverContent(data.rowHeaderCustomPopover),
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
                                    $isClickable={!!optionalProps.onNameClick}
                                    onClick={(event: React.MouseEvent) =>
                                        handleRowNameClick(data, event)
                                    }
                                    weight="semibold"
                                    id={`${data.id}-row-header-title-id`}
                                    data-testid={`${data.id}-row-header-title`}
                                >
                                    {data.name}
                                </ClickableRowHeaderTitle>

                                <RowHeaderSubtitle
                                    weight="bold"
                                    $show={!!data.subtitle}
                                    id={`${data.id}-row-header-subtitle-id`}
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
        if (isLoading || !loadMore) return;
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
                    id={`${columnHeader}-column-id`}
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
        if (isLoading) return <Loader $isEmptyContent={isEmptyContent} />;
        return (
            <ContentContainer
                data-testid="content-container-id"
                ref={contentContainerRef}
                $numOfRows={rowData.length}
            >
                {rowData.map((data, _) => {
                    return (
                        <RowBar
                            key={`${data.id}-row-bar`}
                            data-testid={`${data.id}-row-bar`}
                            timetableMinTime={timetableMinTime}
                            timetableMaxTime={timetableMaxTime}
                            rowBarColor={getColorFromSequence()}
                            intervalWidth={intervalWidth}
                            onCellClick={optionalProps.onCellClick}
                            containerRef={contentContainerRef}
                            outsideOpHoursCellCustomPopover={
                                optionalProps.outsideOpHoursCellCustomPopover
                            }
                            {...data}
                        />
                    );
                })}
                {renderRowDataLazyLoad()}
            </ContentContainer>
        );
    };

    const renderRowDataLazyLoad = () => {
        if (isLoading || !loadMore) return;
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
            <EmptyTableContainer
                className="empty-container"
                $width={optionalProps.width}
                $height={optionalProps.height}
            >
                <EmptyTableRowHeader>
                    <TimeTableNavigator
                        selectedDate={date}
                        isLoading={isLoading || loadMore}
                        tableContainerRef={tableContainerRef}
                        {...optionalProps}
                    />
                </EmptyTableRowHeader>
                {!isLoading ? (
                    <NoResultsFound
                        type="no-item-found"
                        illustrationScheme={
                            optionalProps.emptyContent.illustrationScheme
                        }
                        description={optionalProps.emptyContent.description}
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
            id="timetable-container-id"
            data-testid="timetable-container-id"
            $loading={isLoading}
            $height={optionalProps.height}
            $width={optionalProps.width}
            $allRecordsLoaded={allRecordsLoaded || !onPage}
        >
            <RowColumnHeader
                $isScrolledY={isScrolledY}
                $isScrolledX={isScrolledX}
            >
                <TimeTableNavigator
                    selectedDate={date}
                    isLoading={isLoading || loadMore}
                    tableContainerRef={tableContainerRef}
                    {...optionalProps}
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
