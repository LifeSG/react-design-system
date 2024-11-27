import type { Meta, StoryObj } from "@storybook/react";
import { ImageButton } from "src/image-button";
import { GridDecorator } from "stories/storybook-common";

type Component = typeof ImageButton;

const meta: Meta<Component> = {
    title: "Selection and input/ImageButton",
    component: ImageButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    args: {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4401/4401459.png",
        children: "Office Equipment",
    },
    render: (args) => {
        return (
            <>
                <ImageButton {...args} />
                <ImageButton {...args} selected />
                <ImageButton {...args} disabled />
                <ImageButton {...args} error />
                <ImageButton {...args} error selected />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 1,
            rowHeaders: [
                "Default",
                "Selected",
                "Disabled",
                "Error",
                "Error Selected",
            ],
        }),
    ],
};

export const Fallback: StoryObj<Component> = {
    render: (_args) => {
        return (
            <ImageButton imgSrc="https://example.com/404">Rooms</ImageButton>
        );
    },
};

export const FlexBehaviour: StoryObj<Component> = {
    render: (args) => {
        return (
            <div style={{ display: "flex", gap: "1rem" }}>
                <ImageButton {...args}>Meeting Room</ImageButton>
                <ImageButton {...args}>Common Area</ImageButton>
                <ImageButton {...args}>Pantry</ImageButton>
                <ImageButton {...args}>Supply Closet</ImageButton>
            </div>
        );
    },
    args: {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4401/4401459.png",
    },
};
