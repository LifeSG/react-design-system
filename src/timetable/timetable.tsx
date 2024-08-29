import { isEmpty } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { CalendarHelper } from "../util";
import { RowBar } from "./row-bar";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import {
    ClickableRowHeaderTitle,
    ColumnHeader,
    ColumnHeaderTitle,
    FirstRowColumn,
    Loader,
    LoadingBar,
    LoadingCell,
    LoadingWrapper,
    NoResultsFound,
    RowHeader,
    RowHeaderSubtitle,
    RowWrapper,
    TimeTableColumns,
    TimeTableContainer,
    TimeTableRow,
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
    const allRecordsLoaded =
        !optionalProps.totalRecords ||
        rowBars.length === 0 ||
        rowBars.length === optionalProps.totalRecords;
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const [intervalWidth, setIntervalWidth] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
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
        };
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderColumnHeaders = () => {
        // REVIEW - Dont render first column if there are no rows (why ah?)
        if (optionalProps.totalRecords === 0) return;
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

    const renderRows = () => {
        if (mappedRowBarWithColor.length === 0) return;
        return (
            <RowWrapper $loading={isLoading}>
                {mappedRowBarWithColor.map((rowData, index) => {
                    return (
                        <TimeTableRow
                            key={`${rowData.id}-row-key`}
                            $loading={isLoading}
                        >
                            <RowHeader $isScrolled={scrollX > 0}>
                                <ClickableRowHeaderTitle
                                    onClick={() =>
                                        optionalProps.onNameClick(rowData.id)
                                    }
                                    weight="semibold"
                                    id={`${rowData.id}-row-header-title-id`}
                                    data-testid={`${rowData.id}-row-header-title`}
                                >
                                    {rowData.name}
                                </ClickableRowHeaderTitle>
                                <RowHeaderSubtitle
                                    weight="bold"
                                    id={`${rowData.id}-row-header-subtitle-id`}
                                    data-testid={`${rowData.id}-row-header-subtitle`}
                                >
                                    {rowData.subtitle}
                                </RowHeaderSubtitle>
                            </RowHeader>
                            {!isLoading && (
                                <RowBar
                                    key={`${rowData.id}-row-bar-key`}
                                    id={rowData.id}
                                    data-testid={`${rowData.id}-row-bar`}
                                    name={rowData.name}
                                    rowMinTime={rowData.rowMinTime}
                                    rowMaxTime={rowData.rowMaxTime}
                                    rowCells={rowData.rowCells}
                                    timetableMinTime={timetableMinTime}
                                    timetableMaxTime={timetableMaxTime}
                                    rowBarColor={rowData.rowBarColor}
                                    intervalWidth={rowData.intervalWidth}
                                />
                            )}
                        </TimeTableRow>
                    );
                })}
                {isLoading && <Loader $numOfRows={rowBars.length} />}
                {renderLazyLoad()}
            </RowWrapper>
        );
    };

    const renderLazyLoad = () => {
        if (isLoading || !loadMore) return;
        return (
            <TimeTableRow key={`lazy-loading-row-key`} $loading={isLoading}>
                <RowHeader $isScrolled={scrollX > 0}>
                    <LoadingBar />
                </RowHeader>
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
            </TimeTableRow>
        );
    };

    return (
        <>
            <TimeTableContainer
                ref={tableContainerRef}
                id="timetable-container-id"
                $loading={isLoading}
            >
                <TimeTableColumns
                    $numOfColumns={hourlyIntervals.length}
                    $isScrolled={scrollY > 0}
                >
                    <FirstRowColumn $isScrolled={scrollY > 0 || scrollX > 0}>
                        <TimeTableNavigator
                            selectedDate={date}
                            isLoading={isLoading}
                            {...optionalProps}
                        />
                    </FirstRowColumn>
                    {renderColumnHeaders()}
                </TimeTableColumns>
                {renderRows()}
                <NoResultsFound
                    $show={optionalProps.totalRecords === 0 || isEmpty(rowBars)}
                    type="no-item-found"
                    illustrationScheme={
                        optionalProps.emptyContent.illustrationScheme
                    }
                    description={optionalProps.emptyContent.description}
                />
            </TimeTableContainer>
        </>
    );
};
