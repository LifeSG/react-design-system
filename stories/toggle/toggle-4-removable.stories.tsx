import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../src";
import { Variants } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/Removable",
    component: Toggle,
};

export default meta;

export const CheckboxType: StoryObj<Component> = {
    render: () => {
        return (
            <Variants>
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
            </Variants>
        );
    },
};

export const RadioType: StoryObj<Component> = {
    render: () => {
        return (
            <Variants>
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
            </Variants>
        );
    },
};
