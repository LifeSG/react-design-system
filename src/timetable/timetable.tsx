import { useCallback, useEffect, useRef, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Button } from "../button";
import { CalendarHelper } from "../util";
import { RowBar, RowBarProps } from "./row-bar";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import {
    ClickableRowHeaderTitle,
    ColumnHeader,
    ColumnHeaderTitle,
    FirstRowColumn,
    LazyLoadContainer,
    Loader,
    LoadingCell,
    LoadingCellWrapper,
    RowHeader,
    RowHeaderSubtitle,
    RowWrapper,
    TimeTableColumns,
    TimeTableContainer,
    TimeTableRow,
} from "./timetable.style";
import { TimeTableProps } from "./types";

export const TimeTable = ({
    date,
    timetableMinTime,
    timetableMaxTime,
    rowBars,
    isLoading = false,
    headerVariant = "all",
    ...optionalProps
}: TimeTableProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const interval = 15;
    const [selectedDate, setSelectedDate] = useState<string>(date);
    const [loading, setLoading] = useState<boolean>(isLoading);
    const [intervalWidth, setIntervalWidth] = useState(0);
    const hourlyIntervals = CalendarHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const tableContainerRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [results, setResults] = useState(rowBars);
    const [loadingMoreRows, setLoadingMoreRows] = useState(false);
    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        const tableContainer = tableContainerRef.current;
        if (tableContainer) {
            tableContainer.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (tableContainer) {
                tableContainer.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        setResults(rowBars);
        setLoadingMoreRows(false);
    }, [rowBars]);

    useEffect(() => {
        if (!loadingMoreRows) return;
        if (tableContainerRef.current) {
            tableContainerRef.current.scrollTop =
                tableContainerRef.current.scrollHeight;
        }
        optionalProps.onPage();
    }, [loadingMoreRows]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleResize = () => {
        if (tableContainerRef.current) {
            const numberOfIntervalsPerRowBar = Math.ceil(
                (hourlyIntervals.length * 60) / interval
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

    const handleScroll = useCallback(() => {
        if (tableContainerRef.current) {
            setScrollX(tableContainerRef.current.scrollLeft);
            setScrollY(tableContainerRef.current.scrollTop);
        }

        const { scrollTop, clientHeight, scrollHeight } =
            tableContainerRef.current;
        const isEndOfTableContainerReached =
            Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        const allRowsLoaded = results.length === optionalProps.totalRecords;

        if (loadingMoreRows) return;
        if (isEndOfTableContainerReached && !allRowsLoaded) {
            setLoadingMoreRows(true);
        }
    }, [results]);

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const rowBarBgColourSequence = [
        "#FFE6BB",
        "#D8EFEB",
        "#E6EAFE",
        "#FAE4E5",
        "#D3EEFC",
    ];
    let colourIndex = 0;
    const mappedRowBarWithBgColour: RowBarProps[] = results.map((row) => {
        const bgColour = rowBarBgColourSequence[colourIndex];
        // Increment the colourIndex and reset it if it reaches the end of the sequence
        colourIndex++;
        if (colourIndex >= rowBarBgColourSequence.length) {
            colourIndex = 0;
        }
        return {
            ...row,
            timetableMaxTime,
            timetableMinTime,
            rowMinTime: row.rowMinTime,
            rowMaxTime: row.rowMaxTime,
            bgColour,
            intervalWidth,
        };
    });

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderColumnHeaders = () => {
        // Dont render first column if there are no rows
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
        if (mappedRowBarWithBgColour.length === 0) return;
        return (
            <RowWrapper $loading={loading}>
                {mappedRowBarWithBgColour.map((rowData, index) => {
                    return (
                        <TimeTableRow
                            key={`${rowData.id}-row-key`}
                            $loading={loading}
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
                            {!loading && (
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
                                    bgColour={rowData.bgColour}
                                    intervalWidth={rowData.intervalWidth}
                                />
                            )}
                        </TimeTableRow>
                    );
                })}
                {loading && <Loader $numOfRows={results.length} />}
                {loadingMoreRows && (
                    <TimeTableRow
                        key={`lazy-loading-row-key`}
                        $loading={loading}
                    >
                        <RowHeader $isScrolled={scrollX > 0}>
                            <LoadingCell />
                        </RowHeader>
                        <LazyLoadContainer>
                            {Array.from(
                                {
                                    length: hourlyIntervals.length,
                                },
                                (_, index) => {
                                    return (
                                        <LoadingCellWrapper
                                            key={`lazy-load-cell-${index}`}
                                            $width={intervalWidth * 4}
                                        >
                                            <LoadingCell />
                                        </LoadingCellWrapper>
                                    );
                                }
                            )}
                        </LazyLoadContainer>
                    </TimeTableRow>
                )}
            </RowWrapper>
        );
    };

    return (
        <>
            <Button.Default onClick={() => setLoading(!loading)}>
                Load
            </Button.Default>
            <TimeTableContainer
                ref={tableContainerRef}
                id="timetable-container-id"
                $loading={loading}
            >
                <TimeTableColumns
                    $numOfColumns={hourlyIntervals.length}
                    $isScrolled={scrollY > 0}
                >
                    <FirstRowColumn $isScrolled={scrollY > 0 || scrollX > 0}>
                        <TimeTableNavigator
                            selectedDate={selectedDate}
                            variant={headerVariant}
                            isLoading={loading}
                            {...optionalProps}
                        />
                    </FirstRowColumn>
                    {renderColumnHeaders()}
                </TimeTableColumns>
                {renderRows()}
                {/* <NoResultsFound
                    show={optionalProps.totalRecords === 0}
                    type="no-item-found"
                    illustrationScheme={optionalProps.emptyContent.illustrationScheme}
                    description={optionalProps.emptyContent.description} /> */}
            </TimeTableContainer>
        </>
    );
};
