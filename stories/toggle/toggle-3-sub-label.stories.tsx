import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "src/toggle";
import { Wrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/With sub label",
    component: Toggle,
};

export default meta;

export const WithSubLabel: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper $layout="vertical">
                <div>
                    <Toggle
                        indicator
                        subLabel="This is a helper/description text."
                    >
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
                </div>
                <div>
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
                </div>
                <div>
                    <Toggle
                        type="yes"
                        indicator
                        subLabel="This is a helper/description text."
                    >
                        Hello
                    </Toggle>
                    <Toggle
                        type="yes"
                        indicator
                        checked
                        subLabel="This is a helper/description text."
                    >
                        Hello
                    </Toggle>
                    <Toggle
                        type="yes"
                        indicator
                        disabled
                        subLabel="This is a helper/description text."
                    >
                        Hello
                    </Toggle>
                    <Toggle
                        type="yes"
                        indicator
                        disabled
                        checked
                        subLabel="This is a helper/description text."
                    >
                        Hello
                    </Toggle>
                    <Toggle
                        type="yes"
                        indicator
                        error
                        subLabel="This is a helper/description text."
                    >
                        Hello
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
