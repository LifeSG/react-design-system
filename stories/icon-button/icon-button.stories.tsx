import { LockIcon } from "@lifesg/react-icons/lock";
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
                <LockIcon aria-label="Lock" />
            </IconButton>
        );
    },
};

export const Variations: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <IconButton sizeType="large" styleType="primary">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="large" styleType="secondary">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="large" styleType="light">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="large" disabled>
                    <LockIcon />
                </IconButton>
                <IconButton styleType="primary">
                    <LockIcon />
                </IconButton>
                <IconButton styleType="secondary">
                    <LockIcon />
                </IconButton>
                <IconButton styleType="light">
                    <LockIcon />
                </IconButton>
                <IconButton disabled>
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="primary">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="secondary">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="small" styleType="light">
                    <LockIcon />
                </IconButton>
                <IconButton sizeType="small" disabled>
                    <LockIcon />
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
