import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "../../src";
import { Form } from "../../src/form";
import { Headings, HeadingsNextLine, Wrapper } from "./doc-elements";

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
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        checked
                        subLabel={"this is helper text"}
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        disabled
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        disabled
                        checked
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        error
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
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
                        checked
                        subLabel={"this is helper text"}
                        compositeSection={{
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
                        indicator
                        checked
                        subLabel={"this is helper text"}
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    errorMessage={
                                        checkboxError
                                            ? checkboxError[0]
                                            : undefined
                                    }
                                    placeholder="Enter here..."
                                    onChange={(event) =>
                                        onChangeHandler(event.target.value)
                                    }
                                />
                            ),
                            errors: checkboxError,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        checked
                        subLabel={"this is helper text"}
                        disabled={true}
                        compositeSection={{
                            show: false,
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    errorMessage={
                                        checkboxError
                                            ? checkboxError[0]
                                            : undefined
                                    }
                                    placeholder="Enter here..."
                                    onChange={(event) =>
                                        onChangeHandler(event.target.value)
                                    }
                                />
                            ),
                            errors: ["Type inline error here"],
                        }}
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
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        checked
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
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
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                        }}
                        error
                    >
                        Text
                    </Toggle>
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
                        checked
                        compositeSection={{
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
                        indicator
                        checked
                        type="radio"
                        compositeSection={{
                            children: (
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
                            ),
                            errors: radioError,
                        }}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        checked
                        disabled={true}
                        compositeSection={{
                            children: (
                                <Form.Input
                                    label="This is the error state"
                                    placeholder="Enter here..."
                                    onChange={() => ({})}
                                />
                            ),
                            show: false,
                            errors: ["Enter a label"],
                        }}
                    >
                        Hello
                    </Toggle>
                </div>
            </Wrapper>
        );
    },
};
