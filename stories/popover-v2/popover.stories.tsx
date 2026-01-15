import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useState } from "react";
import { Button } from "src/button";
import { Modal } from "src/modal";
import { PopoverTrigger, PopoverV2 } from "src/popover-v2";
import { GridDecorator } from "../storybook-common";
import { CustomPopover, POPOVER_CONTENT } from "./doc-elements";

type Component = typeof PopoverV2;
type TriggerComponent = typeof PopoverTrigger;

const meta: Meta<Component> = {
    title: "Overlays/PopoverV2",
    component: PopoverV2,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <PopoverTrigger popoverContent="This is the popover content">
                <Button.Default>Click me</Button.Default>
            </PopoverTrigger>
        );
    },
};

export const HoverInteraction: StoryObj<Component> = {
    render: (_args) => {
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

export const DefaultStyling: StoryObj<Component> = {
    render: (_args) => {
        return (
            <PopoverTrigger
                popoverContent={
                    <>
                        <p>
                            You can add <strong>bold text</strong> and{" "}
                            <a>links</a>.
                        </p>
                        <br />
                        <p>You can list bullet points:</p>
                        <ul>
                            <li>List item</li>
                        </ul>
                        <p>Or display numbered lists:</p>
                        <ol>
                            <li>List item</li>
                        </ol>
                    </>
                }
            >
                <Button.Default>Click me</Button.Default>
            </PopoverTrigger>
        );
    },
};

export const Appearance: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
            </>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "3rem 0",
                }}
            >
                <Story />
            </div>
        ),
    ],
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

export const UsageInOverlay: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const [showNested, setShowNested] = useState(false);

        return (
            <>
                <Button.Default
                    onClick={() => {
                        setShow(true);
                        setTimeout(() => {
                            setShowNested(true);
                        }, 3000);
                    }}
                >
                    Show modal
                </Button.Default>
                <Modal show={show} onOverlayClick={() => setShow(false)}>
                    <PopoverTrigger popoverContent="I'm a tooltip!">
                        <Button.Default>Toggle tooltip</Button.Default>
                    </PopoverTrigger>
                </Modal>
                <Modal
                    show={showNested}
                    onOverlayClick={() => setShowNested(false)}
                >
                    <PopoverTrigger popoverContent="I'm a nested tooltip!">
                        <Button.Default>Toggle nested tooltip</Button.Default>
                    </PopoverTrigger>
                </Modal>
            </>
        );
    },
};

export const ResizeAndFlip: StoryObj<TriggerComponent> = {
    args: {
        popoverContent: POPOVER_CONTENT,
        zIndex: 10,
    },
    render: (args) => {
        return (
            <>
                <PopoverTrigger {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger enableResize={true} {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    enableFlip={false}
                    {...args}
                >
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger enableFlip={false} {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Resize disabled, Flip enabled (Default)",
                "Resize and Flip enabled",
                "Resize enabled, Flip disabled",
                "Resize and Flip disabled",
            ],
        }),
    ],
};

export const ResizeAndFlipWithCustomContent: StoryObj<Component> = {
    render: () => {
        return (
            <PopoverTrigger
                enableResize
                popoverContent={({ maxHeight, overflow }) => (
                    <CustomPopover style={{ maxHeight, overflow }} />
                )}
            >
                <Button.Default>Click me</Button.Default>
            </PopoverTrigger>
        );
    },
};

export const Overflow: StoryObj<TriggerComponent> = {
    args: {
        enableResize: true,
        popoverContent: POPOVER_CONTENT,
        zIndex: 10,
    },
    render: (args) => {
        return (
            <>
                <PopoverTrigger overflow="visible" {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger overflow="hidden" {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger overflow="clip" {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger overflow="scroll" {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
                <PopoverTrigger overflow="auto" {...args}>
                    <Button.Default>Click me</Button.Default>
                </PopoverTrigger>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 5,
            columnHeaders: ["Visible", "Hidden", "Clip", "Scroll", "Auto"],
        }),
    ],
};
