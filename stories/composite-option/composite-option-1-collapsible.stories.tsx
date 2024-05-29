import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CompositeOption } from "src/composite-option";
import { Form } from "../../src/form";
import { Headings, HeadingsNextLine, Wrapper } from "./doc-elements";

type Component = typeof CompositeOption;

const meta: Meta<Component> = {
    title: "Data Input/CompositeOption/collapsible",
    component: CompositeOption,
};
export default meta;

export const CheckboxCollapsible: StoryObj<Component> = {
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
            </Wrapper>
        );
    },
};

export const RadioCollapsible: StoryObj<Component> = {
    render: () => {
        const [radioError, setRadioError] = useState<string[] | undefined>([
            "Enter a label",
        ]);

        const onChangeHandler = (inputVal) => {
            if (inputVal === "") {
                setRadioError(["Enter a label"]);
            } else {
                setRadioError([]);
            }
        };
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
                    <CompositeOption type={"radio"} showChildren title={"Text"}>
                        <Form.Input
                            label="This is the error state"
                            placeholder="Enter here..."
                            onChange={() => ({})}
                        />
                    </CompositeOption>
                    <CompositeOption
                        type={"radio"}
                        remove={false}
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
                    <CompositeOption type={"radio"} title={"Text"} disabled>
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
                        type={"radio"}
                        hideMoreOrLessButton
                        checked
                        title={"Text"}
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
                        errorList={radioError}
                        showChildren={false}
                        type="radio"
                    >
                        <Form.Input
                            label="This is the error state"
                            errorMessage={
                                radioError ? radioError[0] : undefined
                            }
                            placeholder="Enter here..."
                            onChange={(event) =>
                                onChangeHandler(event.target.value)
                            }
                        />
                    </CompositeOption>
                    <CompositeOption
                        type={"radio"}
                        remove={false}
                        checked
                        title={"Text"}
                        errorList={["Enter a label"]}
                        showChildren={false}
                        disabled={true}
                    >
                        Hello
                    </CompositeOption>
                </div>
            </Wrapper>
        );
    },
};
