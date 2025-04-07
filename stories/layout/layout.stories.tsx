import type { Meta, StoryObj } from "@storybook/react";
import {
    FlexColumnDisplay,
    FlexDisplay,
} from "./doc-elements/doc-flex-display";
import { GridDisplay } from "./doc-elements/doc-grid-display";
import { StretchDisplay } from "./doc-elements/doc-stretch-display";

const meta: Meta = {
    title: "Core/Layout",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

export const FlexLayout: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false },
            source: { code: `<Layout.Content />` },
        },
    },
    render: (_args) => {
        return <FlexDisplay />;
    },
};

export const FlexColumnLayout: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false },
            source: { code: `<Layout.Content type="flex-column" />` },
        },
    },
    render: (_args) => {
        return <FlexColumnDisplay />;
    },
};

export const GridLayout: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false },
            source: { code: `<Layout.Content type="grid" />` },
        },
    },
    render: (_args) => {
        return <GridDisplay />;
    },
};

export const Stretch: StoryObj = {
    parameters: {
        docs: {
            story: { inline: false },
            source: { code: `<Layout.Content stretch />` },
        },
    },
    render: (_args) => {
        return <StretchDisplay />;
    },
};
