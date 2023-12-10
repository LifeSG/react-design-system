import type { Meta, StoryObj } from "@storybook/react";
import { PredictiveTextInput } from "src/predictive-text-input";
import { Text } from "src/text";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";
import {
    mockFetchOptions,
    mockFetchOptionsWithSecondaryLabel,
} from "./mock-fetch-options.ts";

type Component = typeof Form.PredictiveTextInput;

const meta: Meta<Component> = {
    title: "Form/PredictiveTextInput",
    component: Form.PredictiveTextInput,
};

export default meta;

export const PredictiveTextInput: StoryObj<Component> = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(undefined);
        const [selectedOption2, setSelectedOption2] = useState(undefined);
        return (
            <StoryContainer>
                <Container>
                    <Form.PredictiveTextInput
                        label="This is the predictive text input"
                        placeholder="Start typing..."
                        selectedOption={selectedOption}
                        fetchOptions={mockFetchOptions}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectOption={(option, extractedValue) =>
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
                        onSelectOption={(option, extractedValue) =>
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
                </Container>
            </StoryContainer>
        );
    },
};

export const WithSecondaryLabel: StoryObj<Component> = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(undefined);
        return (
            <StoryContainer>
                <Container>
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
                        onSelectOption={(option, extractedValue) =>
                            setSelectedOption(option)
                        }
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: () => {
        return (
            <Layout.Content type="grid" style={{ padding: "2rem" }}>
                <Form.PredictiveTextInput
                    label="A shorter form input"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                />
                <Form.PredictiveTextInput
                    label="A longer form input"
                    placeholder="Start typing..."
                    fetchOptions={mockFetchOptions}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
        );
    },
};

export const StandaloneUsage: StoryObj<Component> = {
    render: () => {
        const [selectedOption, setSelectedOption] = useState(undefined);
        return (
            <StoryContainer>
                <Container>
                    <PredictiveTextInput
                        placeholder="Start typing..."
                        selectedOption={selectedOption}
                        fetchOptions={mockFetchOptions}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectOption={(option, extractedValue) =>
                            setSelectedOption(option)
                        }
                    />
                </Container>
            </StoryContainer>
        );
    },
};
