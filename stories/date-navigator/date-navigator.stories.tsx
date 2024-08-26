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
        const today = dayjs().format("YYYY-MM-DD");
        return <DateNavigator selectedDate={today} />;
    },
};

export const WithMinAndMaxDate: StoryObj<Component> = {
    render: () => {
        const today = dayjs().format("YYYY-MM-DD");
        return (
            <DateNavigator
                selectedDate={today}
                minDate={dayjs(today).add(-1, "month").format("YYYY-MM-DD")}
                maxDate={dayjs(today).add(1, "month").format("YYYY-MM-DD")}
            />
        );
    },
};

export const WithOverrideLeftRightArrowClick: StoryObj<Component> = {
    render: () => {
        const [selectedDate, setSelectedDate] = useState<string>(
            dayjs().format("YYYY-MM-DD")
        );

        const leftClick = (currDate: string) => {
            setSelectedDate(
                dayjs(currDate).add(-1, "month").format("YYYY-MM-DD")
            );
        };

        const rightClick = (currDate: string) => {
            setSelectedDate(
                dayjs(currDate).add(1, "month").format("YYYY-MM-DD")
            );
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={leftClick}
                onRightArrowClick={rightClick}
            />
        );
    },
};
