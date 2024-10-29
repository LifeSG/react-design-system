import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { Headings, SimpleContainer, Wrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle",
    component: Toggle,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div>
                    <Toggle>Hello</Toggle>
                    <Toggle checked>Hello</Toggle>
                    <Toggle disabled>Hello</Toggle>
                    <Toggle disabled checked>
                        Hello
                    </Toggle>
                    <Toggle error>Hello</Toggle>
                </div>
            </Wrapper>
        );
    },
};

export const Behaviours: StoryObj<Component> = {
    render: () => {
        return (
            <SimpleContainer>
                <li>
                    <Toggle>Checkbox</Toggle>
                </li>
                <li>
                    <Toggle type="radio">Radio</Toggle>
                </li>
                <li>
                    <Toggle type="yes" indicator>
                        Yes
                    </Toggle>
                </li>
                <li>
                    <Toggle type="no" indicator>
                        No
                    </Toggle>
                </li>
            </SimpleContainer>
        );
    },
};
