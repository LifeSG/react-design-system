import { PinIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Card } from "src/card";
import { Colour } from "src/theme";
import {
    TimeTable,
    TimeTablePopoverProps,
    TimeTableRowCellData,
    TimeTableRowData,
} from "src/timetable";
import { Typography } from "src/typography";
import styled from "styled-components";
import {
    StyledHoverContent,
    buildTimeTableData,
    fetchTimeTableData,
    lazyLoadTimeTableData,
} from "./mock-data";
import { timetableDefaultData } from "./timetable-default-data";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Selection and input/TimeTable",
    component: TimeTable,
};

export default meta;

const StyledTimeTable = styled(TimeTable)`
    [data-id="timetable-container"] {
        width: 900px;
        height: 400px;
    }
`;
StyledTimeTable.displayName = "TimeTable";

const StyledCustomPopoverCard = styled(Card)`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 400px;
    padding: 3rem;
`;

export const Default: StoryObj<Component> = {
    render: () => {
        const [results, setResults] =
            useState<TimeTableRowData[]>(timetableDefaultData);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await fetchTimeTableData();
            setResults(results);
            setLoading(false);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await fetchTimeTableData();
            setResults(results);
            setLoading(false);
        };

        return (
            <StyledTimeTable
                date={date}
                minTime={"06:00"}
                maxTime={"23:59"}
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
            />
        );
    },
};

export const LazyLoading: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");
        const [results, setResults] = useState<TimeTableRowData[]>([]);
        const [date, setDate] = useState(today);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);

        useEffect(() => {
            const fetchData = async () => {
                const results = await lazyLoadTimeTableData(1);
                setResults(results);
                setLoading(false);
            };

            fetchData();
        }, []);

        const onPage = async () => {
            setPage(page + 1);

            const results = await lazyLoadTimeTableData(page + 1);
            setResults((prev) => [...prev, ...results]);
            setLoading(false);
        };

        const onPreviousDayClick = async (currentDate: string) => {
            setPage(1);
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await lazyLoadTimeTableData(1);
            setResults(results);
            setLoading(false);
        };

        const onNextDayClick = async (currentDate: string) => {
            setPage(1);
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await lazyLoadTimeTableData(page + 1);
            setResults(results);
            setLoading(false);
        };

        const onRefresh = async () => {
            setLoading(true);
            setPage(1);

            const results = await lazyLoadTimeTableData(1);
            setResults(results);
            setLoading(false);
        };

        const onCalendarDateSelect = async (currentDate: string) => {
            setPage(1);
            setDate(currentDate);
            setLoading(true);

            const results = await lazyLoadTimeTableData(1);
            setResults(results);
            setLoading(false);
        };

        return (
            <StyledTimeTable
                date={date}
                minTime="06:00"
                maxTime="20:00"
                minDate={dayjs(today).subtract(2, "days").format("YYYY-MM-DD")}
                maxDate={dayjs(today).add(2, "days").format("YYYY-MM-DD")}
                rowData={results}
                loading={loading}
                onRefresh={onRefresh}
                onPage={onPage}
                totalRecords={50}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
};

