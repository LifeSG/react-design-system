import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../../src/form";
import { Headings, Wrapper } from "./doc-elements";
import { Toggle, ToggleCompositeSectionProps } from "../../src";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/removable",
    component: Toggle,
};

export default meta;

const renderCompositeSection = () => {
    return (
        <Form.Input
            label="This is the error state"
            placeholder="Enter here..."
            onChange={() => ({})}
        />
    );
};
const compositeOption: ToggleCompositeSectionProps = {
    show: true,
    children: renderCompositeSection(),
    collapsible: false,
};

export const CheckboxRemovable: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div
                    style={{
                        display: "grid",
                        paddingBottom: 16,
                        rowGap: 26,
                        columnGap: 26,
                        gridTemplate: "auto / repeat(5,minmax(0,1fr))",
                    }}
                >
                    <Toggle
                        removable
                        indicator
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        compositeSection={compositeOption}
                        checked
                    >
                        Text
                    </Toggle>

                    <Toggle
                        removable
                        indicator
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        error
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};

export const RadioRemovable: StoryObj<Component> = {
    render: () => {
        return (
            <Wrapper>
                <Headings />
                <div
                    style={{
                        display: "grid",
                        paddingBottom: 16,
                        rowGap: 26,
                        columnGap: 26,
                        gridTemplate: "auto / repeat(5,minmax(0,1fr))",
                    }}
                >
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        compositeSection={compositeOption}
                        error
                    >
                        Text
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
