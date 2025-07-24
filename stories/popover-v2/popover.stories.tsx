import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Modal } from "src/modal";
import { PopoverTrigger, PopoverV2 } from "src/popover-v2";
import { Avatar } from "../../src/avatar";
import { Menu } from "../../src/menu";
import { GridDecorator } from "../storybook-common";

type Component = typeof PopoverV2;

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

const getMenuContent = () => (
    <Menu.Content>
        <Menu.Section showDivider={false}>
            <Menu.Item label="Name" subLabel="email@email.sg" />
        </Menu.Section>

        <Menu.Section label="Category 1">
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
        </Menu.Section>

        <Menu.Section>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>

        <Menu.Section label="Category 2">
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
            <Menu.Item>Menu item</Menu.Item>
            <Menu.Link href="https://www.google.com">Menu link</Menu.Link>
        </Menu.Section>
    </Menu.Content>
);

export const ScrollAndFlip: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <PopoverTrigger
                    popoverContent={getMenuContent}
                    position="bottom-start"
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableContentScroll={true}
                    popoverContent={getMenuContent}
                    position="bottom-start"
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableContentScroll={true}
                    enableFlip={false}
                    popoverContent={getMenuContent}
                    position="bottom-start"
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableFlip={false}
                    popoverContent={getMenuContent}
                    position="bottom-start"
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
            </>
        );
    },

    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Scroll disabled, Flip enabled (Default)",
                "Scroll and Flip enabled",
                "Scroll enabled, Flip disabled",
                "Scroll and Flip disabled",
            ],
        }),
    ],
};
