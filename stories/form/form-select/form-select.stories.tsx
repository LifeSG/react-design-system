import type { Meta, StoryObj } from "@storybook/react";
import { InputSelect } from "src/input-select";
import { Form } from "src/form";
import { Layout } from "src/layout";
import { Text } from "src/text";
import { Button } from "src/button";
import { Container } from "../shared-doc-elements";
import { PropsTable } from "./props-table";
import {
    Checkmark,
    CustomCTAContainer,
    Image,
    ImageWrapper,
    ImageWrapperSelected,
} from "./doc-elements";

type Component = typeof Form.Select;

const meta: Meta<Component> = {
    title: "Form/Select",
    component: Form.Select,
};

export default meta;

export const Select: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This is the select field"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                    />
                    <Form.Select
                        label="This is the disabled state"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        disabled
                    />
                    <Form.Select
                        label="This is the readonly state"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        readOnly
                    />
                    <Form.Select
                        label="This is the error state"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        errorMessage="Selection is required"
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const WithCustomListItemDisplay: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This has a custom list item display"
                        options={[
                            {
                                value: "A",
                                url: "https://picsum.photos/seed/A/300/100",
                            },
                            {
                                value: "B",
                                url: "https://picsum.photos/seed/B/500/200",
                            },
                            {
                                value: "C",
                                url: "https://picsum.photos/seed/C/300/300",
                            },
                            {
                                value: "D",
                                url: "https://picsum.photos/seed/D/600/150",
                            },
                        ]}
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
                    <Form.Select
                        label="This has searchable options"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
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

export const WithCustomCallToAction: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This has a call to action at the bottom of dropdown list"
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        enableSearch
                        hideNoResultsDisplay
                        renderCustomCallToAction={(hideOptions, options) => {
                            return (
                                <CustomCTAContainer>
                                    <Button.Default
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            alert("Clicked on custom CTA");
                                            hideOptions();
                                        }}
                                    >
                                        {options.length === 0
                                            ? "Add first option"
                                            : "Add another option"}
                                    </Button.Default>
                                </CustomCTAContainer>
                            );
                        }}
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
                <Form.Select
                    label="A shorter form input"
                    options={[
                        { value: "A", label: "Option A" },
                        { value: "B", label: "Option B" },
                        { value: "C", label: "Option C" },
                        { value: "D", label: "Option D" },
                    ]}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    mobileCols={[1, 5]}
                />
                <Form.Select
                    label="A longer form input"
                    options={[
                        { value: "A", label: "Option A" },
                        { value: "B", label: "Option B" },
                        { value: "C", label: "Option C" },
                        { value: "D", label: "Option D" },
                    ]}
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
        return (
            <StoryContainer>
                <Container>
                    <InputSelect
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholder="Default select"
                    />
                    <br />
                    <InputSelect
                        options={[
                            { value: "A", label: "Option A" },
                            { value: "B", label: "Option B" },
                            { value: "C", label: "Option C" },
                            { value: "D", label: "Option D" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholder="Searchable select"
                        enableSearch
                    />
                </Container>
            </StoryContainer>
        );
    },
};
