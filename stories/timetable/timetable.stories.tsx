import { PinIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Card } from "src/card";
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
                maxTime={"23:00"}
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
