import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ImageButton } from "src/image-button";
import {
    GridDecorator,
    toStoryArgTypes,
    toStoryIncludedProps,
} from "stories/storybook-common";

import { storybookArgTypesByTitle } from "../../.storybook/generated/storybook-argtypes.generated";

type Component = typeof ImageButton;

const meta: Meta<Component> = {
    title: "Selection and input/ImageButton",
    component: ImageButton,
    argTypes: toStoryArgTypes(
        storybookArgTypesByTitle["Selection and input/ImageButton"],
        "ImageButtonProps"
    ),
};

export default meta;

export const Playground: StoryObj<Component> = {
    parameters: {
        controls: {
            disable: false,
            include: toStoryIncludedProps(
                storybookArgTypesByTitle["Selection and input/ImageButton"],
                "ImageButtonProps"
            ).filter((propName) => !["disabled", "type"].includes(propName)),
        },
    },

    args: {
        imgSrc: "https://cdn-icons-png.flaticon.com/512/4401/4401459.png",
    },
    render: (args) => {
        return <ImageButton {...args}>Office Equipment</ImageButton>;
    },
};

export const Variants: StoryObj<Component> = {
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

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <ImageButton
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
            imgSrc="https://cdn-icons-png.flaticon.com/512/4401/4401459.png"
        >
            Office Equipment
        </ImageButton>
    ),
};
