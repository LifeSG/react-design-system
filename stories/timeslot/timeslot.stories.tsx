import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { TimeSlot, TimeSlotRowCellData, TimeSlotRowData } from "src/timeslot";
import styled from "styled-components";
type Component = typeof TimeSlot;
import { mockTimeSlotData } from "./mockTimeSlotData";

const meta: Meta<Component> = {
    title: "Selection and input/TimeSlot",
    component: TimeSlot,
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
            description: "The view mode for the timeslot",
        },
        date: {
            control: { type: "date" },
            description: "The current date to display",
        },
        loading: {
            control: { type: "boolean" },
            description: "Whether the timeslot is in loading state",
        },
        minTime: {
            control: { type: "text" },
            description: "Minimum time to display (HH:mm format)",
        },
        maxTime: {
            control: { type: "text" },
            description: "Maximum time to display (HH:mm format)",
        },
        initialScrollTime: {
            control: { type: "text" },
            description:
                "Initial scroll position time (HH:mm format), defaults to minTime if not provided",
        },
    },
};

export default meta;

const StyledTimeSlot = styled(TimeSlot)`
    width: 900px;
    height: 600px;
`;
export const Default: StoryObj<Component> = {
    render: () => {
        const [results] = useState<TimeSlotRowData[]>(mockTimeSlotData);
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
            data: TimeSlotRowCellData,
            _e: React.MouseEvent
        ) => {
            console.log("Slot clicked:", data);
            alert(`Clicked on slot ${data.startTime}-${data.endTime}`);
        };

        const onCalendarDateSelect = (date: string) => {
            setDate(date);
        };

        return (
            <StyledTimeSlot
                date={date}
                data-id="timeslot"
                view="day"
                minTime="00:00"
                maxTime="23:59"
                initialScrollTime="08:00"
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
        const [results] = useState<TimeSlotRowData[]>(mockTimeSlotData);
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
            data: TimeSlotRowCellData,
            _e: React.MouseEvent
        ) => {
            console.log("Slot clicked:", data);
            alert(`Clicked on slot ${data.startTime}-${data.endTime}`);
        };

        return (
            <StyledTimeSlot
                date={date}
                data-id="timeslot"
                view="week"
                minTime="00:00"
                maxTime="23:59"
                initialScrollTime="08:00"
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
        const [results] = useState<TimeSlotRowData[]>(mockTimeSlotData);
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
            <StyledTimeSlot
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:30"
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
        const [results] = useState<TimeSlotRowData[]>([]);
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
            <StyledTimeSlot
                date={date}
                view="day"
                minTime="08:00"
                maxTime="18:30"
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
