import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputRangeSelect } from "src/input-range-select";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
import {
    Checkmark,
    Image,
    ImageWrapper,
    ImageWrapperSelected,
} from "./doc-elements";

type Component = typeof Form.RangeSelect;
type StandaloneComponent = typeof InputRangeSelect;

const meta: Meta<Component> = {
    title: "Form/RangeSelect",
    component: Form.RangeSelect,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <StoryContainer>
                    <Container>
                        <Form.RangeSelect
                            label="This is the range select field"
                            options={{
                                from: [
                                    { value: "A", label: "Option A" },
                                    { value: "B", label: "Option B" },
                                    { value: "C", label: "Option C" },
                                    { value: "D", label: "Option D" },
                                    {
                                        value: "E",
                                        label: "From Option E This is a long From Option that should get wrapped and truncated.",
                                    },
                                    { value: "F", label: "Option F" },
                                    { value: "G", label: "Option G" },
                                    { value: "H", label: "Option H" },
                                    { value: "I", label: "Option I" },
                                    { value: "J", label: "Option J" },
                                ],
                                to: [
                                    { value: "K", label: "Option K" },
                                    { value: "L", label: "Option L" },
                                ],
                            }}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                        />
                        <Form.RangeSelect
                            label="This is the disabled state"
                            options={{
                                from: [
                                    { value: "A", label: "Option A" },
                                    { value: "B", label: "Option B" },
                                    { value: "C", label: "Option C" },
                                    { value: "D", label: "Option D" },
                                ],
                                to: [
                                    { value: "K", label: "Option K" },
                                    { value: "L", label: "Option L" },
                                ],
                            }}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                            disabled
                        />
                        <Form.RangeSelect
                            label="This is the readonly state"
                            options={{
                                from: [
                                    { value: "A", label: "Option A" },
                                    { value: "B", label: "Option B" },
                                    { value: "C", label: "Option C" },
                                    { value: "D", label: "Option D" },
                                ],
                                to: [
                                    { value: "K", label: "Option K" },
                                    { value: "L", label: "Option L" },
                                ],
                            }}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                            selectedOptions={{
                                from: { value: "A", label: "Option A" },
                                to: { value: "K", label: "Option K" },
                            }}
                            readOnly
                        />
                        <Form.RangeSelect
                            label="This is the error state"
                            options={{
                                from: [
                                    { value: "A", label: "Option A" },
                                    { value: "B", label: "Option B" },
                                    { value: "C", label: "Option C" },
                                    { value: "D", label: "Option D" },
                                ],
                                to: [
                                    { value: "K", label: "Option K" },
                                    { value: "L", label: "Option L" },
                                ],
                            }}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                            errorMessage="Selection is required"
                        />
                    </Container>
                </StoryContainer>
            </StoryContainer>
        );
    },
};

export const WithCustomListDisplay: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSelect
                        label="This has a custom list item display"
                        options={{
                            from: [
                                {
                                    value: "A",
                                    url: "https://picsum.photos/seed/A/300/100",
                                },
                                {
                                    value: "B",
                                    url: "https://picsum.photos/seed/B/500/200",
                                },
                            ],
                            to: [
                                {
                                    value: "C",
                                    url: "https://picsum.photos/seed/C/300/300",
                                },
                                {
                                    value: "D",
                                    url: "https://picsum.photos/seed/D/600/150",
                                },
                            ],
                        }}
                        renderCustomSelectedOption={(option) => {
                            return (
                                <ImageWrapper>
                                    <Image
                                        src={option.url}
                                        alt={option.value}
                                    />
                                </ImageWrapper>
                            );
                        }}
                        renderListItem={(item, args) => {
                            if (args.selected) {
                                return (
                                    <ImageWrapperSelected>
                                        <ImageWrapper>
                                            <Image
                                                src={item.url}
                                                alt={item.value}
                                            />
                                        </ImageWrapper>
                                        <Checkmark />
                                    </ImageWrapperSelected>
                                );
                            } else {
                                return (
                                    <ImageWrapper>
                                        <Image
                                            src={item.url}
                                            alt={item.value}
                                        />
                                    </ImageWrapper>
                                );
                            }
                        }}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithSearch: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.RangeSelect
                        label="This has searchable options"
                        options={{
                            from: [
                                { value: "A", label: "Option A" },
                                { value: "B", label: "Option B" },
                                { value: "C", label: "Option C" },
                                { value: "D", label: "Option D" },
                            ],
                            to: [
                                { value: "K", label: "Option K" },
                                { value: "L", label: "Option L" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        enableSearch
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
                <Form.RangeSelect
                    label="A shorter form input"
                    options={{
                        from: [
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ],
                        to: [
                            { value: "K", label: "Option K" },
                            { value: "L", label: "Option L" },
                        ],
                    }}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                />
                <Form.RangeSelect
                    label="A longer form input"
                    options={{
                        from: [
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ],
                        to: [
                            { value: "K", label: "Option K" },
                            { value: "L", label: "Option L" },
                        ],
                    }}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                    tabletCols={[1, 9]}
                />
            </Layout.Content>
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
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "Option A" },
                                { value: "B", label: "Option B" },
                                { value: "C", label: "Option C" },
                                { value: "D", label: "Option D" },
                            ],
                            to: [
                                { value: "K", label: "Option K" },
                                { value: "L", label: "Option L" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{ from: "DefaultFrom", to: "DefaultTo" }}
                    />
                    <br />
                    <InputRangeSelect
                        options={{
                            from: [
                                { value: "A", label: "Option A" },
                                { value: "B", label: "Option B" },
                                { value: "C", label: "Option C" },
                                { value: "D", label: "Option D" },
                            ],
                            to: [
                                { value: "K", label: "Option K" },
                                { value: "L", label: "Option L" },
                            ],
                        }}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholders={{
                            from: "SearchableFrom",
                            to: "SearchableTo",
                        }}
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};
