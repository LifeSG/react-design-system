import { PinIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
    Card,
    Color,
    PopoverV2TriggerType,
    Text,
    TimeTableRowCellData,
    TimeTableRowData,
} from "../../src";
import { applyHtmlContentStyle } from "../../src/shared/html-content/html-content";
import { TimeTable } from "../../src/timetable/timetable";
import { StyledHoverContent, getTimeTableData, lazyLoad } from "./mock-data";
import { timetableDefaultData } from "./timetable-default-data";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

const StyledTimeTable = styled(TimeTable)`
    width: 900px;
    height: 400px;
`;

export const Default: StoryObj<Component> = {
    render: () => {
        const date = dayjs().format("YYYY-MM-DD");

        return (
            <StyledTimeTable
                date={date}
                minTime={"06:00"}
                maxTime={"23:00"}
                rowData={timetableDefaultData}
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
        const [results, setResults] = useState([]);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);

        useEffect(() => {
            setTimeout(() => {
                const results = lazyLoad(page);
                setResults((prev) => [...prev, ...results]);
                setLoading(false);
            }, 2000);
        }, [page]);

        const onPreviousDayClick = (currentDate: string) => {
            setPage(1);
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
            setPage(1);
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
            setPage(1);
            setTimeout(() => {
                setResults(lazyLoad(1));
                setLoading(false);
            }, 5000);
        };

        return (
            <StyledTimeTable
                date={date}
                minTime="06:00"
                maxTime="20:00"
                minDate={dayjs(date).subtract(2, "days").format("YYYY-MM-DD")}
                maxDate={dayjs(date).add(2, "days").format("YYYY-MM-DD")}
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

export const TimeTableWithStyledPopovers: StoryObj<Component> = {
    render: () => {
        const StyledCustomPopoverCard = styled(Card)`
            display: flex;
            flex-direction: column;
            row-gap: 2rem;
            width: 400px;
            padding: 3rem;
            ${applyHtmlContentStyle({ textSize: "BodySmall" })}
        `;
        const buildCustomPopover = (
            row: TimeTableRowData,
            cell: TimeTableRowCellData
        ) => {
            switch (cell.status) {
                case "filled": {
                    return {
                        customPopover: {
                            trigger: "hover" as PopoverV2TriggerType,
                            content: () => (
                                <StyledCustomPopoverCard>
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
                                            E-mail
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
                                            Title
                                        </Text.H5>
                                        <Text.Body>{cell.title}</Text.Body>
                                    </div>
                                </StyledCustomPopoverCard>
                            ),
                            offset: 0,
                            delay: { open: 1250, close: 1250 },
                        },
                    };
                }
                case "default": {
                    return {
                        customPopover: {
                            trigger: "hover" as PopoverV2TriggerType,
                            content: () => <Card>Available</Card>,
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
                rowHeaderPopover: {
                    trigger: "hover" as PopoverV2TriggerType,
                    content: () => (
                        <Card>
                            <Text.Body weight={"regular"}>{row.name}</Text.Body>
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
                    trigger: "hover" as PopoverV2TriggerType,
                    content: () => <Card>Outside operating hours</Card>,
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
