import type { Meta, StoryObj } from "@storybook/react";
import { CompositeOption } from "src/composite-option";
import { Form } from "../../src/form";
import { Headings, Wrapper } from "./doc-elements";

type Component = typeof CompositeOption;

const meta: Meta<Component> = {
    title: "Data Input/CompositeOption/removable",
    component: CompositeOption,
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
                    <CompositeOption remove showChildren title={"Text"}>
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption remove showChildren checked title={"Text"}>
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>

                    <div>
                        <CompositeOption
                            remove
                            showChildren
                            title={"Text"}
                            error
                            errorMessage={"this is the error"}
                        >
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        </CompositeOption>
                    </div>
                    <CompositeOption
                        title={"Text"}
                        disabled
                        remove
                        showChildren
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption title={"Text"} disabled checked remove>
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
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
                    <CompositeOption
                        type={"radio"}
                        remove
                        showChildren
                        title={"Text"}
                    >
                        Hello
                    </CompositeOption>
                    <CompositeOption
                        type={"radio"}
                        remove
                        showChildren
                        checked
                        title={"Text"}
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <div>
                        <CompositeOption
                            type={"radio"}
                            remove
                            showChildren
                            title={"Text"}
                            error
                            errorMessage={"this is the error"}
                        >
                            <Form.Input
                                label="This is the error state"
                                placeholder="Enter here..."
                                onChange={() => ({})}
                            />
                        </CompositeOption>
                    </div>
                    <CompositeOption
                        type={"radio"}
                        title={"Text"}
                        disabled
                        remove
                        showChildren
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption
                        type={"radio"}
                        title={"Text"}
                        disabled
                        checked
                        remove
                        showChildren
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                </div>
            </Wrapper>
        );
    },
};
