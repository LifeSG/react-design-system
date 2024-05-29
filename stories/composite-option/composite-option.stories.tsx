import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CompositeOption } from "src/composite-option";
import { Text } from "src/text";
import { Form } from "../../src/form";
import {
    Headings,
    HeadingsNextLine,
    SimpleContainer,
    Wrapper,
} from "./doc-elements";
type Component = typeof CompositeOption;

const meta: Meta<Component> = {
    title: "Data Input/CompositeOption",
    component: CompositeOption,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [checkboxError, setCheckboxError] = useState<
            string[] | undefined
        >(["Enter a label"]);

        const onChangeHandler = (inputVal) => {
            if (inputVal === "") {
                setCheckboxError(["Enter a label"]);
            } else {
                setCheckboxError([]);
            }
        };
        return (
            <Wrapper>
                <Text.H4>Collapsible</Text.H4>
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
                        title={"Text"}
                        subtitle={"this is helper text"}
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption
                        checked
                        title={"Text"}
                        subtitle={"this is helper text"}
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>

                    <div>
                        <CompositeOption
                            title={"Text"}
                            subtitle={"this is helper text"}
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
                        subtitle={"this is helper text"}
                        disabled
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption
                        title={"Text"}
                        subtitle={"this is helper text"}
                        disabled
                        checked
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                </div>

                <HeadingsNextLine />
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
                        hideMoreOrLessButton
                        checked
                        title={"Text"}
                        subtitle={"this is helper text"}
                    >
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>

                    <CompositeOption
                        remove={false}
                        checked
                        title={"Text"}
                        subtitle={"this is helper text"}
                        errorList={checkboxError}
                        showChildren={false}
                    >
                        <Form.Input
                            label="This is the error state"
                            errorMessage={
                                checkboxError ? checkboxError[0] : undefined
                            }
                            placeholder="Enter here..."
                            onChange={(event) =>
                                onChangeHandler(event.target.value)
                            }
                        />
                    </CompositeOption>
                    <CompositeOption
                        remove={false}
                        checked
                        title={"Text"}
                        subtitle={"this is helper text"}
                        errorList={["Type inline error here"]}
                        showChildren={false}
                        disabled={true}
                    >
                        Hello
                    </CompositeOption>
                </div>
                <Text.H4>Removable</Text.H4>
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

export const Behaviours: StoryObj<Component> = {
    render: () => {
        return (
            <SimpleContainer>
                <li>
                    <CompositeOption title={"abc"}>Checkbox</CompositeOption>
                </li>
                <li>
                    <CompositeOption title={"abc"} type="radio">
                        Radio
                    </CompositeOption>
                </li>
            </SimpleContainer>
        );
    },
};
