import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { VariantDecorator } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/Removable",
    component: Toggle,
    decorators: [VariantDecorator],
};

export default meta;

export const CheckboxType: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle removable indicator>
                    Text
                </Toggle>
                <Toggle removable indicator checked>
                    Text
                </Toggle>
                <Toggle removable indicator disabled>
                    Text
                </Toggle>
                <Toggle removable indicator disabled checked>
                    Text
                </Toggle>
                <Toggle removable indicator error>
                    Text
                </Toggle>
            </>
        );
    },
};

export const RadioType: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle removable indicator type="radio">
                    Text
                </Toggle>
                <Toggle removable indicator type="radio" checked>
                    Text
                </Toggle>
                <Toggle removable indicator type="radio" disabled>
                    Text
                </Toggle>
                <Toggle removable indicator type="radio" disabled checked>
                    Text
                </Toggle>
                <Toggle removable indicator type="radio" error>
                    Text
                </Toggle>
            </>
        );
    },
};
