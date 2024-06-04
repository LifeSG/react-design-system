import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "../../src";
import { Form } from "../../src/form";
import { Headings, Wrapper } from "./doc-elements";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/removable",
    component: Toggle,
};

export default meta;

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
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                        checked
                    >
                        Text
                    </Toggle>

                    <Toggle
                        removable
                        indicator
                        disabled
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        disabled
                        checked
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        error
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
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
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        checked
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        disabled
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        disabled
                        checked
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        removable
                        indicator
                        type={"radio"}
                        compositeSection={{
                            show: true,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            collapsible: false,
                        }}
                        error
                    >
                        Text
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
