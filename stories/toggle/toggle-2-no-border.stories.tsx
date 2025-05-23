import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { VariantDecorator } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/No border",
    component: Toggle,
    decorators: [VariantDecorator],
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle styleType="no-border">Hello</Toggle>
                <Toggle styleType="no-border" checked>
                    Hello
                </Toggle>
                <Toggle styleType="no-border" disabled>
                    Hello
                </Toggle>
                <Toggle styleType="no-border" disabled checked>
                    Hello
                </Toggle>
                <Toggle styleType="no-border" error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const CheckboxIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator styleType="no-border">
                    Hello
                </Toggle>
                <Toggle indicator styleType="no-border" checked>
                    Hello
                </Toggle>
                <Toggle indicator styleType="no-border" disabled>
                    Hello
                </Toggle>
                <Toggle indicator styleType="no-border" disabled checked>
                    Hello
                </Toggle>
                <Toggle indicator styleType="no-border" error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const RadioIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator type="radio" styleType="no-border">
                    Hello
                </Toggle>
                <Toggle indicator type="radio" styleType="no-border" checked>
                    Hello
                </Toggle>
                <Toggle indicator type="radio" styleType="no-border" disabled>
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    type="radio"
                    styleType="no-border"
                    disabled
                    checked
                >
                    Hello
                </Toggle>
                <Toggle indicator type="radio" styleType="no-border" error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const YesIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator type="yes" styleType="no-border">
                    Hello
                </Toggle>
                <Toggle indicator type="yes" styleType="no-border" checked>
                    Hello
                </Toggle>
                <Toggle indicator type="yes" styleType="no-border" disabled>
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    type="yes"
                    styleType="no-border"
                    disabled
                    checked
                >
                    Hello
                </Toggle>
                <Toggle indicator type="yes" styleType="no-border" error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const NoIndicator: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator type="no" styleType="no-border">
                    Hello
                </Toggle>
                <Toggle indicator type="no" styleType="no-border" checked>
                    Hello
                </Toggle>
                <Toggle indicator type="no" styleType="no-border" disabled>
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    type="no"
                    styleType="no-border"
                    disabled
                    checked
                >
                    Hello
                </Toggle>
                <Toggle indicator type="no" styleType="no-border" error>
                    Hello
                </Toggle>
            </>
        );
    },
};