export const CustomPopovers: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");

        const formatTime = (time: string) => {
            return dayjs(time, "HH:mm").format("HH:mma");
        };

        const buildCustomPopover = (
            row: TimeTableRowData,
            cell: TimeTableRowCellData
        ): TimeTablePopoverProps | undefined => {
            switch (cell.status) {
                case "filled": {
                    return {
                        trigger: "hover",
                        content: () => (
                            <StyledCustomPopoverCard>
                                <div>
                                    <Typography.HeadingSM weight="semibold">
                                        {row.name}
                                    </Typography.HeadingSM>
                                    <Typography.HeadingXS weight="semibold">
                                        {`${formatTime(
                                            cell.startTime
                                        )} - ${formatTime(cell.endTime)}`}
                                    </Typography.HeadingXS>
                                </div>
                                <div>
                                    <Typography.BodyBL weight="semibold">
                                        Title
                                    </Typography.BodyBL>
                                    <Typography.BodyBL>
                                        {cell.title}
                                    </Typography.BodyBL>
                                </div>
                                <div>
                                    <Typography.BodyBL weight="semibold">
                                        Description
                                    </Typography.BodyBL>
                                    <Typography.BodyBL>
                                        {cell.subtitle}
                                    </Typography.BodyBL>
                                </div>
                            </StyledCustomPopoverCard>
                        ),
                        offset: 0,
                        delay: { open: 500, close: 1000 },
                    };
                }
                case "default": {
                    return {
                        trigger: "hover",
                        content: () => <Card>Available</Card>,
                        offset: 0,
                        delay: { open: 0, close: 0 },
                    };
                }
            }
        };

        const rowData = buildTimeTableData(1).map((row): TimeTableRowData => {
            return {
                ...row,
                rowHeaderPopover: {
                    trigger: "hover",
                    content: () => (
                        <Card>
                            <Typography.BodyBL weight={"regular"}>
                                {row.name}
                            </Typography.BodyBL>
                            <StyledHoverContent>
                                <PinIcon />
                                Eclipse
                            </StyledHoverContent>
                        </Card>
                    ),
                    offset: 0,
                    delay: { open: 500, close: 0 },
                },
                outOfRangeCellPopover: {
                    trigger: "hover",
                    content: () => <Card>Outside operating hours</Card>,
                    offset: 0,
                    delay: { open: 0, close: 0 },
                },
                rowCells: row.rowCells.map((cell) => {
                    return {
                        ...cell,
                        customPopover: buildCustomPopover(row, cell),
                    };
                }),
            };
        });

        const onPreviousDayClick = () => {
            // do nothing
        };

        const onNextDayClick = () => {
            // do nothing
        };

        return (
            <StyledTimeTable
                date={today}
                minTime="06:00:00"
                maxTime="23:00:00"
                rowData={rowData}
                totalRecords={rowData.length}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
            />
        );
    },
};

export const EmptyContent: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().format("YYYY-MM-DD");

        const onPreviousDayClick = () => {
            // do nothing
        };

        const onNextDayClick = () => {
            // do nothing
        };

        return (
            <StyledTimeTable
                date={today}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                totalRecords={0}
                rowData={[]}
                emptyContentMessage={
                    "There’s no data to show. You may need to adjust your search or filters. If you believe this is a mistake, try refreshing the page."
                }
            />
        );
    },
};

