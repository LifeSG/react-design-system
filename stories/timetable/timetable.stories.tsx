import { Person2Icon, PinIcon } from "@lifesg/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Color, PopoverV2TriggerType, Text } from "../../src";
import { TimeTable } from "../../src/timetable/timetable";
import { RowCellData } from "../../src/timetable/types";
import { StyledHoverContent, getTimeTableData, lazyLoad } from "./mock-data";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <TimeTable
                    {...getTimeTableData()}
                    totalRecords={undefined}
                    height="650px"
                    width="900px"
                    rowData={getTimeTableData().rowData.slice(0, 8)}
                    date={""}
                    isLoading={false}
                />
            </>
        );
    },
};

export const TimeTableWithNavigation: StoryObj<Component> = {
    render: () => {
        const timeTableData = getTimeTableData();

        const [results, setResults] = useState(getTimeTableData().rowData);
        const [date, setDate] = useState(timeTableData.date);
        const [loading, setLoading] = useState(timeTableData.isLoading);

        const onLeftArrowClick = (currentDate: string) => {
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

        const onRightArrowClick = (currentDate: string) => {
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

        const onCellClick = (data: RowCellData) => {
            alert(
                `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
            );
        };

        return (
            <>
                <TimeTable
                    {...timeTableData}
                    height="650px"
                    width="900px"
                    date={date}
                    minDate={dayjs(timeTableData.date)
                        .subtract(2, "days")
                        .format("YYYY-MM-DD")}
                    maxDate={dayjs(timeTableData.date)
                        .add(2, "days")
                        .format("YYYY-MM-DD")}
                    rowData={results}
                    isLoading={loading}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    onCellClick={onCellClick}
                />
            </>
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

        const onLeftArrowClick = (currentDate: string) => {
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

        const onRightArrowClick = (currentDate: string) => {
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

        const onCellClick = (data: RowCellData) => {
            alert(
                `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
            );
        };

        return (
            <>
                <TimeTable
                    {...timeTableData}
                    date={date}
                    minDate={dayjs(timeTableData.date)
                        .subtract(2, "days")
                        .format("YYYY-MM-DD")}
                    maxDate={dayjs(timeTableData.date)
                        .add(2, "days")
                        .format("YYYY-MM-DD")}
                    height="650px"
                    width="900px"
                    rowData={results}
                    isLoading={loading}
                    onRefresh={onRefresh}
                    onPage={() => setPage(page + 1)}
                    totalRecords={50}
                    onCellClick={onCellClick}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            </>
        );
    },
};

export const TimeTableWithNoPopoverContent: StoryObj<Component> = {
    render: () => {
        const onCellClick = (data: RowCellData) => {
            alert(
                `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
            );
        };
        return (
            <>
                <TimeTable
                    {...getTimeTableData()}
                    height="650px"
                    width="900px"
                    onCellClick={onCellClick}
                />
            </>
        );
    },
};

export const TimeTableWithStyledPopovers: StoryObj<Component> = {
    render: () => {
        const onCellClick = (data: RowCellData) => {
            alert(
                `Clicked on cell for ${data.id}, start: ${data.startTime}, end: ${data.endTime}, should redirect user to booking form with these data`
            );
        };

        const rowData = getTimeTableData().rowData.map((row) => {
            return {
                ...row,
                rowHeaderCustomPopover: {
                    trigger: "hover" as PopoverV2TriggerType,
                    content: (
                        <>
                            <Text.Body weight={"regular"}>Eclipse</Text.Body>
                            <StyledHoverContent>
                                <PinIcon />
                                <Text.H6 weight={"semibold"}>
                                    <>
                                        <Person2Icon />
                                        10
                                    </>
                                </Text.H6>
                            </StyledHoverContent>
                        </>
                    ),
                },
                outsideOpHoursCellCustomPopover: {
                    trigger: "hover" as PopoverV2TriggerType,
                    content: "Outside operating hours",
                },
                rowCells: row.rowCells.map((cell) => {
                    return {
                        ...cell,
                        ...(cell.status === "filled" && {
                            customPopover: {
                                trigger: "hover" as PopoverV2TriggerType,
                                content: (
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
                                                {row.name}
                                            </Text.H3>
                                            <Text.H4 weight={"semibold"}>
                                                {dayjs().format(
                                                    "D MMM YYYY, ddd"
                                                )}{" "}
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
                                            <Text.Body>
                                                {cell.subtitle}
                                            </Text.Body>
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
                            },
                        }),
                    };
                }),
            };
        });

        return (
            <>
                <TimeTable
                    {...getTimeTableData()}
                    height="650px"
                    width="900px"
                    rowData={rowData}
                    onCellClick={onCellClick}
                />
            </>
        );
    },
};

export const TimeTableWithEmptyContent: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <TimeTable
                    {...getTimeTableData()}
                    totalRecords={0}
                    rowData={[]}
                />
            </>
        );
    },
};
