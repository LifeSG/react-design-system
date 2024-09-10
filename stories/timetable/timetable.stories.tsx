import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { TimeTable } from "../../src/timetable/timetable";
import { lazyLoad, mockMapper } from "./mock-data";

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
                    {...mockMapper()}
                    totalRecords={undefined}
                    height="650px"
                    width="900px"
                    rowData={mockMapper().rowData.slice(0, 8)}
                    date={""}
                    isLoading={false}
                />
            </>
        );
    },
};

export const TimeTableWithNavigation: StoryObj<Component> = {
    render: () => {
        const [results, setResults] = useState(
            mockMapper().rowData.slice(0, 8)
        );
        const [date, setDate] = useState(mockMapper().date);
        const [loading, setLoading] = useState(mockMapper().isLoading);

        const onLeftArrowClick = (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
            setLoading(true);
            setTimeout(() => {
                setResults(mockMapper(newDate).rowData.slice(0, 8));
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
                setResults(mockMapper(newDate).rowData.slice(0, 8));
                setLoading(false);
            }, 1000);
        };

        const onEmptyCellClick = (id: string, start: string, end: string) => {
            alert(
                `Clicked on cell for ${id}, start: ${start}, end: ${end}, should redirect user to booking form with these data`
            );
        };

        return (
            <>
                <TimeTable
                    {...mockMapper()}
                    height="650px"
                    width="900px"
                    date={date}
                    minDate={dayjs(mockMapper().date)
                        .subtract(2, "days")
                        .format("YYYY-MM-DD")}
                    maxDate={dayjs(mockMapper().date)
                        .add(2, "days")
                        .format("YYYY-MM-DD")}
                    rowData={results}
                    isLoading={loading}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    onEmptyCellClick={onEmptyCellClick}
                />
            </>
        );
    },
};

export const TimeTableWithLazyLoad: StoryObj<Component> = {
    render: () => {
        const [results, setResults] = useState([]);
        const [date, setDate] = useState(mockMapper().date);
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

        const onEmptyCellClick = (id: string, start: string, end: string) => {
            alert(
                `Clicked on cell for ${id}, start: ${start}, end: ${end}, should redirect user to booking form with these data`
            );
        };

        return (
            <>
                <TimeTable
                    {...mockMapper()}
                    date={date}
                    minDate={dayjs(mockMapper().date)
                        .subtract(2, "days")
                        .format("YYYY-MM-DD")}
                    maxDate={dayjs(mockMapper().date)
                        .add(2, "days")
                        .format("YYYY-MM-DD")}
                    height="650px"
                    width="900px"
                    rowData={results}
                    isLoading={loading}
                    onRefresh={onRefresh}
                    onPage={() => setPage(page + 1)}
                    totalRecords={50}
                    onEmptyCellClick={onEmptyCellClick}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                />
            </>
        );
    },
};

export const TimeTableWithNoPopoverContent: StoryObj<Component> = {
    render: () => {
        const onEmptyCellClick = (id: string, start: string, end: string) => {
            alert(
                `Clicked on cell for ${id}, start: ${start}, end: ${end}, should redirect user to booking form with these data`
            );
        };

        return (
            <>
                <TimeTable
                    {...mockMapper()}
                    height="650px"
                    width="900px"
                    rowData={mockMapper().rowData.slice(0, 8)}
                    onEmptyCellClick={onEmptyCellClick}
                />
            </>
        );
    },
};

export const TimeTableWithStyledPopovers: StoryObj<Component> = {
    render: () => {
        const onEmptyCellClick = (id: string, start: string, end: string) => {
            alert(
                `Clicked on cell for ${id}, start: ${start}, end: ${end}, should redirect user to booking form with these data`
            );
        };

        const filledCellPopoverSize = {
            width: "500px",
            padding: "3rem",
        };
        const blockedCellPopoverSize = {
            width: "500px",
            padding: "2rem",
        };

        return (
            <>
                <TimeTable
                    {...mockMapper()}
                    height="650px"
                    width="900px"
                    rowData={mockMapper().rowData.slice(0, 8)}
                    onEmptyCellClick={onEmptyCellClick}
                    filledCellPopoverSize={filledCellPopoverSize}
                    blockedCellPopoverSize={blockedCellPopoverSize}
                />
            </>
        );
    },
};

export const TimeTableWithEmptyContent: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <TimeTable {...mockMapper()} totalRecords={0} rowData={[]} />
            </>
        );
    },
};
