import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { TimeSlotBarWeek } from "src/time-slot-bar-week";
import { FullWidthStoryDecorator } from "stories/storybook-common";
import { getSlots, getSlotsMin } from "./slots";

type Component = typeof TimeSlotBarWeek;

const meta: Meta<Component> = {
    title: "Selection and input/TimeSlotBarWeek",
    component: TimeSlotBarWeek,
    decorators: [FullWidthStoryDecorator()],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <TimeSlotBarWeek slots={getSlots()} />;
    },
};

export const Interval: StoryObj<Component> = {
    render: (_args) => {
        return <TimeSlotBarWeek slots={getSlots()} interval={15} />;
    },
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBarWeek
                slots={getSlots()}
                interval={15}
                variant={"fixed"}
            />
        );
    },
};

export const MaxVisibleCellHeight: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBarWeek slots={getSlots()} maxVisibleCellHeight={136} />
        );
    },
};

export const StartAndEndTime: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBarWeek
                slots={getSlots()}
                startTime="11:00"
                endTime="16:00"
            />
        );
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: (_args) => {
        const minDate = dayjs().subtract(7, "day").format("YYYY-MM-DD");
        const maxDate = dayjs().add(20, "day").format("YYYY-MM-DD");
        return (
            <TimeSlotBarWeek
                slots={getSlots()}
                minDate={minDate}
                maxDate={maxDate}
            />
        );
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "day").format("YYYY-MM-DD"),
            dayjs().add(2, "day").format("YYYY-MM-DD"),
        ]);
        return (
            <TimeSlotBarWeek slots={getSlots()} disabledDates={disabledDates} />
        );
    },
};

export const HideNavHeader: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBarWeek
                slots={getSlotsMin()}
                showNavigationHeader={false}
            />
        );
    },
};

export const DisableDaySelection: StoryObj<Component> = {
    render: (_args) => {
        return <TimeSlotBarWeek slots={getSlots()} enableSelection={false} />;
    },
};

export const SlotSelection: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBarWeek
                slots={getSlots()}
                onSlotClick={(date, slot) => {
                    alert(date + JSON.stringify(slot));
                }}
            />
        );
    },
};
