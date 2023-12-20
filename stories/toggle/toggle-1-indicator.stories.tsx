import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { Headings, Wrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/With indicator",
    component: Toggle,
};

export default meta;

export const CheckboxType: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div>
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
                </div>
            </Wrapper>
        );
    },
};

export const RadioType: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div>
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
                </div>
            </Wrapper>
        );
    },
};

export const YesType: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div>
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
                </div>
            </Wrapper>
        );
    },
};

export const NoType: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div>
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
                </div>
            </Wrapper>
        );
    },
};
