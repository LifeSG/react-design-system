import { Person2Icon, PinIcon } from "@lifesg/react-icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { Text } from "../../src/text";
import { CellType, TimeTableProps } from "../../src/timetable/types";
import { evenDaysData } from "./new-even-days";
import { oddDaysData } from "./new-odd-days";
import lazyLoadData from "./timetable-lazy-load-data.json";

export const StyledHoverContent = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px;
`;

const cellTypeMap: Record<string, CellType> = {
    OCCUPIED: "filled",
    DISABLED: "blocked",
    DEFAULT: "default",
};

const fetchRowData = (date: Dayjs) => {
    const isEven = date.day() % 2 === 0;
    if (isEven) {
        return evenDaysData;
    }
    return oddDaysData;
};

export const getTimeTableData = (currentDate?: string): TimeTableProps => {
    const date = dayjs(currentDate);

    return {
        date: date.format("YYYY-MM-DD"),
        minTime: "06:20:00",
        maxTime: "22:00:00",
        maxDate: date.add(1, "month").format("YYYY-MM-DD"),
        minDate: date.add(-11, "month").format("YYYY-MM-DD"),
        totalRecords: 10,
        rowData: fetchRowData(date),
        emptyContent: {
            illustrationScheme: "bookingsg",
            description:
                "There’s no data to show. You may need to adjust your search or filters. If you believe this is a mistake, try refreshing the page.",
        },
        isLoading: false,
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
                    title: slot.label,
                    subtitle: slot.label,
                    status: cellTypeMap[slot.status],
                };
            }),
        };
    });
};
