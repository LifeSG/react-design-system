import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { mockMapper } from "../../src/timetable/mock-data";
import { TimeTable } from "../../src/timetable/timetable";

type Component = typeof TimeTable;

const meta: Meta<Component> = {
    title: "Modules/TimeTable",
    component: TimeTable,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [results, setResults] = useState(
            mockMapper().rowBars.slice(0, 8)
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
                setResults(mockMapper(newDate).rowBars.slice(0, 8));
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
                setResults(mockMapper(newDate).rowBars.slice(0, 8));
                setLoading(false);
            }, 1000);
        };

        const onPage = () => {
            setTimeout(() => {
                setResults((prev) => [
                    ...prev,
                    ...mockMapper(date).rowBars.slice(8),
                ]);
            }, 2000);
        };

        const onRefresh = () => {
            setLoading(true);
            setTimeout(() => {
                setResults(mockMapper(date).rowBars.slice(0, 8));
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
                    rowBars={results}
                    date={date}
                    isLoading={loading}
                    onRefresh={onRefresh}
                    onPage={onPage}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    onEmptyCellClick={onEmptyCellClick}
                />
            </>
        );
    },
};