export const InitialScrollTime: StoryObj<Component> = {
    render: () => {
        const [results, setResults] =
            useState<TimeTableRowData[]>(timetableDefaultData);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await fetchTimeTableData();
            setResults(results);
            setLoading(false);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);

            const results = await fetchTimeTableData();
            setResults(results);
            setLoading(false);
        };

        return (
            <StyledTimeTable
                date={date}
                minTime={"06:00"}
                maxTime={"23:59"}
                rowData={results}
                loading={loading}
                initialScrollTime="15:00"
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
            />
        );
    },
};
export const CustomCellColors: StoryObj<Component> = {
    render: () => {
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

        const customColorData: TimeTableRowData[] = [
            {
                id: "1",
                name: "All custom",
                subtitle: "custom description",
                rowCells: [
                    {
                        id: "cell-1",
                        title: "Custom Filled",
                        subtitle: "1h30m slot",
                        startTime: "08:00",
                        endTime: "09:30",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2",
                        title: "Custom Blocked",
                        subtitle: "1h30m slot",
                        startTime: "10:00",
                        endTime: "11:30",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-3",
                        title: "Custom Default",
                        subtitle: "1h30m slot",
                        startTime: "12:00",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: Colour["bg-available"],
                            hoverBackgroundColor: Colour["bg-primary-hover"],
                        },
                    },
                    {
                        id: "cell-4",
                        title: "Custom Disabled",
                        subtitle: "1h30m slot",
                        startTime: "14:00",
                        endTime: "15:30",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: Colour["bg-strongest"],
                            hoverBackgroundColor: Colour["bg-stronger"],
                        },
                    },
                    {
                        id: "cell-5",
                        title: "Custom Pending",
                        subtitle: "1h30m slot",
                        startTime: "16:00",
                        endTime: "17:30",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                ],
            },
            {
                id: "2",
                name: "All custom 15 min interval",
                subtitle: "All custom 15 min interval",
                rowCells: [
                    {
                        id: "cell-2-1",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:00",
                        endTime: "08:15",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-2",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:15",
                        endTime: "08:30",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-3",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:30",
                        endTime: "08:45",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-4",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:45",
                        endTime: "09:00",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-5",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:00",
                        endTime: "09:15",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-6",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:15",
                        endTime: "09:30",
                        status: "filled",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#E3F2FD",
                            hoverBackgroundColor: "#BBDEFB",
                        },
                    },
                    {
                        id: "cell-2-7",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:00",
                        endTime: "10:15",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-8",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:15",
                        endTime: "10:30",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-9",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:30",
                        endTime: "10:45",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-10",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:45",
                        endTime: "11:00",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-11",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:00",
                        endTime: "11:15",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-12",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:15",
                        endTime: "11:30",
                        status: "blocked",
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                        },
                    },
                    {
                        id: "cell-2-13",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:00",
                        endTime: "12:15",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-14",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:15",
                        endTime: "12:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-15",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:30",
                        endTime: "12:45",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-16",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:45",
                        endTime: "13:00",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-17",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "13:00",
                        endTime: "13:15",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-18",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "13:15",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-2-19",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:00",
                        endTime: "14:15",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-20",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:15",
                        endTime: "14:30",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-21",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:30",
                        endTime: "14:45",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-22",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:45",
                        endTime: "15:00",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-23",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:00",
                        endTime: "15:15",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-24",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:15",
                        endTime: "15:30",
                        status: "disabled",
                        cellStyleAttributes: {
                            backgroundColor: "#E0E0E0",
                            hoverBackgroundColor: "#C6C6C6",
                        },
                    },
                    {
                        id: "cell-2-25",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:00",
                        endTime: "16:15",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                    {
                        id: "cell-2-26",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:15",
                        endTime: "16:30",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                    {
                        id: "cell-2-27",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:30",
                        endTime: "16:45",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                    {
                        id: "cell-2-28",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:45",
                        endTime: "17:00",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                    {
                        id: "cell-2-29",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:00",
                        endTime: "17:15",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                    {
                        id: "cell-2-30",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:15",
                        endTime: "17:30",
                        status: "pending",
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#FFF59D",
                        },
                    },
                ],
            },
            {
                id: "3",
                name: "Mixed custom and default",
                subtitle: "Mixed custom and default description",
                rowCells: [
                    {
                        id: "cell-6",
                        title: "Default Filled",
                        subtitle: "1h30m slot",
                        startTime: "08:00",
                        endTime: "09:30",
                        status: "filled",
                    },
                    {
                        id: "cell-7",
                        title: "Default Blocked",
                        subtitle: "1h30m slot",
                        startTime: "10:00",
                        endTime: "11:30",
                        status: "blocked",
                    },
                    {
                        id: "cell-8",
                        title: "Custom Default",
                        subtitle: "1h30m slot",
                        startTime: "12:00",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-9",
                        title: "Default Disabled",
                        subtitle: "1h30m slot",
                        startTime: "14:00",
                        endTime: "15:30",
                        status: "disabled",
                    },
                    {
                        id: "cell-10",
                        title: "Default Pending",
                        subtitle: "1h30m slot",
                        startTime: "16:00",
                        endTime: "17:30",
                        status: "pending",
                    },
                ],
            },
            {
                id: "3a",
                name: "Mixed custom 15min intervals",
                subtitle: "All slots in 15min intervals",
                rowCells: [
                    {
                        id: "cell-6a-1",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:00",
                        endTime: "08:15",
                        status: "filled",
                    },
                    {
                        id: "cell-6a-2",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:15",
                        endTime: "08:30",
                        status: "filled",
                    },
                    {
                        id: "cell-6a-3",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:30",
                        endTime: "08:45",
                        status: "filled",
                    },
                    {
                        id: "cell-6a-4",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:45",
                        endTime: "09:00",
                        status: "filled",
                    },
                    {
                        id: "cell-6a-5",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:00",
                        endTime: "09:15",
                        status: "filled",
                    },
                    {
                        id: "cell-6a-6",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:15",
                        endTime: "09:30",
                        status: "filled",
                    },
                    {
                        id: "cell-7a-1",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:00",
                        endTime: "10:15",
                        status: "blocked",
                    },
                    {
                        id: "cell-7a-2",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:15",
                        endTime: "10:30",
                        status: "blocked",
                    },
                    {
                        id: "cell-7a-3",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:30",
                        endTime: "10:45",
                        status: "blocked",
                    },
                    {
                        id: "cell-7a-4",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:45",
                        endTime: "11:00",
                        status: "blocked",
                    },
                    {
                        id: "cell-7a-5",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:00",
                        endTime: "11:15",
                        status: "blocked",
                    },
                    {
                        id: "cell-7a-6",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:15",
                        endTime: "11:30",
                        status: "blocked",
                    },
                    {
                        id: "cell-8a-1",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:00",
                        endTime: "12:15",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-8a-2",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:15",
                        endTime: "12:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-8a-3",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:30",
                        endTime: "12:45",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-8a-4",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "12:45",
                        endTime: "13:00",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-8a-5",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "13:00",
                        endTime: "13:15",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-8a-6",
                        title: "Default",
                        subtitle: "15min",
                        startTime: "13:15",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#EFFCF4",
                            hoverBackgroundColor: "#D5F6E2",
                        },
                    },
                    {
                        id: "cell-9a-1",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:00",
                        endTime: "14:15",
                        status: "disabled",
                    },
                    {
                        id: "cell-9a-2",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:15",
                        endTime: "14:30",
                        status: "disabled",
                    },
                    {
                        id: "cell-9a-3",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:30",
                        endTime: "14:45",
                        status: "disabled",
                    },
                    {
                        id: "cell-9a-4",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:45",
                        endTime: "15:00",
                        status: "disabled",
                    },
                    {
                        id: "cell-9a-5",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:00",
                        endTime: "15:15",
                        status: "disabled",
                    },
                    {
                        id: "cell-9a-6",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:15",
                        endTime: "15:30",
                        status: "disabled",
                    },
                    {
                        id: "cell-10a-1",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:00",
                        endTime: "16:15",
                        status: "pending",
                    },
                    {
                        id: "cell-10a-2",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:15",
                        endTime: "16:30",
                        status: "pending",
                    },
                    {
                        id: "cell-10a-3",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:30",
                        endTime: "16:45",
                        status: "pending",
                    },
                    {
                        id: "cell-10a-4",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:45",
                        endTime: "17:00",
                        status: "pending",
                    },
                    {
                        id: "cell-10a-5",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:00",
                        endTime: "17:15",
                        status: "pending",
                    },
                    {
                        id: "cell-10a-6",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:15",
                        endTime: "17:30",
                        status: "pending",
                    },
                ],
            },
            {
                id: "4",
                name: "Default",
                subtitle: "default description",
                rowCells: [
                    {
                        id: "cell-11",
                        title: "Default Filled",
                        subtitle: "1h30m slot",
                        startTime: "08:00",
                        endTime: "09:30",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12",
                        title: "Default Blocked",
                        subtitle: "1h30m slot",
                        startTime: "10:00",
                        endTime: "11:30",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13",
                        title: "Default Available",
                        subtitle: "1h30m slot",
                        startTime: "12:00",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14",
                        title: "Default Disabled",
                        subtitle: "1h30m slot",
                        startTime: "14:00",
                        endTime: "15:30",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15",
                        title: "Default Pending",
                        subtitle: "1h30m slot",
                        startTime: "16:00",
                        endTime: "17:30",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                ],
            },
            {
                id: "4a",
                name: "Default 15min intervals",
                subtitle: "All slots in 15min intervals",
                rowCells: [
                    {
                        id: "cell-11a-1",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:00",
                        endTime: "08:15",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-11a-2",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:15",
                        endTime: "08:30",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-11a-3",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:30",
                        endTime: "08:45",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-11a-4",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "08:45",
                        endTime: "09:00",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-11a-5",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:00",
                        endTime: "09:15",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-11a-6",
                        title: "Filled",
                        subtitle: "15min",
                        startTime: "09:15",
                        endTime: "09:30",
                        status: "filled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-1",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:00",
                        endTime: "10:15",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-2",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:15",
                        endTime: "10:30",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-3",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:30",
                        endTime: "10:45",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-4",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "10:45",
                        endTime: "11:00",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-5",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:00",
                        endTime: "11:15",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-12a-6",
                        title: "Blocked",
                        subtitle: "15min",
                        startTime: "11:15",
                        endTime: "11:30",
                        status: "blocked",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-1",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "12:00",
                        endTime: "12:15",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-2",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "12:15",
                        endTime: "12:30",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-3",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "12:30",
                        endTime: "12:45",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-4",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "12:45",
                        endTime: "13:00",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-5",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "13:00",
                        endTime: "13:15",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-13a-6",
                        title: "Available",
                        subtitle: "15min",
                        startTime: "13:15",
                        endTime: "13:30",
                        status: "default",
                        onClick: () => { },
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-1",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:00",
                        endTime: "14:15",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-2",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:15",
                        endTime: "14:30",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-3",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:30",
                        endTime: "14:45",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-4",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "14:45",
                        endTime: "15:00",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-5",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:00",
                        endTime: "15:15",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-14a-6",
                        title: "Disabled",
                        subtitle: "15min",
                        startTime: "15:15",
                        endTime: "15:30",
                        status: "disabled",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-1",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:00",
                        endTime: "16:15",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-2",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:15",
                        endTime: "16:30",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-3",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:30",
                        endTime: "16:45",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-4",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "16:45",
                        endTime: "17:00",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-5",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:00",
                        endTime: "17:15",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                    {
                        id: "cell-15a-6",
                        title: "Pending",
                        subtitle: "15min",
                        startTime: "17:15",
                        endTime: "17:30",
                        status: "pending",
                        // No cellStyleAttributes - will use default styling
                    },
                ],
            },
        ];

        const onPreviousDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        return (
            <div>
                <Typography.HeadingSM
                    weight="semibold"
                    style={{ marginBottom: "1rem" }}
                >
                    Custom Cell Colors
                </Typography.HeadingSM>
                <Typography.BodyBL style={{ marginBottom: "2rem" }}>
                    This example demonstrates using <code>cellStyleAttributes</code>{" "}
                    to customize cell colors and customize hover colors.{" "}
                    <br></br>
                    First 2 row shows custom styling of cellStyleAttributes<br ></br>
                    The middle 2 row shows mixed of using default and custom styling of cellStyleAttributes.<br ></br>
                    The last 2 row shows default styling when no cellStyleAttributes
                    are provided.<br ></br>
                </Typography.BodyBL>
                <StyledTimeTable
                    date={date}
                    minTime={"08:00"}
                    maxTime={"16:00"}
                    rowData={customColorData}
                    loading={false}
                    onNextDayClick={onNextDayClick}
                    onPreviousDayClick={onPreviousDayClick}
                />
            </div>
        );
    },
};
