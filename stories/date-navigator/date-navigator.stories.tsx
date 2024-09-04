import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateNavigator } from "../../src/date-navigator/date-navigator";

type Component = typeof DateNavigator;

const meta: Meta<Component> = {
    title: "Modules/DateNavigator",
    component: DateNavigator,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const today = dayjs().toString();
        return <DateNavigator selectedDate={today} />;
    },
};

export const WithNavigation: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(-1, "day").format("YYYY-MM-DD")
            );
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(1, "day").format("YYYY-MM-DD")
            );
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
            />
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(-1, "day").format("YYYY-MM-DD")
            );
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(1, "day").format("YYYY-MM-DD")
            );
        };
        return (
            <DateNavigator
                selectedDate={selectedDate}
                isLoading
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
            />
        );
    },
};

export const WithMinAndMaxDate: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");
        const minDate = dayjs(today).add(-6, "day").format("YYYY-MM-DD");
        const maxDate = dayjs(today).add(6, "day").format("YYYY-MM-DD");
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(-1, "day").format("YYYY-MM-DD")
            );
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(
                dayjs(currentDate).add(1, "day").format("YYYY-MM-DD")
            );
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
                minDate={minDate}
                maxDate={maxDate}
            />
        );
    },
};
