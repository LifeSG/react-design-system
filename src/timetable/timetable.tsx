import { isEmpty, throttle } from "lodash";
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
    const [scrollX, setScrollX] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [intervalWidth, setIntervalWidth] = useState<number>(0);
    const [loadMore, setLoadMore] = useState<boolean>(false);

    // =============================================================================
    // EFFECTS
    // =============================================================================

    useEffect(() => {
        const handleScroll = throttle(() => {
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

    const handleRowNameClick = (rowBarData: RowData, e: React.MouseEvent) => {
        if (optionalProps.onNameClick) {
            optionalProps.onNameClick(rowBarData, e);
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
    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderRowHeaderColumn = () => {
        if (isEmptyContent) return;
        return (
            <>
                {rowData.map((data, _) => {
                    return (
                        <StyledPopoverTrigger
                            key={`${data.id}-popover-trigger`}
                            popoverContent={data.rowHeaderHoverContent}
                            position="bottom-start"
                            rootNode={tableContainerRef}
                            zIndex={2}
                            removePadding
                            offset={6}
                            trigger="hover"
                        >
                            <RowHeader
                                $isScrolled={scrollX > 0}
                                key={`${data.id}-row-header`}
                            >
                                <ClickableRowHeaderTitle
                                    onClick={(e: React.MouseEvent) =>
                                        handleRowNameClick(data, e)
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
            <ContentContainer
                ref={contentContainerRef}
                $numOfRows={rowData.length}
                $filledCellPopover={optionalProps.filledCellPopoverSize}
                $disabledCellPopover={optionalProps.disabledCellPopoverSize}
            >
                {rowData.map((data, _) => {
                    return (
                        <RowBar
                            key={`${data.id}-row-bar`}
                            data-testid={`${data.id}-row-bar-test`}
                            timetableMinTime={timetableMinTime}
                            timetableMaxTime={timetableMaxTime}
                            rowBarColor={getColorFromSequence()}
                            intervalWidth={intervalWidth}
                            onEmptyCellClick={optionalProps.onEmptyCellClick}
                            containerRef={contentContainerRef}
                            disabledCellHoverContent={
                                optionalProps.disabledCellHoverContent
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
            $height={optionalProps.height}
            $width={optionalProps.width}
        >
            <RowColumnHeader
                $isScrolledY={scrollY > 0}
                $isScrolledX={scrollX > 0}
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
