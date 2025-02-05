import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { PredictiveTextInput } from "src/predictive-text-input";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";
import {
    mockFetchOptions,
    mockFetchOptionsWithSecondaryLabel,
} from "./mock-fetch-options";

type Component = typeof Form.PredictiveTextInput;
type StandaloneComponent = typeof PredictiveTextInput;

const meta: Meta<Component> = {
    title: "Form/PredictiveTextInput",
    component: Form.PredictiveTextInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(undefined);
        const [selectedOption2, setSelectedOption2] = useState(undefined);
        return (
            <>
                <Form.PredictiveTextInput
                    label="This is the predictive text input"
                    placeholder="Start typing..."
                    selectedOption={selectedOption}
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    onSelectOption={(option, _extractedValue) =>
                        setSelectedOption(option)
                    }
                />
                <Form.PredictiveTextInput
                    label="This is the error state"
                    placeholder="Start typing..."
                    selectedOption={selectedOption2}
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    onSelectOption={(option, _extractedValue) =>
                        setSelectedOption2(option)
                    }
                    errorMessage="Input is required"
                />
                <Form.PredictiveTextInput
                    label="This is the disabled state"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    disabled
                />
                <Form.PredictiveTextInput
                    label="This is the readonly state"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    readOnly
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithSecondaryLabel: StoryObj<Component> = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(undefined);
        return (
            <>
                <Form.PredictiveTextInput
                    label="With secondary labels"
                    selectedOption={selectedOption}
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptionsWithSecondaryLabel}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => {
                        return {
                            title: item.title,
                            secondaryLabel: item?.secondaryLabel,
                        };
                    }}
                    displayValueExtractor={(item) => item.title}
                    onSelectOption={(option, _extractedValue) =>
                        setSelectedOption(option)
                    }
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid">
                <Form.PredictiveTextInput
                    label="A shorter form input"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.PredictiveTextInput
                    label="A longer form input"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    xxsCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
    decorators: [FullWidthStoryDecorator()],
};

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <PredictiveTextInput
                placeholder="Start typing..."
                fetchOptions={mockFetchOptions}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
