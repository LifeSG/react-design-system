import { useEffect, useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import { Button } from "../button";
import { CalendarHelper, DateHelper } from "../util";
import { RowBar, RowBarProps } from "./row-bar";
import { TimeTableNavigator } from "./timetable-navigator/timetable-navigator";
import {
    ClickableRowHeaderTitle,
    ColumnHeader,
    ColumnHeaderTitle,
    Loader,
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

    // =============================================================================
    // EFFECTS
    // =============================================================================
    const resizeDetector = useResizeDetector();
    useEffect(() => {
        const numberOfIntervalsPerRowBar = Math.ceil(
            (hourlyIntervals.length * 60) / interval
        );
        const widthOfRowBar = resizeDetector.width;
        const width =
            widthOfRowBar / numberOfIntervalsPerRowBar > 21
                ? widthOfRowBar / numberOfIntervalsPerRowBar
                : 21;
        setIntervalWidth(width);
    }, [resizeDetector]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    // TODO - Paginated scrolling and resizing
    useResizeDetector();

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
    const mappedRowBarWithBgColour: RowBarProps[] = rowBars.map((row) => {
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
        return (
            <RowWrapper $loading={loading}>
                {mappedRowBarWithBgColour.map((rowData, index) => {
                    return (
                        <TimeTableRow
                            key={`${rowData.id}-row-key`}
                            $loading={loading}
                        >
                            <RowHeader>
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
                {loading && <Loader $numOfRows={rowBars.length} />}
            </RowWrapper>
        );
    };

    return (
        <>
            <Button.Default onClick={() => setLoading(!loading)}>
                Load
            </Button.Default>
            <TimeTableContainer id="timetable-container-id" $loading={loading}>
                <TimeTableColumns $numOfColumns={hourlyIntervals.length}>
                    <TimeTableNavigator
                        selectedDate={selectedDate}
                        variant={headerVariant}
                        isLoading={loading}
                        setSelectedDate={setSelectedDate}
                        {...optionalProps}
                    />
                    {renderColumnHeaders()}
                </TimeTableColumns>
                {renderRows()}
            </TimeTableContainer>
        </>
    );
};
