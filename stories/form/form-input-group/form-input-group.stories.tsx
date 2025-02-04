import { MagnifierIcon } from "@lifesg/react-icons/magnifier";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "src/form";
import { InputGroup } from "src/input-group";
import { Layout } from "src/layout";
import {
    FullWidthStoryDecorator,
    StoryDecorator,
} from "stories/storybook-common";

type Component = typeof Form.InputGroup;
type StandaloneComponent = typeof InputGroup;

const meta: Meta<Component> = {
    title: "Form/InputGroup",
    component: Form.InputGroup,
};

export default meta;

export const LabelAddon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Form.InputGroup
                    label="With a label addon"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
                />
                <Form.InputGroup
                    label="With a label addon on the right"
                    placeholder="Enter an amount"
                    addon={{
                        position: "right",
                        attributes: {
                            value: "kg",
                        },
                    }}
                />
                <Form.InputGroup
                    label="This is the disabled state"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
                    disabled
                />
                <Form.InputGroup
                    label="This is the readonly state"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
                    readOnly
                />
                <Form.InputGroup
                    label="This is the error state"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
                    errorMessage="Input is required"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const CustomAddon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Form.InputGroup
                    label="With a custom addon"
                    placeholder="Enter something"
                    addon={{
                        type: "custom",
                        attributes: {
                            children: <MagnifierIcon />,
                        },
                    }}
                />
                <Form.InputGroup
                    label="With a custom addon on the right"
                    placeholder="Enter something"
                    addon={{
                        type: "custom",
                        attributes: {
                            children: <MagnifierIcon />,
                        },
                        position: "right",
                    }}
                />
                <Form.InputGroup
                    label="This is the disabled state"
                    placeholder="Enter an amount"
                    addon={{
                        type: "custom",
                        attributes: {
                            children: <MagnifierIcon />,
                        },
                    }}
                    disabled
                />
                <Form.InputGroup
                    label="This is the readonly state"
                    placeholder="Enter an amount"
                    addon={{
                        type: "custom",
                        attributes: {
                            children: <MagnifierIcon />,
                        },
                    }}
                    readOnly
                />
                <Form.InputGroup
                    label="This is the error state"
                    placeholder="Enter an amount"
                    addon={{
                        type: "custom",
                        attributes: {
                            children: <MagnifierIcon />,
                        },
                    }}
                    errorMessage="Input is required"
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const ListAddon: StoryObj<Component> = {
    render: () => {
        return (
            <>
                <Form.InputGroup
                    label="With a list addon"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                        },
                    }}
                />
                <Form.InputGroup
                    label="This is the list addon readonly state (pristine)"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                        },
                    }}
                    readOnly
                />
                <Form.InputGroup
                    label="This is the list addon readonly state (selected)"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                            selectedOption: {
                                value: "SG",
                                display: "Singapore",
                            },
                        },
                    }}
                    value="Some value"
                    readOnly
                />
                <Form.InputGroup
                    label="This is the list addon disabled state"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                            selectedOption: {
                                value: "SG",
                                display: "Singapore",
                            },
                        },
                    }}
                    disabled
                />
                <Form.InputGroup
                    label="This is the list addon error state"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                            selectedOption: {
                                value: "SG",
                                display: "Singapore",
                            },
                        },
                    }}
                    errorMessage="Invalid option"
                />
                <Form.InputGroup
                    label="With a list addon on the right"
                    placeholder="Enter something"
                    addon={{
                        type: "list",
                        attributes: {
                            placeholder: "Select",
                            options: [
                                { value: "SG", display: "Singapore" },
                                { value: "US", display: "United States" },
                                { value: "UK", display: "United Kingdom" },
                                { value: "JP", display: "Japan" },
                            ],
                            valueExtractor: (option) => option.value,
                            listExtractor: (option) => option.display,
                        },
                        position: "right",
                    }}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const AllowClear: StoryObj<Component> = {
    render: () => {
        const [value, setValue] = useState("1");
        return (
            <Form.InputGroup
                label="This has a clear button"
                placeholder="Enter an amount"
                allowClear
                addon={{
                    attributes: {
                        value: "$",
                    },
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onClear={() => setValue("")}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const RenderingInGridLayout: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Layout.Content type="grid">
                <Form.InputGroup
                    label="A shorter form input"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
                    xxsCols={[1, 9]}
                    lgCols={[1, 5]}
                />
                <Form.InputGroup
                    label="A longer form input"
                    placeholder="Enter an amount"
                    addon={{
                        attributes: {
                            value: "$",
                        },
                    }}
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
            <InputGroup
                placeholder="Enter an amount"
                addon={{
                    attributes: {
                        value: "$",
                    },
                }}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
