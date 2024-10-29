import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { SubLabelStoryWrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/With sub label",
    component: Toggle,
};

export default meta;

export const WithSubLabel: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Toggle indicator subLabel="This is a helper/description text.">
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    checked
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    checked
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    indicator
                    error
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    type="radio"
                    styleType="no-border"
                    indicator
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    type="radio"
                    styleType="no-border"
                    indicator
                    checked
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    type="radio"
                    styleType="no-border"
                    indicator
                    disabled
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    type="radio"
                    styleType="no-border"
                    indicator
                    disabled
                    checked
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
                <Toggle
                    type="radio"
                    styleType="no-border"
                    indicator
                    error
                    subLabel="This is a helper/description text."
                >
                    Hello
                </Toggle>
            </>
        );
    },
    decorators: [
        (Story) => (
            <SubLabelStoryWrapper>
                <Story />
            </SubLabelStoryWrapper>
        ),
    ],
};
