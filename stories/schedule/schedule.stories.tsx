import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { Schedule, SchedulePopoverProps, ScheduleRowData } from "src/schedule";
import styled from "styled-components";
type Component = typeof Schedule;
import { mockScheduleData } from "./mockScheduleData";
import { ClockIcon } from "@lifesg/react-icons";
import { Colour } from "src/theme";

const meta: Meta<Component> = {
    title: "Selection and input/Schedule",
    component: Schedule,
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
            description: "The view mode for the schedule",
        },
        date: {
            control: { type: "date" },
            description: "The current date to display",
        },
        loading: {
            control: { type: "boolean" },
            description: "Whether the schedule is in loading state",
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

const StyledSchedule = styled(Schedule)`
    width: 1100px;
    height: 600px;
`;

const PopoverContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: ${Colour["bg-primary"]};
`;

export const Default: StoryObj<Component> = {
    render: () => {
        const [results] = useState<ScheduleRowData[]>(mockScheduleData);
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

        const onCalendarDateSelect = (date: string) => {
            setDate(date);
        };
        const emptySlotPopover: SchedulePopoverProps = {
            trigger: "click",
            content: (
                <PopoverContent>
                    <ClockIcon />
                    <span>Empty Time Slot</span>
                </PopoverContent>
            ),
            offset: 0,
        };

        return (
            <StyledSchedule
                date={date}
                data-id="schedule"
                view="day"
                minTime="00:00"
                maxTime="23:59"
                initialScrollTime="08:00"
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
                onCalendarDateSelect={onCalendarDateSelect}
                emptySlotPopover={emptySlotPopover}
            />
        );
    },
};

export const WeekView: StoryObj<Component> = {
    render: () => {
        const [results] = useState<ScheduleRowData[]>(mockScheduleData);
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
            <StyledSchedule
                date={date}
                data-id="schedule"
                view="week"
                minTime="00:00"
                maxTime="23:59"
                initialScrollTime="08:00"
                rowData={results}
                loading={loading}
                onNextDayClick={onNextDayClick}
                onPreviousDayClick={onPreviousDayClick}
                onTodayClick={onTodayClick}
            />
        );
    },
};

export const Loading: StoryObj<Component> = {
    render: () => {
        const [results] = useState<ScheduleRowData[]>(mockScheduleData);
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
            <StyledSchedule
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
        const [results] = useState<ScheduleRowData[]>([]);
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
            <StyledSchedule
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
