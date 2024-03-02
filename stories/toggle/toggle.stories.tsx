import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "src/text";
import { Toggle } from "src/toggle";
import { Headings, SimpleContainer, Wrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle",
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

export const InteractiveSublabel: StoryObj<Component> = {
    render: () => {
        return (
            <Toggle
                indicator
                subLabel={() => (
                    <div>
                        Clicking here toggles the button.
                        <div style={{ pointerEvents: "auto" }}>
                            Clicking here does not and{" "}
                            <Text.Hyperlink.Small
                                href="https://example.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                external
                            >
                                this link
                            </Text.Hyperlink.Small>{" "}
                            is accessible
                        </div>
                    </div>
                )}
            >
                Hello
            </Toggle>
        );
    },
};
