import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../../src/form";
import { Headings, Wrapper } from "./doc-elements";
import { Toggle } from "../../src";

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
                        indicator
                        remove
                        showCompositeOptionSection
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        remove
                        showCompositeOptionSection
                        checked
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>

                    <div>
                        <Toggle
                            indicator
                            remove
                            showCompositeOptionSection
                            error
                            errorMessage={"this is the error"}
                            compositeOptionSection={
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            }
                        >
                            Text
                        </Toggle>
                    </div>
                    <Toggle
                        indicator
                        disabled
                        remove
                        showCompositeOptionSection
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        disabled
                        checked
                        remove
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
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
                        indicator
                        type={"radio"}
                        remove
                        showCompositeOptionSection
                    >
                        Hello
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        remove
                        showCompositeOptionSection
                        checked
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>
                    <div>
                        <Toggle
                            indicator
                            type={"radio"}
                            remove
                            showCompositeOptionSection
                            error
                            errorMessage={"this is the error"}
                            compositeOptionSection={
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            }
                        >
                            Text
                        </Toggle>
                    </div>
                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        remove
                        showCompositeOptionSection
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        checked
                        remove
                        showCompositeOptionSection
                        compositeOptionSection={
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        }
                    >
                        Text
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
