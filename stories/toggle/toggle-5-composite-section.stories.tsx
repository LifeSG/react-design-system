import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { Toggle } from "src/toggle";
import { StoryContainer } from "../storybook-common";
import { VariantDecorator } from "./doc-elements";

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

// NOTE: SB doesn't like the nested JSX, workaround is to pass down through args
export const CheckboxType: StoryObj<Component> = {
    args: {
        compositeSection: {
            children: <ChildComponent />,
            collapsible: false,
        },
    },
    render: (args) => {
        return (
            <>
                <Toggle indicator {...args}>
                    Text
                </Toggle>
                <Toggle indicator checked {...args}>
                    Text
                </Toggle>
                <Toggle indicator disabled {...args}>
                    Text
                </Toggle>
                <Toggle indicator disabled checked {...args}>
                    Text
                </Toggle>
                <Toggle indicator error {...args}>
                    Text
                </Toggle>
            </>
        );
    },
    decorators: [VariantDecorator],
};

// NOTE: SB doesn't like the nested JSX, workaround is to pass down through args
export const RadioType: StoryObj<Component> = {
    args: {
        compositeSection: {
            children: <ChildComponent />,
            collapsible: false,
        },
    },
    render: (args) => {
        return (
            <>
                <Toggle indicator type="radio" {...args}>
                    Text
                </Toggle>
                <Toggle indicator type="radio" checked {...args}>
                    Text
                </Toggle>
                <Toggle indicator type="radio" disabled {...args}>
                    Text
                </Toggle>
                <Toggle indicator type="radio" disabled checked {...args}>
                    Text
                </Toggle>
                <Toggle indicator type="radio" error {...args}>
                    Text
                </Toggle>
            </>
        );
    },
    decorators: [VariantDecorator],
};

// NOTE: SB doesn't like the nested JSX, workaround is to declare outside of the CSF
export const Collapsible: StoryObj<Component> = {
    render: (_args) => {
        return _Collapsible;
    },
    decorators: [
        (Story) => (
            <StoryContainer>
                <Story />
            </StoryContainer>
        ),
    ],
};

const _Collapsible = (
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
);

// NOTE: SB doesn't like the nested JSX, workaround is to declare outside of the CSF
export const CollapsedWithError: StoryObj<Component> = {
    render: (_args) => {
        return _CollapsedWithError;
    },
    decorators: [
        (Story) => (
            <StoryContainer>
                <Story />
            </StoryContainer>
        ),
    ],
};

const _CollapsedWithError = (
    <Toggle
        indicator
        checked
        error
        compositeSection={{
            children: <Form.Input label="Label" errorMessage="Invalid field" />,
            collapsible: true,
            initialExpanded: false,
            errors: ["Something went wrong"],
        }}
    >
        Sample text
    </Toggle>
);

// NOTE: SB doesn't like the nested JSX, workaround is to declare outside of the CSF
export const CollapsedWithErrorAndDisabled: StoryObj<Component> = {
    render: (_args) => {
        return _CollapsedWithErrorAndDisabled;
    },
    decorators: [
        (Story) => (
            <StoryContainer>
                <Story />
            </StoryContainer>
        ),
    ],
};

const _CollapsedWithErrorAndDisabled = (
    <Toggle
        indicator
        checked
        disabled
        error
        compositeSection={{
            children: <Form.Input label="Label" errorMessage="Invalid field" />,
            collapsible: true,
            initialExpanded: false,
            errors: ["Something went wrong"],
        }}
    >
        Sample text
    </Toggle>
);
