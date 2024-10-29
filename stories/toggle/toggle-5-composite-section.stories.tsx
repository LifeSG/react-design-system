import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../src";
import { Form } from "../../src/form";
import { StoryContainer } from "../storybook-common";
import { Variants } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Selection and input/Toggle/With composite section",
    component: Toggle,
};
export default meta;

const ChildComponent = () => (
    <>
        Additional content can be shown here. You can add{" "}
        <strong>bold text</strong> or{" "}
        <a href="https://life.gov.sg" target="_blank" rel="noreferrer">
            links
        </a>
        .
    </>
);

export const CheckboxType: StoryObj<Component> = {
    render: () => {
        return (
            <Variants>
                <Toggle
                    indicator
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                    checked
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    checked
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    error
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
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
                <Toggle
                    indicator
                    type="radio"
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type="radio"
                    checked
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type="radio"
                    disabled
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type="radio"
                    disabled
                    checked
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type="radio"
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: false,
                    }}
                    error
                >
                    Text
                </Toggle>
            </Variants>
        );
    },
};

export const Collapsible: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Toggle
                    indicator
                    checked
                    compositeSection={{
                        children: <ChildComponent />,
                        collapsible: true,
                    }}
                >
                    Sample text
                </Toggle>
            </StoryContainer>
        );
    },
};

export const CollapsedWithError: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Toggle
                    indicator
                    checked
                    error
                    compositeSection={{
                        children: (
                            <Form.Input
                                label="Label"
                                errorMessage="Invalid field"
                            />
                        ),
                        collapsible: true,
                        initialExpanded: false,
                        errors: ["Something went wrong"],
                    }}
                >
                    Sample text
                </Toggle>
            </StoryContainer>
        );
    },
};

export const CollapsedWithErrorAndDisabled: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Toggle
                    indicator
                    checked
                    disabled
                    error
                    compositeSection={{
                        children: (
                            <Form.Input
                                label="Label"
                                errorMessage="Invalid field"
                            />
                        ),
                        collapsible: true,
                        initialExpanded: false,
                        errors: ["Something went wrong"],
                    }}
                >
                    Sample text
                </Toggle>
            </StoryContainer>
        );
    },
};
