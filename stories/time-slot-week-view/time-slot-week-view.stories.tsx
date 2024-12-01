import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { TimeSlotWeekView } from "src/time-slot-week-view";
import { FullWidthStoryDecorator } from "stories/storybook-common";
import { getSlots, getSlotsMin } from "./slots";

type Component = typeof TimeSlotWeekView;

const meta: Meta<Component> = {
    title: "Selection and input/TimeSlotWeekView",
    component: TimeSlotWeekView,
    decorators: [FullWidthStoryDecorator()],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <TimeSlotWeekView slots={getSlots()} />;
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: (_args) => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "day").format("YYYY-MM-DD"),
            dayjs().add(2, "day").format("YYYY-MM-DD"),
        ]);
        return (
            <TimeSlotWeekView
                slots={getSlots()}
                disabledDates={disabledDates}
            />
        );
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: (_args) => {
        const minDate = dayjs().subtract(7, "day").format("YYYY-MM-DD");
        const maxDate = dayjs().add(20, "day").format("YYYY-MM-DD");
        return (
            <TimeSlotWeekView
                slots={getSlots()}
                minDate={minDate}
                maxDate={maxDate}
            />
        );
    },
};

export const HideNavHeader: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotWeekView
                slots={getSlotsMin()}
                showNavigationHeader={false}
            />
        );
    },
};

export const DisableDaySelection: StoryObj<Component> = {
    render: (_args) => {
        return <TimeSlotWeekView slots={getSlots()} enableSelection={false} />;
    },
};

export const SlotSelection: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotWeekView
                slots={getSlots()}
                onSlotClick={(date, slot) => {
                    alert(date + JSON.stringify(slot));
                }}
            />
        );
    },
};
