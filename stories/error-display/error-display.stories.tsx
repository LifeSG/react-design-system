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

export const Maintenance: StoryObj<Component> = {
    name: "Custom attributes - Maintenance",
    render: () => {
        return (
            <ErrorDisplay
                type="maintenance"
                additionalProps={{ dateString: "1 January 2023, 8:00am" }}
            />
        );
    },
};

export const Inactivity: StoryObj<Component> = {
    name: "Custom attributes - Inactivity",
    render: () => {
        return (
            <ErrorDisplay
                type="inactivity"
                additionalProps={{ secondsLeft: 300 }}
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
    parameters: {
        controls: {
            disable: false,
            include: ["type", "illustrationScheme"],
        },
    },
    argTypes: {
        illustrationScheme: {
            control: "select",
            options: [undefined, "base", "bookingsg", "rbs"],
        },
    },
    args: {
        type: "400",
        illustrationScheme: undefined,
    },
};
