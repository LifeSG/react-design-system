import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { V2_Layout } from "src/v2_layout";
import {
    PhoneNumberInput,
    PhoneNumberInputValue,
} from "src/phone-number-input";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";

type Component = typeof Form.PhoneNumberInput;
type StandaloneComponent = typeof PhoneNumberInput;

const meta: Meta<Component> = {
    title: "Form/PhoneNumberInput",
    component: Form.PhoneNumberInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [value1, setValue1] = useState<PhoneNumberInputValue>({
            number: "",
            countryCode: "",
        });
        const handleClear = () => {
            setValue1((prevState) => ({ ...prevState, number: "" }));
        };
        return (
            <StoryContainer>
                <Container>
                    <Form.PhoneNumberInput
                        label="This is the default state (allow clear enabled)"
                        placeholder="Enter phone number"
                        allowClear
                        value={value1}
                        onChange={(value) => setValue1(value)}
                        onClear={handleClear}
                    />
                    <Form.PhoneNumberInput
                        label="This has searchable option"
                        placeholder="Enter phone number"
                        enableSearch
                    />
                    <Form.PhoneNumberInput
                        label="This is the disabled state"
                        disabled
                        placeholder="Enter phone number"
                    />
                    <Form.PhoneNumberInput
                        label="This is the readonly state"
                        placeholder="Enter phone number"
                        value={{ number: "91234567", countryCode: "+65" }}
                        readOnly
                    />
                    <Form.PhoneNumberInput
                        label="This is the error state"
                        errorMessage="Mobile number is required"
                        placeholder="Enter phone number"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const FixedCountry: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Form.PhoneNumberInput
                    label="This has a fixed country code"
                    placeholder="Enter phone number"
                    value={{
                        countryCode: "+65",
                    }}
                    fixedCountry
                />
            </StoryContainer>
        );
    },
};

export const AllowClear: StoryObj<Component> = {
    render: () => {
        const [value, setValue] = useState({
            countryCode: "65",
            number: "88888888",
        });
        return (
            <StoryContainer>
                <Form.PhoneNumberInput
                    label="This has a clear button"
                    placeholder="Enter phone number"
                    allowClear
                    value={value}
                    onChange={({ countryCode, number }) =>
                        setValue({ countryCode, number })
                    }
                    onClear={() => setValue({ countryCode: "", number: "" })}
                />
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <V2_Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.PhoneNumberInput
                    label="A shorter form input"
                    placeholder="Enter phone number"
                    mobileCols={[1, 5]}
                />
                <Form.PhoneNumberInput
                    label="A longer form input"
                    placeholder="Enter phone number"
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </V2_Layout.Content>
        );
    },
    parameters: {
        layout: "fullscreen",
    },
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <PhoneNumberInput placeholder="Enter phone number" />
                </Container>
            </StoryContainer>
        );
    },
};
