import { PinIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
    Color,
    PopoverV2TriggerType,
    Text,
    TimeTableRowCellData,
    TimeTableRowData,
} from "../../src";
import { TimeTable } from "../../src/timetable/timetable";
import { StyledHoverContent, getTimeTableData, lazyLoad } from "./mock-data";
import styled from "styled-components";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

const StyledTimeTable = styled(TimeTable)`
    width: 900px;
    height: 500px;
`;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StyledTimeTable
                {...getTimeTableData()}
                rowData={getTimeTableData().rowData.slice(0, 8)}
                date={""}
                isLoading={false}
            />
        );
    },
};

export const TimeTableWithNavigation: StoryObj<Component> = {
    render: () => {
        const timeTableData = getTimeTableData();

        const [results, setResults] = useState(getTimeTableData().rowData);
        const [date, setDate] = useState(timeTableData.date);
        const [loading, setLoading] = useState(timeTableData.isLoading);

        const onPreviousDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(getTimeTableData(newDate).rowData);
                setLoading(false);
            }, 1000);
        };

        const onNextDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(getTimeTableData(newDate).rowData);
                setLoading(false);
            }, 1000);
        };

        return (
            <StyledTimeTable
                {...timeTableData}
                date={date}
                minDate={dayjs(timeTableData.date)
                    .subtract(2, "days")
                    .format("YYYY-MM-DD")}
                maxDate={dayjs(timeTableData.date)
                    .add(2, "days")
                    .format("YYYY-MM-DD")}
                rowData={results}
                isLoading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
            />
        );
    },
};

export const TimeTableWithLazyLoad: StoryObj<Component> = {
    render: () => {
        const timeTableData = getTimeTableData();
        const [results, setResults] = useState([]);
        const [date, setDate] = useState(timeTableData.date);
        const [loading, setLoading] = useState(false);
        const [page, setPage] = useState(1);

        useEffect(() => {
            setTimeout(() => {
                const results = lazyLoad(page);
                setResults((prev) => [...prev, ...results]);
            }, 2000);
        }, [page]);

        const onPreviousDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(lazyLoad(1));
                setLoading(false);
            }, 1000);
        };

        const onNextDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(lazyLoad(1));
                setLoading(false);
            }, 1000);
        };

        const onRefresh = () => {
            setLoading(true);
            setTimeout(() => {
                setResults(lazyLoad(1));
                setLoading(false);
            }, 5000);
        };

        return (
            <StyledTimeTable
                {...timeTableData}
                date={date}
                minDate={dayjs(timeTableData.date)
                    .subtract(2, "days")
                    .format("YYYY-MM-DD")}
                maxDate={dayjs(timeTableData.date)
                    .add(2, "days")
                    .format("YYYY-MM-DD")}
                rowData={results}
                isLoading={loading}
                onRefresh={onRefresh}
                onPage={() => setPage(page + 1)}
                totalRecords={50}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
            />
        );
    },
};

export const TimeTableWithNoPopoverContent: StoryObj<Component> = {
    render: () => {
        return <StyledTimeTable {...getTimeTableData()} />;
    },
};

export const TimeTableWithStyledPopovers: StoryObj<Component> = {
    render: () => {
        const buildCustomPopover = (
            row: TimeTableRowData,
            cell: TimeTableRowCellData
        ) => {
            switch (cell.status) {
                case "filled": {
                    return {
                        customPopover: {
                            trigger: "hover" as PopoverV2TriggerType,
                            content: (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: "2rem",
                                    }}
                                >
                                    <div>
                                        <Text.H3 weight={"semibold"}>
                                            {row.name}
                                        </Text.H3>
                                        <Text.H4 weight={"semibold"}>
                                            {dayjs().format("D MMM YYYY, ddd")}{" "}
                                            {`${dayjs(
                                                cell.startTime,
                                                "HH:mm"
                                            ).format("HH:mma")} - ${dayjs(
                                                cell.endTime,
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
                                        <Text.Body>{cell.subtitle}</Text.Body>
                                        <a
                                            onClick={() =>
                                                alert(
                                                    "email copied to clipboard"
                                                )
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
                                        <Text.Body>{cell.title}</Text.Body>
                                    </div>
                                </div>
                            ),
                            width: "400px",
                            padding: "3rem",
                            offset: 0,
                            delay: { open: 1250, close: 1250 },
                        },
                    };
                }
                case "default": {
                    return {
                        customPopover: {
                            trigger: "hover" as PopoverV2TriggerType,
                            content: "Available",
                            offset: 0,
                            delay: { open: 0, close: 0 },
                        },
                    };
                }
            }
        };

        const rowData = getTimeTableData().rowData.map((row) => {
            return {
                ...row,
                rowHeaderCustomPopover: {
                    trigger: "hover" as PopoverV2TriggerType,
                    content: (
                        <>
                            <Text.Body weight={"regular"}>{row.name}</Text.Body>
                            <StyledHoverContent>
                                <PinIcon />
                                Eclipse
                            </StyledHoverContent>
                        </>
                    ),
                    offset: 0,
                    delay: { open: 500, close: 0 },
                },
                outsideOpHoursCellCustomPopover: {
                    trigger: "hover" as PopoverV2TriggerType,
                    content: "Outside operating hours",
                    offset: 0,
                    delay: { open: 0, close: 0 },
                },
                rowCells: row.rowCells.map((cell) => {
                    return {
                        ...cell,
                        ...buildCustomPopover(row, cell),
                    };
                }),
            };
        });

        return <StyledTimeTable {...getTimeTableData()} rowData={rowData} />;
    },
};

export const TimeTableWithEmptyContent: StoryObj<Component> = {
    render: () => {
        return (
            <StyledTimeTable
                {...getTimeTableData()}
                totalRecords={0}
                rowData={[]}
            />
        );
    },
};
