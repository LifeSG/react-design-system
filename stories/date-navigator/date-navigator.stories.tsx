import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateNavigator } from "src/date-navigator";
import { StoryDecorator } from "stories/storybook-common";

type Component = typeof DateNavigator;

const meta: Meta<Component> = {
    title: "Selection and input/DateNavigator",
    component: DateNavigator,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ShortFormDate: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
                showDateAsShortForm
                showCurrentDateAsToday
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithCalendarNavigation: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        const onCalendarDateSelect = (currentDate: string) => {
            setSelectedDate(currentDate);
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const LoadingState: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);
        const [loading, setLoading] = useState<boolean>(false);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
            loadData();
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
            loadData();
        };

        const loadData = () => {
            setLoading(true);
            setTimeout(() => setLoading(false), 1000);
        };

        const onCalendarDateSelect = (currentDate: string) => {
            setSelectedDate(currentDate);
            loadData();
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                loading={loading}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithMinAndMaxDate: StoryObj<Component> = {
    render: (_args) => {
        const today = dayjs().toString();
        const minDate = dayjs(today).subtract(6, "day").toString();
        const maxDate = dayjs(today).add(6, "day").toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        const onCalendarDateSelect = (currentDate: string) => {
            setSelectedDate(currentDate);
        };

        return (
            <DateNavigator
                selectedDate={selectedDate}
                onLeftArrowClick={onLeftArrowClick}
                onRightArrowClick={onRightArrowClick}
                minDate={minDate}
                maxDate={maxDate}
                onCalendarDateSelect={onCalendarDateSelect}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
