import { BoxIcon } from "@lifesg/react-icons/box";
import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import type { ButtonProps } from "src/button";
import { Button } from "src/button";
import { GridDecorator } from "stories/storybook-common";

import { TokensTable } from "./tokens-table";

type Component = typeof Button;

const meta: Meta<Component> = {
    title: "Selection and input/Button",
    component: Button,
};

export default meta;

const VariantGrid = (args: Partial<ButtonProps>) => {
    return (
        <>
            <Button {...args}>Label</Button>
            <Button {...args} icon={<PlaceholderIcon />}>
                Label
            </Button>
            <Button {...args} icon={<PlaceholderIcon />} iconPosition="right">
                Label
            </Button>
            <Button {...args} icon={<PlaceholderIcon />} />
            <Button {...args} styleType="secondary">
                Label
            </Button>
            <Button {...args} styleType="secondary" icon={<PlaceholderIcon />}>
                Label
            </Button>
            <Button
                {...args}
                styleType="secondary"
                icon={<PlaceholderIcon />}
                iconPosition="right"
            >
                Label
            </Button>
            <Button
                {...args}
                styleType="secondary"
                icon={<PlaceholderIcon />}
            />
            <Button {...args} styleType="light">
                Label
            </Button>
            <Button {...args} styleType="light" icon={<PlaceholderIcon />}>
                Label
            </Button>
            <Button
                {...args}
                styleType="light"
                icon={<PlaceholderIcon />}
                iconPosition="right"
            >
                Label
            </Button>
            <Button {...args} styleType="light" icon={<PlaceholderIcon />} />
            <Button {...args} styleType="link">
                Label
            </Button>
            <Button {...args} styleType="link" icon={<PlaceholderIcon />}>
                Label
            </Button>
            <Button
                {...args}
                styleType="link"
                icon={<PlaceholderIcon />}
                iconPosition="right"
            >
                Label
            </Button>
            <Button {...args} styleType="link" icon={<PlaceholderIcon />} />
        </>
    );
};

export const Default: StoryObj<Component> = {
    render: VariantGrid,
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Text only",
                "Icon (left)",
                "Icon (right)",
                "Icon only",
            ],
            rowHeaders: ["Default", "Secondary", "Light", "Link"],
        }),
    ],
};

export const Size: StoryObj<Component> = {
    render: (_args) => {
        return (
            <>
                <Button sizeType="large">Label</Button>
                <Button sizeType="large" icon={<PlaceholderIcon />}>
                    Label
                </Button>
                <Button
                    sizeType="large"
                    icon={<PlaceholderIcon />}
                    iconPosition="right"
                >
                    Label
                </Button>
                <Button sizeType="large" icon={<PlaceholderIcon />} />
                <Button sizeType="default">Label</Button>
                <Button sizeType="default" icon={<PlaceholderIcon />}>
                    Label
                </Button>
                <Button
                    sizeType="default"
                    icon={<PlaceholderIcon />}
                    iconPosition="right"
                >
                    Label
                </Button>
                <Button sizeType="default" icon={<PlaceholderIcon />} />
                <Button sizeType="small">Label</Button>
                <Button sizeType="small" icon={<PlaceholderIcon />}>
                    Label
                </Button>
                <Button
                    sizeType="small"
                    icon={<PlaceholderIcon />}
                    iconPosition="right"
                >
                    Label
                </Button>
                <Button sizeType="small" icon={<PlaceholderIcon />} />
            </>
        );
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Text only",
                "Icon (left)",
                "Icon (right)",
                "Icon only",
            ],
            rowHeaders: ["Large", "Default", "Small"],
        }),
    ],
};

export const LoadingState: StoryObj<Component> = {
    render: VariantGrid,
    args: {
        loading: true,
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Text only",
                "Icon (left)",
                "Icon (right)",
                "Icon only",
            ],
            rowHeaders: ["Default", "Secondary", "Light", "Link"],
        }),
    ],
};

export const Danger: StoryObj<Component> = {
    render: VariantGrid,
    args: {
        danger: true,
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Text only",
                "Icon (left)",
                "Icon (right)",
                "Icon only",
            ],
            rowHeaders: ["Default", "Secondary", "Light", "Link"],
        }),
    ],
};

export const DangerLoadingState: StoryObj<Component> = {
    render: VariantGrid,
    args: {
        danger: true,
        loading: true,
    },
    decorators: [
        GridDecorator({
            columns: 4,
            columnHeaders: [
                "Text only",
                "Icon (left)",
                "Icon (right)",
                "Icon only",
            ],
            rowHeaders: ["Default", "Secondary", "Light", "Link"],
        }),
    ],
};

export const CustomComponents: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Button
                icon={
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/2171/2171991.png"
                        alt=""
                    />
                }
                aria-label="Pet a cat"
            />
        );
    },
};

export const FocusableWhenDisabled: StoryObj<Component> = {
    render: (_args) => (
        <Button
            icon={<BoxIcon />}
            aria-label="Archive item"
            disabled
            focusableWhenDisabled
            onClick={() => alert("I shouldn't be here!")}
        />
    ),
};

export const TokenCustomisation: StoryObj = {
    tags: ["!dev"],
    render: () => <TokensTable />,
};
