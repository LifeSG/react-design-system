import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect, useState } from "react";
import { Button } from "src/button";
import { Form } from "src/form";
import { InputSelect } from "src/input-select";
import { Layout } from "src/layout";
import { StoryContainer } from "../../storybook-common";
import { Container } from "../shared-doc-elements";
import {
    Checkmark,
    CustomCTAContainer,
    Image,
    ImageWrapper,
    ImageWrapperSelected,
} from "./doc-elements";

type Component = typeof Form.Select;
type StandaloneComponent = typeof InputSelect;

const meta: Meta<Component> = {
    title: "Form/Select",
    component: Form.Select,
};

export default meta;

const OPTIONS_DATA = [
    { value: "A", label: "Option A" },
    { value: "B", label: "Option B" },
    { value: "C", label: "Option C" },
    { value: "D", label: "Option D" },
];

const LARGE_OPTIONS_DATA = [...Array(500)].map((_, i) => ({ value: i + 1, label: `Option ${i + 1}` }));

export const Select: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This is the select field"
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                    />
                    <Form.Select
                        label="This is the disabled state"
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        disabled
                    />
                    <Form.Select
                        label="This is the readonly state"
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        readOnly
                    />
                    <Form.Select
                        label="This is the error state"
                        options={OPTIONS_DATA}
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
                        options={OPTIONS_DATA}
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

export const Virtualisation: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This is the select field"
                        options={LARGE_OPTIONS_DATA}
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
                        options={OPTIONS_DATA}
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

export const LabelTruncation: StoryObj<Component> = {
    render: () => {
        const options = [
            "fringilla urna porttitor rhoncus dolor purus non enim",
            "fringilla urna porttitor rhoncus dolor purus non enim praesent",
            "fringilla urna porttitor rhoncus dolor purus non enim praesent ele",
            "fringilla urna porttitor rhoncus dolor purus non enim praesent elem",
            "fringilla urna porttitor rhoncus dolor purus non enim praesent elementum",
        ];
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This has truncation at the end"
                        options={options}
                        listExtractor={(item) => ({
                            title: item,
                            secondaryLabel: item,
                        })}
                    />
                    <Form.Select
                        label="This has truncation in the middle"
                        optionTruncationType="middle"
                        options={options}
                        listExtractor={(item) => ({
                            title: item,
                            secondaryLabel: item,
                        })}
                    />
                </Container>
            </StoryContainer>
        );
    },
};

export const LoadState: StoryObj<Component> = {
    render: () => {
        const [loadState, setLoadState] =
            useState<ComponentProps<typeof Form.Select>["optionsLoadState"]>(
                "loading"
            );
        const [results, setResults] = useState([]);

        useEffect(() => {
            const timer = setTimeout(() => {
                setLoadState("fail");
            }, 1500);
            return () => clearTimeout(timer);
        }, []);

        const handleRetry = () => {
            setLoadState("loading");
            setTimeout(() => {
                setLoadState("success");
                setResults(
                    Array(10)
                        .fill(0)
                        .map((_, i) => `Option ${i + 1}`)
                );
            }, 1500);
        };

        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        label="This has different load states"
                        options={results}
                        enableSearch
                        optionsLoadState={loadState}
                        onRetry={handleRetry}
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
                    options={OPTIONS_DATA}
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
    parameters: {
        layout: "fullscreen",
    },
};

export const SmallVariant: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <Form.Select
                        variant="small"
                        label="This is the small variant"
                        options={OPTIONS_DATA}
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

export const StandaloneUsage: StoryObj<StandaloneComponent> = {
    render: () => {
        return (
            <StoryContainer>
                <Container>
                    <InputSelect
                        options={OPTIONS_DATA}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        placeholder="Default select"
                    />
                    <br />
                    <InputSelect
                        options={OPTIONS_DATA}
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