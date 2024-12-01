import type { Meta, StoryObj } from "@storybook/react";
import { Colour } from "src/theme";
import { TimeSlotBar } from "src/time-slot-bar";

type Component = typeof TimeSlotBar;

const meta: Meta<Component> = {
    title: "Selection and input/TimeSlotBar",
    component: TimeSlotBar,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBar
                startTime="08:00"
                endTime="19:00"
                onSlotClick={() => {
                    /* empty arrow function */
                }}
                slots={[
                    {
                        id: "1",
                        startTime: "09:00",
                        endTime: "09:30",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "2",
                        startTime: "09:30",
                        endTime: "10:00",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "4",
                        startTime: "13:00",
                        endTime: "14:30",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "5",
                        startTime: "15:15",
                        endTime: "16:45",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                ]}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: Colour["bg-stronger"],
                    backgroundColor2: Colour["bg-strongest"],
                }}
            />
        );
    },
};

export const MinifiedVariant: StoryObj<Component> = {
    render: (_args) => {
        return (
            <TimeSlotBar
                variant="minified"
                startTime="08:00"
                endTime="22:00"
                onSlotClick={() => {
                    /* empty arrow function */
                }}
                slots={[
                    {
                        id: "1",
                        startTime: "09:00",
                        endTime: "09:30",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "2",
                        startTime: "09:30",
                        endTime: "10:00",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "4",
                        startTime: "13:00",
                        endTime: "14:30",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "5",
                        startTime: "15:15",
                        endTime: "16:45",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                    {
                        id: "6",
                        startTime: "20:00",
                        endTime: "22:00",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                ]}
                styleAttributes={{
                    backgroundColor: Colour["bg-strongest"],
                }}
            />
        );
    },
};

export const DifferentIndicators: StoryObj<Component> = {
    render: () => {
        return (
            <TimeSlotBar
                startTime="08:00"
                endTime="17:00"
                onSlotClick={() => {
                    /* empty arrow function */
                }}
                slots={[
                    {
                        id: "block-1",
                        startTime: "8:00",
                        endTime: "9:00",
                        styleAttributes: {
                            styleType: "stripes",
                            backgroundColor: Colour["bg-stronger"],
                            backgroundColor2: Colour["bg-strongest"],
                        },
                        label: "Blocked",
                        clickable: false,
                    },
                    {
                        id: "2",
                        startTime: "09:00",
                        endTime: "10:00",
                        styleAttributes: {
                            backgroundColor: "#EF413D",
                            color: "#FFFFFF",
                        },
                        label: "Event 1",
                    },
                    {
                        id: "block-2",
                        startTime: "12:00",
                        endTime: "14:00",
                        styleAttributes: {
                            styleType: "stripes",
                            backgroundColor: "#57A9FF",
                            backgroundColor2: "#81BFFF",
                            color: "#FFFFFF",
                        },
                        label: "Hold",
                        clickable: false,
                    },
                    {
                        id: "3",
                        startTime: "15:15",
                        endTime: "16:45",
                        styleAttributes: {
                            backgroundColor: Colour["bg-available"],
                        },
                    },
                ]}
                styleAttributes={{
                    styleType: "stripes",
                    backgroundColor: Colour["bg-stronger"],
                    backgroundColor2: Colour["bg-strongest"],
                }}
            />
        );
    },
};
