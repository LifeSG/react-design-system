import { Person2Icon, PinIcon } from "@lifesg/react-icons";
import dayjs, { Dayjs } from "dayjs";
import styled from "styled-components";
import { Color } from "../../src/color";
import { Text } from "../../src/text";
import { CellType, RowData, TimeTableProps } from "../../src/timetable/types";
import lazyLoadData from "./timetable-lazy-load-data.json";
import timeTableOddDays from "./timetable-data-odd-days.json";
import timeTableEvenDays from "./timetable-data-even-days.json";

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

const mapper = (resource) => {
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
};

const fetchRowData = (date: Dayjs) => {
    const isEven = date.day() % 2 === 0;
    if (isEven) {
        return timeTableEvenDays.resources.map((resource) => mapper(resource));
    }
    return timeTableOddDays.resources.map((resource) => mapper(resource));
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
        onNameClick: function (rowData: RowData): void {
            alert(`Clicked on ${JSON.stringify(rowData)}`);
        },
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
                    ...(slot.status === "OCCUPIED" && {
                        filledBlockClickContent: (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    rowGap: "2rem",
                                    padding: "16px, 16px, 32px, 32px",
                                }}
                            >
                                <div>
                                    <Text.H3 weight={"semibold"}>
                                        {resource.title}
                                    </Text.H3>
                                    <Text.H4 weight={"semibold"}>
                                        {dayjs().format("D MMM YYYY, ddd")}{" "}
                                        {`${dayjs(
                                            slot.startTime,
                                            "HH:mm"
                                        ).format("HH:mma")} - ${dayjs(
                                            slot.endTime,
                                            "HH:mm"
                                        ).format("HH:mma")}`}
                                    </Text.H4>
                                </div>
                                <div>
                                    <Text.H5
                                        style={{
                                            color: `${Color.Neutral[3]}`,
                                        }}
                                    >
                                        Booking owner
                                    </Text.H5>
                                    <Text.Body>{slot.label}</Text.Body>
                                    <a
                                        onClick={() =>
                                            alert("email copied to clipboard")
                                        }
                                    >
                                        name@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <Text.H5
                                        style={{
                                            color: `${Color.Neutral[3]}`,
                                        }}
                                    >
                                        Booking title
                                    </Text.H5>
                                    <Text.Body>{slot.title}</Text.Body>
                                </div>
                            </div>
                        ),
                    }),
                };
            }),
        };
    });
};
