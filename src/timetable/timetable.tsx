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
    rows,
    isLoading = false,
    headerVariant = "all",
    ...optionalProps
}: TimeTableProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const [selectedDate, setSelectedDate] = useState<string>(date);
    const [loading, setLoading] = useState<boolean>(isLoading);
    const hourlyIntervals = CalendarHelper.generateHourlyIntervals(
        timetableMinTime,
        timetableMaxTime
    );
    const [widthOf15minBlock, setWidthOf15minBlock] = useState(0);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    const resizeDetector = useResizeDetector();
    useEffect(() => {
        const numberOfCells = Math.ceil(
            DateHelper.getTimeDiffInMinutes(
                timetableMinTime,
                timetableMaxTime
            ) / 15
        );
        const width =
            resizeDetector.width / numberOfCells > 21
                ? resizeDetector.width / numberOfCells
                : 21;
        setWidthOf15minBlock(width);
    }, [resizeDetector]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    // TODO - Paginated scrolling and resizing
    useResizeDetector();

    // ===========================================================================
    // HELPER FUNCTIONS
    // ===========================================================================
    const backgroundColourSequence = [
        "#FFE6BB",
        "#D8EFEB",
        "#E6EAFE",
        "#FAE4E5",
        "#D3EEFC",
    ];
    let colourIndex = 0;
    const mappedRowCellsWithBgColour: RowBarProps[] = rows.map((row) => {
        const bgColour = backgroundColourSequence[colourIndex];
        // Increment the colourIndex and reset it if it reaches the end of the sequence
        colourIndex++;
        if (colourIndex >= backgroundColourSequence.length) {
            colourIndex = 0;
        }
        return {
            ...row,
            timetableMaxTime,
            timetableMinTime,
            rowMinTime: row.rowMinTime,
            rowMaxTime: row.rowMaxTime,
            bgColour,
            blockUnit: widthOf15minBlock,
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
                {mappedRowCellsWithBgColour.map((rowData, index) => {
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
                                    isFirst={index === 0}
                                    key={rowData.id}
                                    id={rowData.id}
                                    name={rowData.name}
                                    rowMinTime={rowData.rowMinTime}
                                    rowMaxTime={rowData.rowMaxTime}
                                    rowBlocks={rowData.rowBlocks}
                                    timetableMinTime={timetableMinTime}
                                    timetableMaxTime={timetableMaxTime}
                                    bgColour={rowData.bgColour}
                                    blockUnit={rowData.blockUnit}
                                />
                            )}
                        </TimeTableRow>
                    );
                })}
                {loading && <Loader $numOfRows={rows.length} />}
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
