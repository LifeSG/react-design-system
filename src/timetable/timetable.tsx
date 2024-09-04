import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { CalendarHelper } from "../util";
import { RowBar } from "./row-bar";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import {
    ClickableRowHeaderTitle,
    ColumnHeader,
    ColumnHeaderRow,
    ColumnHeaderTitle,
    ContentContainer,
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
    ROW_BAR_COLOR_SEQUENCE,
    ROW_INTERVAL,
    RowBarProps,
    TimeTableProps,
} from "./types";

export const TimeTable = ({
    date,
    rowBars,
    isLoading = false,
    onPage,
    minTime = "06:00",
    maxTime = "22:00",
    ...optionalProps
}: TimeTableProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const timetableMinTime = CalendarHelper.roundToNearestHour(minTime);
    const timetableMaxTime = CalendarHelper.roundToNearestHour(maxTime);
    const hourlyIntervals = CalendarHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const isEmptyContent = optionalProps.totalRecords === 0 || isEmpty(rowBars);
    const allRecordsLoaded =
        isEmptyContent || rowBars.length === optionalProps.totalRecords;
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const contentContainerRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [intervalWidth, setIntervalWidth] = useState(0);
    const [loadMore, setLoadMore] = useState(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        const handleScroll = () => {
            if (tableContainerRef.current) {
                setScrollX(tableContainerRef.current.scrollLeft);
                setScrollY(tableContainerRef.current.scrollTop);
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
        };

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
    }, [rowBars]);

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

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    let colorIndex = 0;
    const colorSequenceLength = ROW_BAR_COLOR_SEQUENCE.length;
    const mappedRowBarWithColor: RowBarProps[] = rowBars.map((row) => {
        const rowBarColor = ROW_BAR_COLOR_SEQUENCE[colorIndex];
        colorIndex = (colorIndex + 1) % colorSequenceLength;
        return {
            ...row,
            timetableMaxTime,
            timetableMinTime,
            rowMinTime: row.rowMinTime,
            rowMaxTime: row.rowMaxTime,
            rowBarColor,
            intervalWidth,
            containerRef: contentContainerRef,
        };
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderRowHeaderColumn = () => {
        if (isEmptyContent) return;
        return (
            <>
                {mappedRowBarWithColor.map((rowBarData, index) => {
                    return (
                        <StyledPopoverTrigger
                            key={`${index}-row`}
                            popoverContent={rowBarData.rowHeaderHoverContent}
                            position="bottom-start"
                            rootNode={tableContainerRef}
                            zIndex={2}
                            removePadding
                            offset={0}
                            trigger="hover"
                        >
                            <RowHeader
                                $isScrolled={scrollX > 0}
                                key={`${index}-row`}
                            >
                                <ClickableRowHeaderTitle
                                    onClick={() =>
                                        optionalProps.onNameClick(rowBarData.id)
                                    }
                                    weight="semibold"
                                    id={`${rowBarData.id}-row-header-title-id`}
                                    data-testid={`${rowBarData.id}-row-header-title`}
                                >
                                    {rowBarData.name}
                                </ClickableRowHeaderTitle>
                                <RowHeaderSubtitle
                                    weight="bold"
                                    id={`${rowBarData.id}-row-header-subtitle-id`}
                                    data-testid={`${rowBarData.id}-row-header-subtitle`}
                                >
                                    {rowBarData.subtitle}
                                </RowHeaderSubtitle>
                            </RowHeader>
                        </StyledPopoverTrigger>
                    );
                })}
                {renderRowHeaderColumnLazyLoad()}
            </>
        );
    };

    const renderRowHeaderColumnLazyLoad = () => {
        if (isLoading || !loadMore) return;
        return (
            <RowHeader $isScrolled={scrollX > 0}>
                <LoadingBar />
            </RowHeader>
        );
    };

    const renderColumnHeaders = () => {
        // Don't render first column if there are no rows
        if (isEmptyContent) return;
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
        if (isEmptyContent) return;
        if (isLoading) return <Loader />;
        return (
            <ContentContainer ref={contentContainerRef}>
                {mappedRowBarWithColor.map((rowBarData, index) => {
                    return (
                        <RowBar
                            key={`${index}-row-bar-key`}
                            id={rowBarData.id}
                            data-testid={`${rowBarData.id}-row-bar`}
                            name={rowBarData.name}
                            rowMinTime={rowBarData.rowMinTime}
                            rowMaxTime={rowBarData.rowMaxTime}
                            rowCells={rowBarData.rowCells}
                            timetableMinTime={timetableMinTime}
                            timetableMaxTime={timetableMaxTime}
                            rowBarColor={rowBarData.rowBarColor}
                            intervalWidth={rowBarData.intervalWidth}
                            onEmptyCellClick={optionalProps.onEmptyCellClick}
                            containerRef={rowBarData.containerRef}
                            disabledCellHoverContent={
                                optionalProps.disabledCellHoverContent
                            }
                            emptyCellClickContent={
                                optionalProps.emptyCellClickContent
                            }
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
            <LoadingWrapper>
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

    return (
        <TimeTableContainer
            ref={tableContainerRef}
            id="timetable-container-id"
            $loading={isLoading}
        >
            <RowColumnHeader
                $isScrolledY={scrollY > 0}
                $isScrolledX={scrollX > 0}
            >
                <TimeTableNavigator
                    selectedDate={date}
                    isLoading={isLoading}
                    {...optionalProps}
                />
            </RowColumnHeader>
            <RowHeaderColumn
                $numOfRows={mappedRowBarWithColor.length}
                $isScrolled={scrollY > 0 || scrollX > 0}
            >
                {renderRowHeaderColumn()}
            </RowHeaderColumn>
            <ColumnHeaderRow
                $numOfColumns={hourlyIntervals.length}
                $isScrolled={scrollY > 0}
            >
                {renderColumnHeaders()}
            </ColumnHeaderRow>
            {renderRowBarData()}
            <NoResultsFound
                $show={isEmptyContent}
                type="no-item-found"
                illustrationScheme={
                    optionalProps.emptyContent.illustrationScheme
                }
                description={optionalProps.emptyContent.description}
            />
        </TimeTableContainer>
    );
};
