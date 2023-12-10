import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";
import { useState } from "react";
import { TimeSlotWeekView } from "src/time-slot-week-view";
import { FullWidthStoryContainer } from "../storybook-common";
import { Wrapper } from "./doc-elements";
import { getSlots, getSlotsMin } from "./slots";

type Component = typeof TimeSlotWeekView;

const meta: Meta<Component> = {
    title: "Modules/TimeSlotWeekView",
    component: TimeSlotWeekView,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <TimeSlotWeekView slots={getSlots()} />
            </Wrapper>
        );
    },
};

export const WithDisabledDates: StoryObj<Component> = {
    render: () => {
        const [disabledDates] = useState([
            dayjs().subtract(2, "day").format("YYYY-MM-DD"),
            dayjs().add(2, "day").format("YYYY-MM-DD"),
        ]);
        return (
            <Wrapper>
                <TimeSlotWeekView
                    slots={getSlots()}
                    disabledDates={disabledDates}
                />
            </Wrapper>
        );
    },
};

export const MinAndMaxDates: StoryObj<Component> = {
    render: () => {
        const minDate = dayjs().subtract(7, "day").format("YYYY-MM-DD");
        const maxDate = dayjs().add(20, "day").format("YYYY-MM-DD");
        return (
            <Wrapper>
                <TimeSlotWeekView
                    slots={getSlots()}
                    minDate={minDate}
                    maxDate={maxDate}
                />
            </Wrapper>
        );
    },
};

export const HideNavHeader: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Wrapper>
                    <TimeSlotWeekView
                        slots={getSlotsMin()}
                        showNavigationHeader={false}
                    />
                </Wrapper>
            </FullWidthStoryContainer>
        );
    },
};

export const DisableDaySelection: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Wrapper>
                    <TimeSlotWeekView
                        slots={getSlots()}
                        enableSelection={false}
                    />
                </Wrapper>
            </FullWidthStoryContainer>
        );
    },
};

export const SlotSelection: StoryObj<Component> = {
    render: () => {
        return (
            <FullWidthStoryContainer>
                <Wrapper>
                    <TimeSlotWeekView
                        slots={getSlots()}
                        onSlotClick={(date, slot) => {
                            alert(date + JSON.stringify(slot));
                        }}
                    />
                </Wrapper>
            </FullWidthStoryContainer>
        );
    },
};
