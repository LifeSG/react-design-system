import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "../../src/form";
import { Headings, HeadingsNextLine, Wrapper } from "./doc-elements";
import { Toggle, ToggleCompositeSectionProps } from "../../src";

type Component = typeof Toggle;

const meta: Meta<Component> = {
    title: "Data Input/Toggle/collapsible",
    component: Toggle,
};
export default meta;

const renderCompositeSection = () => {
    return (
        <Form.Input
            label="This is the error state"
            placeholder="Enter here..."
            onChange={() => ({})}
        />
    );
};

const compositeOption: ToggleCompositeSectionProps = {
    children: renderCompositeSection(),
    errors: undefined,
    show: undefined,
    collapsible: undefined,
};

export const CheckboxCollapsible: StoryObj<Component> = {
    render: () => {
        const [checkboxError, setCheckboxError] = useState<
            string[] | undefined
        >(["Enter a label"]);

        const compositeOptionSectionWithErrorList = () => {
            return (
                <Form.Input
                    label="This is the error state"
                    errorMessage={checkboxError ? checkboxError[0] : undefined}
                    placeholder="Enter here..."
                    onChange={(event) => onChangeHandler(event.target.value)}
                />
            );
        };

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
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        checked
                        subLabel={"this is helper text"}
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        subLabel={"this is helper text"}
                        error
                        compositeSection={compositeOption}
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
                            ...compositeOption,
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
                            ...compositeOption,
                            children: compositeOptionSectionWithErrorList(),
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
                            ...compositeOption,
                            show: false,
                            children: compositeOptionSectionWithErrorList(),
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
        const renderCompositeOptionErrorList = () => {
            return (
                <Form.Input
                    label="This is the error state"
                    errorMessage={radioError ? radioError[0] : undefined}
                    placeholder="Enter here..."
                    onChange={(event) => onChangeHandler(event.target.value)}
                />
            );
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
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>

                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        disabled
                        checked
                        compositeSection={compositeOption}
                    >
                        Text
                    </Toggle>
                    <Toggle
                        indicator
                        type={"radio"}
                        compositeSection={compositeOption}
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
                            ...compositeOption,
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
                            ...compositeOption,
                            errors: radioError,
                            children: renderCompositeOptionErrorList(),
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
                            ...compositeOption,
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
