import type { Meta, StoryObj } from "@storybook/react";
import { Button, PopoverTrigger, PopoverV2 } from "../../src";

type Component = typeof PopoverV2;

const meta: Meta<Component> = {
    title: "Modules/PopoverV2",
    component: PopoverV2,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <PopoverTrigger popoverContent="This is the popover content">
                <Button.Default>Click me</Button.Default>
            </PopoverTrigger>
        );
    },
};

export const HoverInteraction: StoryObj<Component> = {
    render: () => {
        return (
            <PopoverTrigger
                popoverContent="This is the popover content"
                trigger="hover"
            >
                <Button.Default>Hover me</Button.Default>
            </PopoverTrigger>
        );
    },
};

export const Appearance: StoryObj<Component> = {
    render: () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "3rem 0",
                }}
            >
                <PopoverTrigger popoverContent="Remains aligned to the left of the screen when screen width is reduced">
                    <Button.Default>Left</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger
                    popoverContent={
                        <div style={{ height: "500px" }}>
                            Remains in view as much as possible. Scroll up and
                            down to view the repositioning
                        </div>
                    }
                >
                    <Button.Default>Center</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger popoverContent="Remains aligned to the right of the screen when screen width is reduced">
                    <Button.Default>Right</Button.Default>
                </PopoverTrigger>
            </div>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const Customisation: StoryObj<Component> = {
    render: () => {
        return (
            <PopoverTrigger
                popoverContent={() => (
                    <div style={{ background: "aliceblue", padding: "1rem" }}>
                        A custom popover!
                    </div>
                )}
            >
                <Button.Default>Click me</Button.Default>
            </PopoverTrigger>
        );
    },
};
