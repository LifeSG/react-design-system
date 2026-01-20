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
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#FFE5E5",
                            altBackgroundColor: "#FFCCCC",
                            hoverBackgroundColor: "#FFD1D1",
                            altHoverBackgroundColor: "#FFB8B8",
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
                        onClick: () => { },
                        cellStyleAttributes: {
                            backgroundColor: "#FFF9C4",
                            altBackgroundColor: "#FFEE8D",
                            hoverBackgroundColor: "#fbe207",
                            altHoverBackgroundColor: "#f9d905",
                        },
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
                    First row shows custom styling of cellStyleAttributes<br ></br>
                    2nd row shows default styling when no cellStyleAttributes
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
