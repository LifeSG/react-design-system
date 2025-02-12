import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { DateNavigator } from "../../src/date-navigator/date-navigator";
import { StoryContainer } from "../storybook-common";

type Component = typeof DateNavigator;

const meta: Meta<Component> = {
    title: "Modules/DateNavigator",
    component: DateNavigator,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        return (
            <StoryContainer>
                <DateNavigator
                    selectedDate={selectedDate}
                    onLeftArrowClick={onLeftArrowClick}
                    onRightArrowClick={onRightArrowClick}
                />
            </StoryContainer>
        );
    },
};

export const ShortFormDate: StoryObj<Component> = {
    render: () => {
        const today = dayjs().toString();
        const [selectedDate, setSelectedDate] = useState<string>(today);

        const onLeftArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).subtract(1, "day").toString());
        };

        const onRightArrowClick = (currentDate: string) => {
            setSelectedDate(dayjs(currentDate).add(1, "day").toString());
        };

        return (
            <StoryContainer>
                <DateNavigator
                    selectedDate={selectedDate}
                    onLeftArrowClick={onLeftArrowClick}
                    onRightArrowClick={onRightArrowClick}
                    showDateAsShortForm
                    showCurrentDateAsToday
                />
            </StoryContainer>
        );
    },
};

export const WithCalendarNavigation: StoryObj<Component> = {
    render: () => {
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
            <StoryContainer>
                <DateNavigator
                    selectedDate={selectedDate}
                    onLeftArrowClick={onLeftArrowClick}
                    onRightArrowClick={onRightArrowClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            </StoryContainer>
        );
    },
};

export const LoadingState: StoryObj<Component> = {
    render: () => {
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
            <StoryContainer>
                <DateNavigator
                    selectedDate={selectedDate}
                    loading={loading}
                    onLeftArrowClick={onLeftArrowClick}
                    onRightArrowClick={onRightArrowClick}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            </StoryContainer>
        );
    },
};

export const WithMinAndMaxDate: StoryObj<Component> = {
    render: () => {
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
            <StoryContainer>
                <DateNavigator
                    selectedDate={selectedDate}
                    onLeftArrowClick={onLeftArrowClick}
                    onRightArrowClick={onRightArrowClick}
                    minDate={minDate}
                    maxDate={maxDate}
                    onCalendarDateSelect={onCalendarDateSelect}
                />
            </StoryContainer>
        );
    },
};
