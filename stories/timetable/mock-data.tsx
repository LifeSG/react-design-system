import { Person2Icon, PinIcon } from "@lifesg/react-icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { Text } from "../../src/text";
import { TimeTableCellType, TimeTableProps } from "../../src/timetable/types";
import { evenDaysData } from "./timetable-even-days-data";
import lazyLoadData from "./timetable-lazy-load-data.json";
import { oddDaysData } from "./timetable-odd-days-data";

export const StyledHoverContent = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

const cellTypeMap: Record<string, TimeTableCellType> = {
    OCCUPIED: "filled",
    DISABLED: "blocked",
    DEFAULT: "default",
    PENDING: "pending",
};

const fetchRowData = (date: Dayjs) => {
    const isEven = date.day() % 2 === 0;
    if (isEven) {
        return evenDaysData;
    }
    return oddDaysData;
};

export const getTimeTableData = (
    currentDate?: string
): Partial<TimeTableProps> => {
    const date = dayjs(currentDate);

    return {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:00:00",
        maxTime: "23:00:00",
        rowData: fetchRowData(date),
    };
};

export const lazyLoad = (page: number) => {
    const limit = 10;
    const pageStart = (page - 1) * limit;
    const pageEnd = page * limit;

    const currentPageItems = lazyLoadData.resources.slice(pageStart, pageEnd);

    return currentPageItems.map((resource) => {
        return {
            id: resource.id,
            name: resource.title,
            rowMinTime: resource.timelines[0].startTime,
            rowMaxTime: resource.timelines[0].endTime,
            subtitle: (
                <>
                    <Person2Icon />
                    {resource.capacity}
                </>
            ),
            rowHeaderHoverContent: (
                <>
                    <Text.Body weight={"regular"}>{resource.title}</Text.Body>
                    <StyledHoverContent>
                        <PinIcon />
                        <Text.H6 weight={"semibold"}>
                            {resource.subtitle}
                        </Text.H6>
                    </StyledHoverContent>
                </>
            ),
            rowCells: resource.timelines[0].slots.map((slot) => {
                return {
                    id: slot.id,
                    startTime: slot.startTime,
                    endTime: slot.endTime,
                    title: slot.title,
                    subtitle: slot.label,
                    status: cellTypeMap[slot.status],
                };
            }),
        };
    });
};
