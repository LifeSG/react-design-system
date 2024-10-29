import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { SimpleStoryWrapper, VariantDecorator } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle",
    component: Toggle,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle>Hello</Toggle>
                <Toggle checked>Hello</Toggle>
                <Toggle disabled>Hello</Toggle>
                <Toggle disabled checked>
                    Hello
                </Toggle>
                <Toggle error>Hello</Toggle>
            </>
        );
    },
    decorators: [VariantDecorator],
};

export const Behaviours: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle>Checkbox</Toggle>
                <Toggle type="radio">Radio</Toggle>
                <Toggle type="yes" indicator>
                    Yes
                </Toggle>
                <Toggle type="no" indicator>
                    No
                </Toggle>
            </>
        );
    },
    decorators: [
        (Story) => (
            <SimpleStoryWrapper>
                <Story />
            </SimpleStoryWrapper>
        ),
    ],
};
