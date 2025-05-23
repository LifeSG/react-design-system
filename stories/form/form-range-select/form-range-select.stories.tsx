import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "src/form";
import { InputRangeSelect } from "src/input-range-select";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StackDecorator,
    StoryDecorator,
} from "stories/storybook-common";
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

const RANGE_OPTIONS = {
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
};

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
                    options={RANGE_OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    disabled
                />
                <Form.RangeSelect
                    label="This is the disabled state with selected value"
                    options={RANGE_OPTIONS}
                    selectedOptions={{
                        from: {
                            value: "A",
                            label: "Option A",
                        },
                        to: {
                            value: "L",
                            label: "Option L",
                        },
                    }}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    disabled
                />
                <Form.RangeSelect
                    label="This is the readonly state"
                    options={RANGE_OPTIONS}
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
                    options={RANGE_OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    errorMessage="Selection is required"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithCustomListDisplay: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
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
                                <Image src={option.url} alt={option.value} />
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
                                    <Image src={item.url} alt={item.value} />
                                </ImageWrapper>
                            );
                        }
                    }}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithSearch: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Form.RangeSelect
                label="This has searchable options"
                options={RANGE_OPTIONS}
                valueExtractor={(item) => item.value}
                listExtractor={(item) => item.label}
                displayValueExtractor={(item) => item.label}
                enableSearch
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.RangeSelect
                    label="A shorter form input"
                    options={RANGE_OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.RangeSelect
                    label="A longer form input"
                    options={RANGE_OPTIONS}
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
    render: (_args) => {
        return (
            <>
                <InputRangeSelect
                    options={RANGE_OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    placeholders={{ from: "DefaultFrom", to: "DefaultTo" }}
                />
                <InputRangeSelect
                    options={RANGE_OPTIONS}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                    placeholders={{
                        from: "SearchableFrom",
                        to: "SearchableTo",
                    }}
                    enableSearch
                />
            </>
        );
    },
    decorators: [StackDecorator(), StoryDecorator({ maxWidth: true })],
};
