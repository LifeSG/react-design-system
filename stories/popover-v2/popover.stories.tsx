import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { Modal } from "src/modal";
import { PopoverRenderProps, PopoverTrigger, PopoverV2 } from "src/popover-v2";
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

const getCustomContent = (resizeProps: PopoverRenderProps) => (
    <Menu.Content
        style={{
            maxHeight: resizeProps.maxHeight,
            overflowY: resizeProps.overflow,
        }}
    >
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

const getDefaultApperance = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact
        that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some? There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on
        the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.`;

export const ResizeAndFlip: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <PopoverTrigger
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    enableFlip={false}
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableFlip={false}
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    popoverContent={getDefaultApperance}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    popoverContent={getDefaultApperance}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    enableFlip={false}
                    popoverContent={getDefaultApperance}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableFlip={false}
                    popoverContent={getDefaultApperance}
                    position="bottom-start"
                    zIndex={10}
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
                "Resize disabled, Flip enabled (Default)",
                "Resize and Flip enabled",
                "Resize enabled, Flip disabled",
                "Resize and Flip disabled",
            ],
            rowHeaders: ["Custom popover content", "Default"],
        }),
    ],
};

export const Overflow: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <PopoverTrigger
                    enableResize={true}
                    overflow="visible"
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    overflow="hidden"
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    overflow="clip"
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    overflow="scroll"
                    popoverContent={getCustomContent}
                    position="bottom-start"
                >
                    <Avatar>Name</Avatar>
                </PopoverTrigger>
                <PopoverTrigger
                    enableResize={true}
                    overflow="auto"
                    popoverContent={getCustomContent}
                    position="bottom-start"
                    zIndex={10}
                >
                    <Avatar>Name</Avatar>
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
