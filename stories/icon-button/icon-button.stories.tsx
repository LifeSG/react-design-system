import { BoxIcon } from "@lifesg/react-icons/box";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "src/icon-button";
import { GridDecorator } from "stories/storybook-common";

type Component = typeof IconButton;

const meta: Meta<Component> = {
    title: "Selection and input/IconButton",
    component: IconButton,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <IconButton>
                <BoxIcon aria-label="Archive item" />
            </IconButton>
        );
    },
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <IconButton sizeType="large" styleType="primary">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="large" styleType="secondary">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="large" styleType="light">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="large" disabled>
                    <BoxIcon />
                </IconButton>
                <IconButton styleType="primary">
                    <BoxIcon />
                </IconButton>
                <IconButton styleType="secondary">
                    <BoxIcon />
                </IconButton>
                <IconButton styleType="light">
                    <BoxIcon />
                </IconButton>
                <IconButton disabled>
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="primary">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="secondary">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="light">
                    <BoxIcon />
                </IconButton>
                <IconButton sizeType="small" disabled>
                    <BoxIcon />
                </IconButton>
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: ["Primary", "Secondary", "Light", "Disabled"],
            rowHeaders: ["Large", "Default", "Small"],
        }),
    ],
};

export const CustomComponents: StoryObj<Component> = {
    render: (_args) => {
        return (
            <IconButton>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/2171/2171991.png"
                    alt="Pet a cat"
                />
            </IconButton>
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <IconButton
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        >
            <BoxIcon aria-label="Archive item" />
        </IconButton>
    ),
};
