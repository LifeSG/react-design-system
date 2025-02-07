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

const StyledCustomPopoverCard = styled(Card)`
display: flex;
flex-direction: column;
row-gap: 2rem;
width: 400px;
padding: 3rem;
${applyHtmlContentStyle({ textSize: "BodySmall" })}
`;

export const Default: StoryObj<Component> = {
    render: () => {
        const timeTableData = getTimeTableData();

        const [results, setResults] = useState(getTimeTableData().rowData);
        const [date, setDate] = useState(timeTableData.date);
        const [loading, setLoading] = useState(timeTableData.loading);

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
        const [results, setResults] = useState([]);
        const [date, setDate] = useState(today);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);

        const onPage = () => {
            setPage(page + 1);
            setTimeout(() => {
                const results = lazyLoad(page + 1);
                setResults((prev) => [...prev, ...results]);
                setLoading(false);
            }, 2000);
        };

        useEffect(() => {
            setTimeout(() => {
                const results = lazyLoad(1);
                setResults(results);
                setLoading(false);
            }, 2000);
        }, []);

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

        const onCalendarDateSelect = (currentDate: string) => {
            setPage(1);
            setDate(currentDate);
            setLoading(true);
            setTimeout(() => {
                setResults(lazyLoad(1));
                setLoading(false);
            }, 1000);
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
        const [results, setResults] = useState([]);
        const [date, setDate] = useState(today);
        const [loading, setLoading] = useState(true);
        const totalRecords = 10;


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


        const onPage = () => {
            setTimeout(() => {
                setResults((prev) => [...prev, ...rowData.slice(5)]);
                setLoading(false);
            }, 2000);
        };

        useEffect(() => {
            if (rowData) {
                setResults(rowData.slice(0, 5));
                setLoading(false);
            }
        }, []);

        const onPreviousDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(rowData.slice(0, 5));
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
                setResults(rowData.slice(0, 5));
                setLoading(false);
            }, 1000);
        };

        const onRefresh = () => {
            setLoading(true);
            setTimeout(() => {
                setResults(rowData.slice(0, 5));
                setLoading(false);
            }, 5000);
        };

        const onCalendarDateSelect = (currentDate: string) => {
            setDate(currentDate);
            setLoading(true);
            setTimeout(() => {
                setResults(rowData.slice(0, 5));
                setLoading(false);
            }, 1000);
        };

        return <StyledTimeTable
            {...getTimeTableData()}
            date={date}
            totalRecords={totalRecords}
            loading={loading}
            onPage={onPage}
            onRefresh={onRefresh}
            onNextDayClick={onNextDayClick}
            onPreviousDayClick={onPreviousDayClick}
            onCalendarDateSelect={onCalendarDateSelect}
            rowData={results} />;
    },
};

export const EmptyContent: StoryObj<Component> = {
    render: () => {
        const today = dayjs().toString();
        const [date, setDate] = useState(today);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []);

        const onPreviousDayClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
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
                setLoading(false);
            }, 1000);
        };

        const onCalendarDateSelect = (currentDate: string) => {
            setDate(currentDate);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        return (
            <StyledTimeTable
                date={date}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                totalRecords={0}
                rowData={[]}
                loading={loading}
                emptyContentMessage={"There’s no data to show. You may need to adjust your search or filters. If you believe this is a mistake, try refreshing the page."}
            />
        );
    },
};
