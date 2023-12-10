import type { Meta, StoryObj } from "@storybook/react";
import { PhoneNumberInput } from "src/phone-number-input";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";

type Component = typeof Form.PhoneNumberInput;

const meta: Meta<Component> = {
    title: "Form/PhoneNumberInput",
    component: Form.PhoneNumberInput,
};

export default meta;

export const PhoneNumberInput: StoryObj<Component> = {
    render: () => {
        const [value1, setValue1] = useState({
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

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
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
            </Layout.Content>
        );
    },
};

export const StandaloneUsage: StoryObj<Component> = {
    render: () => {
        const [value, setValue] = useState({
            number: "",
            countryCode: "65",
        });
        const handleClear = () => {
            setValue((prevState) => ({ ...prevState, number: "" }));
        };
        return (
            <StoryContainer>
                <Container>
                    <PhoneNumberInput
                        label="This is the phone number input"
                        placeholder="Enter phone number"
                        allowClear={true}
                        enableSearch={true}
                        value={value}
                        onChange={(value) => setValue(value)}
                        onClear={handleClear}
                    />
                </Container>
            </StoryContainer>
        );
    },
};
