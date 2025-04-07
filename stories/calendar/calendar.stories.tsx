import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "src/calendar";

type Component = typeof Calendar;

const meta: Meta<Component> = {
    title: "Selection and input/Calendar",
    component: Calendar,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <Calendar />;
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "days").format("YYYY-MM-DD"),
            dayjs().add(2, "days").format("YYYY-MM-DD"),
        ]);
        return <Calendar disabledDates={disabledDates} />;
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Calendar
                minDate={dayjs().subtract(2, "days").format("YYYY-MM-DD")}
                maxDate={dayjs().add(20, "days").format("YYYY-MM-DD")}
            />
        );
    },
};

export const AllowDisabledSelection: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <Calendar
                disabledDates={disabledDates}
                minDate={dayjs().subtract(6, "weeks").format("YYYY-MM-DD")}
                maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                allowDisabledSelection
            />
        );
    },
};

export const ShowActiveMonthDaysOnly: StoryObj<Component> = {
    render: (_args) => {
        return <Calendar showActiveMonthDaysOnly />;
    },
};
