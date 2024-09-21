import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "src/calendar";
import { FullWidthStoryContainer } from "../storybook-common";

type Component = typeof Calendar;

const meta: Meta<Component> = {
    title: "Modules/Calendar",
    component: Calendar,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Calendar />
            </FullWidthStoryContainer>
        );
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "days").format("YYYY-MM-DD"),
            dayjs().add(2, "days").format("YYYY-MM-DD"),
        ]);
        return (
            <FullWidthStoryContainer>
                <Calendar disabledDates={disabledDates} />
            </FullWidthStoryContainer>
        );
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Calendar
                    minDate={dayjs().subtract(2, "days").format("YYYY-MM-DD")}
                    maxDate={dayjs().add(20, "days").format("YYYY-MM-DD")}
                />
            </FullWidthStoryContainer>
        );
    },
};

export const AllowDisabledSelection: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().date(10).format("YYYY-MM-DD"),
            dayjs().date(15).format("YYYY-MM-DD"),
            dayjs().date(25).format("YYYY-MM-DD"),
        ]);
        return (
            <FullWidthStoryContainer>
                <Calendar
                    disabledDates={disabledDates}
                    minDate={dayjs().subtract(6, "weeks").format("YYYY-MM-DD")}
                    maxDate={dayjs().add(6, "weeks").format("YYYY-MM-DD")}
                    allowDisabledSelection
                />
            </FullWidthStoryContainer>
        );
    },
};

export const ShowActiveMonthDaysOnly: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Calendar showActiveMonthDaysOnly={true} />
            </FullWidthStoryContainer>
        );
    },
};
