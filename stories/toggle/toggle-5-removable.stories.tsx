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
    removable: true,
    show: true,
    children: renderCompositeSection(),
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
                    <Toggle indicator compositeSection={compositeOption}>
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        compositeSection={compositeOption}
                        checked
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <div>
                        <Toggle
                            indicator
                            error
                            errorMessage="Error message required"
                            compositeSection={compositeOption}
                        >
                            Text
                        </Toggle>
                    </div>
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
                        indicator
                        type={"radio"}
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <div>
                        <Toggle
                            indicator
                            type={"radio"}
                            compositeSection={compositeOption}
                            error
                            errorMessage="Error message required"
                        >
                            Text
                        </Toggle>
                    </div>
                </div>
            </Wrapper>
        );
    },
};
