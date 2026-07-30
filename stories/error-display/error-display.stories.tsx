import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useEffect, useState } from "react";
import { ErrorDisplay } from "src/error-display";
import {
    toStoryArgTypes,
    toStoryExcludedProps,
} from "stories/storybook-common";

import { storybookArgTypesByTitle } from "../../.storybook/generated/storybook-argtypes.generated";

type Component = typeof ErrorDisplay;

const meta: Meta<Component> = {
    title: "Core/ErrorDisplay",
    component: ErrorDisplay,
    argTypes: toStoryArgTypes(
        storybookArgTypesByTitle["Core/ErrorDisplay"],
        "ErrorDisplayProps"
    ),
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <ErrorDisplay type="404" />;
    },
};

export const WithActionButton: StoryObj<Component> = {
    render: (_args) => {
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
    render: (_args) => {
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
    render: (_args) => {
        const [secondsLeft, setSecondsLeft] = useState(300);

        useEffect(() => {
            const id = window.setInterval(() => {
                setSecondsLeft((s) => Math.max(0, s - 1));
            }, 1000);

            return () => window.clearInterval(id);
        }, []);

        return (
            <ErrorDisplay
                type="inactivity"
                additionalProps={{ secondsLeft, reminderInterval: 60 }}
            />
        );
    },
};

export const CustomError: StoryObj<Component> = {
    render: (_args) => {
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

export const Playground: StoryObj<Component> = {
    parameters: {
        controls: {
            disable: false,
            exclude: toStoryExcludedProps(
                storybookArgTypesByTitle["Core/ErrorDisplay"],
                "ErrorDisplayProps"
            ),
        },
    },
    args: {
        type: "404",
    },
    render: (args) => {
        return <ErrorDisplay {...args} />;
    },
};
