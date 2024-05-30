import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "../../src/form";
import { Headings, HeadingsNextLine, Wrapper } from "./doc-elements";
import { Toggle } from "../../src";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/collapsible",
    component: Toggle,
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
                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
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
                        checked
                        subLabel={"this is helper text"}
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
                        subLabel={"this is helper text"}
                        disabled
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
                        subLabel={"this is helper text"}
                        disabled
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
                            subLabel={"this is helper text"}
                            error
                            compositeOptionSection={
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            }
                            errorMessage={"this is the error"}
                        >
                            Text
                        </Toggle>
                    </div>
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
                    <Toggle
                        indicator
                        hideMoreOrLessButton
                        checked
                        subLabel={"this is helper text"}
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
                        remove={false}
                        checked
                        subLabel={"this is helper text"}
                        errorList={checkboxError}
                        showCompositeOptionSection={false}
                        compositeOptionSection={
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
                        }
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        remove={false}
                        checked
                        compositeOptionSection={"Text"}
                        subLabel={"this is helper text"}
                        errorList={["Type inline error here"]}
                        showCompositeOptionSection={false}
                        disabled={true}
                    >
                        Hello
                    </Toggle>
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
                    <Toggle
                        indicator
                        type={"radio"}
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
                        remove={false}
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

                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
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
                            compositeOptionSection={
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            }
                            error
                            errorMessage={"this is the error"}
                        >
                            Text
                        </Toggle>
                    </div>
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
                    <Toggle
                        indicator
                        type={"radio"}
                        hideMoreOrLessButton
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

                    <Toggle
                        indicator
                        remove={false}
                        checked
                        errorList={radioError}
                        showCompositeOptionSection={false}
                        type="radio"
                        compositeOptionSection={
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
                        }
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        remove={false}
                        checked
                        compositeOptionSection={"Text"}
                        errorList={["Enter a label"]}
                        showCompositeOptionSection={false}
                        disabled={true}
                    >
                        Hello
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
