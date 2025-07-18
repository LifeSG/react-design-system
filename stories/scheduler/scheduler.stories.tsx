import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import {
    Scheduler,
    SchedulerRowData,
    SchedulerRowCellData,
} from "src/scheduler";
import styled from "styled-components";
type Component = typeof Scheduler;
import { mockSchedulerData } from "./mockSchedulerData";

const meta: Meta<Component> = {
    title: "Selection and input/Scheduler",
    component: Scheduler,
    parameters: {
        docs: {
            description: {
                component:
                    "A comprehensive calendar component that supports day and week views with time slots.",
            },
        },
    },
    argTypes: {
        view: {
            control: { type: "select" },
            options: ["day", "week"],
            description: "The view mode for the scheduler",
        },
        date: {
            control: { type: "date" },
            description: "The current date to display",
        },
        loading: {
            control: { type: "boolean" },
            description: "Whether the scheduler is in loading state",
        },
        minTime: {
            control: { type: "text" },
            description: "Minimum time to display (HH:mm format)",
        },
        maxTime: {
            control: { type: "text" },
            description: "Maximum time to display (HH:mm format)",
        },
    },
};

export default meta;

const StyledScheduler = styled(Scheduler)`
    [data-id="timeslot-container"] {
        width: 1200px;
        height: 600px;
    }
`;
export const Default: StoryObj<Component> = {
    render: () => {
        const [results] = useState<SchedulerRowData[]>(mockSchedulerData);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, _setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onTodayClick = () => {
            setDate(dayjs().format("YYYY-MM-DD"));
        };

        const onSlotClick = (
            data: SchedulerRowCellData,
            _e: React.MouseEvent
        ) => {
            console.log("Slot clicked:", data);
            alert(`Clicked on slot ${data.startTime}-${data.endTime}`);
        };

        const onCalendarDateSelect = (date: string) => {
            setDate(date);
        };

        return (
            <StyledScheduler
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:00"
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
                onSlotClick={onSlotClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
};

export const WeekView: StoryObj<Component> = {
    render: () => {
        const [results] = useState<SchedulerRowData[]>(mockSchedulerData);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, _setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onTodayClick = () => {
            setDate(dayjs().format("YYYY-MM-DD"));
        };

        const onSlotClick = (
            data: SchedulerRowCellData,
            _e: React.MouseEvent
        ) => {
            console.log("Slot clicked:", data);
            alert(`Clicked on slot ${data.startTime}-${data.endTime}`);
        };

        return (
            <StyledScheduler
                date={date}
                view="week"
                minTime="08:00"
                maxTime="18:00"
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
                onSlotClick={onSlotClick}
            />
        );
    },
};

export const Loading: StoryObj<Component> = {
    render: () => {
        const [results] = useState<SchedulerRowData[]>([]);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, _setLoading] = useState(true);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onTodayClick = () => {
            setDate(dayjs().format("YYYY-MM-DD"));
        };

        return (
            <StyledScheduler
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:00"
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
            />
        );
    },
};

export const Empty: StoryObj<Component> = {
    render: () => {
        const [results] = useState<SchedulerRowData[]>([]);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, _setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onTodayClick = () => {
            setDate(dayjs().format("YYYY-MM-DD"));
        };

        return (
            <StyledScheduler
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:00"
                rowData={results}
                loading={loading}
                emptyContentMessage="No appointments scheduled for this day"
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
            />
        );
    },
};

export const WithDateRange: StoryObj<Component> = {
    render: () => {
        const [results] = useState<SchedulerRowData[]>(mockSchedulerData);
        const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
        const [loading, _setLoading] = useState(false);

        const onPreviousDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(-1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onNextDayClick = async (currentDate: string) => {
            const newDate = dayjs(currentDate)
                .add(1, "day")
                .format("YYYY-MM-DD");
            setDate(newDate);
        };

        const onTodayClick = () => {
            setDate(dayjs().format("YYYY-MM-DD"));
        };

        const onCalendarDateSelect = (selectedDate: string) => {
            setDate(selectedDate);
        };

        return (
            <StyledScheduler
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:00"
                minDate={dayjs().subtract(7, "days").format("YYYY-MM-DD")}
                maxDate={dayjs().add(7, "days").format("YYYY-MM-DD")}
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
};
