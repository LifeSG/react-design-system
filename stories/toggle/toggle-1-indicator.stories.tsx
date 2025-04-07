import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { VariantDecorator } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/With indicator",
    component: Toggle,
    decorators: [VariantDecorator],
};

export default meta;

export const CheckboxType: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator>Hello</Toggle>
                <Toggle indicator checked>
                    Hello
                </Toggle>
                <Toggle indicator disabled>
                    Hello
                </Toggle>
                <Toggle indicator disabled checked>
                    Hello
                </Toggle>
                <Toggle indicator error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const RadioType: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle type="radio" indicator>
                    Hello
                </Toggle>
                <Toggle type="radio" indicator checked>
                    Hello
                </Toggle>
                <Toggle type="radio" indicator disabled>
                    Hello
                </Toggle>
                <Toggle type="radio" indicator disabled checked>
                    Hello
                </Toggle>
                <Toggle type="radio" indicator error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const YesType: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle type="yes" indicator>
                    Hello
                </Toggle>
                <Toggle type="yes" indicator checked>
                    Hello
                </Toggle>
                <Toggle type="yes" indicator disabled>
                    Hello
                </Toggle>
                <Toggle type="yes" indicator disabled checked>
                    Hello
                </Toggle>
                <Toggle type="yes" indicator error>
                    Hello
                </Toggle>
            </>
        );
    },
};

export const NoType: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Toggle type="no" indicator>
                    Hello
                </Toggle>
                <Toggle type="no" indicator checked>
                    Hello
                </Toggle>
                <Toggle type="no" indicator disabled>
                    Hello
                </Toggle>
                <Toggle type="no" indicator disabled checked>
                    Hello
                </Toggle>
                <Toggle type="no" indicator error>
                    Hello
                </Toggle>
            </>
        );
    },
};
