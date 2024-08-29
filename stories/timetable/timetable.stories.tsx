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
        const [results, setResults] = useState(mockMapper.rowBars.slice(0, 8));
        const [date, setDate] = useState(mockMapper.date);
        const [loading, setLoading] = useState(mockMapper.isLoading);

        const onLeftArrowClick = (currentDate: string) => {
            setDate(dayjs(currentDate).add(-1, "day").format("YYYY-MM-DD"));
            setLoading(true);
            setTimeout(() => {
                setResults(mockMapper.rowBars.slice(0, 8));
                setLoading(false);
            }, 1000);
        };

        const onRightArrowClick = (currentDate: string) => {
            setDate(dayjs(currentDate).add(1, "day").format("YYYY-MM-DD"));
            setLoading(true);
            setTimeout(() => {
                setResults(mockMapper.rowBars.slice(0, 8));
                setLoading(false);
            }, 1000);
        };

        const onPage = () => {
            setTimeout(() => {
                setResults((prev) => [...prev, ...mockMapper.rowBars.slice(8)]);
            }, 2000);
        };

        const onRefresh = () => {
            setLoading(true);
            setTimeout(() => {
                setResults(mockMapper.rowBars.slice(0, 8));
                setLoading(false);
            }, 5000);
        };

        return (
            <>
                <TimeTable
                    {...mockMapper}
                    onRefresh={onRefresh}
                    onPage={onPage}
                    rowBars={results}
                    date={date}
                    onRightArrowClick={onRightArrowClick}
                    onLeftArrowClick={onLeftArrowClick}
                    timetableMinTime="06:00"
                    isLoading={loading}
                />
            </>
        );
    },
};
