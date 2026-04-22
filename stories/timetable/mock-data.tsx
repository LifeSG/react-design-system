import { Person2Icon } from "@lifesg/react-icons";
import { TimeTableCellType, TimeTableRowData } from "src/timetable";
import styled from "styled-components";
import { timetableDefaultData } from "./timetable-default-data";
import lazyLoadData from "./timetable-lazy-load-data.json";

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

export const fetchTimeTableData = async (): Promise<TimeTableRowData[]> => {
    await new Promise((r) => setTimeout(r, 1000));
    return timetableDefaultData;
};

export const buildTimeTableData = (page: number): TimeTableRowData[] => {
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

export const lazyLoadTimeTableData = async (
    page: number
): Promise<TimeTableRowData[]> => {
    await new Promise((r) => setTimeout(r, 1000));
    return buildTimeTableData(page);
};
