import type { Meta, StoryObj } from "@storybook/react";
import { ErrorDisplay } from "src/error-display";

type Component = typeof ErrorDisplay;

const meta: Meta<Component> = {
    title: "Modules/ErrorDisplay",
    component: ErrorDisplay,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return <ErrorDisplay type="404" />;
    },
};

export const WithActionButton: StoryObj<Component> = {
    render: () => {
        return (
            <ErrorDisplay
                type="unsupported-browser"
                actionButton={{
                    children: "Continue anyway",
                    onClick: () => {
                        alert("Clicked on continue button");
                    },
                }}
            />
        );
    },
};

export const CustomError: StoryObj<Component> = {
    render: () => {
        return (
            <ErrorDisplay
                type="404"
                title="My Custom 404"
                description={
                    <>
                        You can pass a <strong>JSX component</strong> here as
                        well
                    </>
                }
            />
        );
    },
};

export const Variants: StoryObj<Component> = {
    render: (args) => {
        return <ErrorDisplay {...args} />;
    },
};
