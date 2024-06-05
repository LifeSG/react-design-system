import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "../../src";
import { Form } from "../../src/form";
import { Variants } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/With composite section",
    component: Toggle,
};
export default meta;

export const CheckboxType: StoryObj<Component> = {
    render: () => {
        return (
            <Variants>
                <Toggle
                    indicator
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                    checked
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    disabled
                    checked
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    error
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
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
                    type={"radio"}
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type={"radio"}
                    checked
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type={"radio"}
                    disabled
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type={"radio"}
                    disabled
                    checked
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
                    }}
                >
                    Text
                </Toggle>
                <Toggle
                    indicator
                    type={"radio"}
                    compositeSection={{
                        children: <Form.Input label="Label" />,
                        show: true,
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
            <Toggle
                indicator
                checked
                compositeSection={{
                    children: <Form.Input label="Label" />,
                    show: true,
                    collapsible: true,
                }}
            >
                Sample text
            </Toggle>
        );
    },
};

export const CollapsibleWithError: StoryObj<Component> = {
    render: () => {
        return (
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
                    show: true,
                    collapsible: true,
                    errors: ["Something went wrong"],
                }}
            >
                Sample text
            </Toggle>
        );
    },
};

export const CollapsibleWithErrorAndDisabled: StoryObj<Component> = {
    render: () => {
        return (
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
                    show: true,
                    collapsible: true,
                    errors: ["Something went wrong"],
                }}
            >
                Sample text
            </Toggle>
        );
    },
};
