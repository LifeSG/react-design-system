import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { PhoneNumberInput } from "src/phone-number-input";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.PhoneNumberInput;
type StandaloneComponent = typeof PhoneNumberInput;

const meta: Meta<Component> = {
    title: "Form/PhoneNumberInput",
    component: Form.PhoneNumberInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Form.PhoneNumberInput
                    label="This is the default state"
                    placeholder="Enter phone number"
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
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const FixedCountry: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.PhoneNumberInput
                label="This has a fixed country code"
                placeholder="Enter phone number"
                value={{
                    countryCode: "+65",
                }}
                fixedCountry
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const AllowClear: StoryObj<Component> = {
    render: (_args) => {
        const [value, setValue] = useState({
            countryCode: "65",
            number: "88888888",
        });
        return (
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
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.PhoneNumberInput
                    label="A shorter form input"
                    placeholder="Enter phone number"
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.PhoneNumberInput
                    label="A longer form input"
                    placeholder="Enter phone number"
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: (_args) => {
        return <PhoneNumberInput placeholder="Enter phone number" />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
