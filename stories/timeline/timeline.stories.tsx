import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "src/button";
import { Timeline } from "src/timeline";
import { Typography } from "src/typography";

type Component = typeof Timeline;

const meta: Meta<Component> = {
    title: "Feedback indicators/Timeline",
    component: Timeline,
};

export default meta;

// NOTE: SB freezes with nested JSX, workaround is to declare outside of the CSF
const _Default = (
    <Timeline
        title="What's next"
        items={[
            {
                title: "Item 1",
                content:
                    "Just a regular text based item. Lorem ipsum dolor sit amet, consectetur.",
            },
            {
                title: "Item 2",
                content: (
                    <Typography.BodyMD>
                        An example with a{" "}
                        <Typography.LinkMD>link</Typography.LinkMD>.
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 3",
                content: (
                    <Typography.BodyMD>
                        This one comes with an{" "}
                        <Typography.LinkMD
                            href="https://google.com.sg"
                            rel="noreferrer"
                            external
                        >
                            external link
                        </Typography.LinkMD>
                        .
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 4",
                content: (
                    <Typography.BodyMD>
                        This item comes with an action button.{" "}
                        <Button.Default
                            style={{ marginTop: "1rem" }}
                            onClick={() => {
                                alert("I was clicked");
                            }}
                        >
                            Click me
                        </Button.Default>
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 5",
                content: "This one comes with the DS pills.",
                statuses: [
                    {
                        type: "outline",
                        colorType: "red",
                        children: "Status outline red",
                        icon: <PlusCircleFillIcon />,
                    },
                    {
                        type: "solid",
                        colorType: "blue",
                        children: "Status solid blue",
                        icon: <PlaceholderIcon />,
                    },
                ],
            },
            {
                title: "Item 6",
                content:
                    "This one comes with the DS pills containing long status text.",
                statuses: [
                    {
                        type: "outline",
                        colorType: "red",
                        children: "Status outline red long text",
                        icon: <PlusCircleFillIcon />,
                    },
                    {
                        type: "solid",
                        colorType: "blue",
                        children: "Status solid blue",
                        icon: <PlaceholderIcon />,
                    },
                ],
            },
        ]}
    />
);

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return _Default;
    },
};

// NOTE: SB freezes with nested JSX, workaround is to declare outside of the CSF
const _Variants = (
    <Timeline
        title="What's next"
        items={[
            {
                title: "Item 1",
                variant: "completed",
                content: (
                    <Typography.BodyMD>
                        An example with <code>completed</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 2",
                variant: "current",
                content: (
                    <Typography.BodyMD>
                        An example with <code>current</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 3",
                variant: "numeric",
                content: (
                    <Typography.BodyMD>
                        An example with a <code>numeric</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 4",
                variant: "upcoming-active",
                content: (
                    <Typography.BodyMD>
                        An example with <code>upcoming-active</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 5",
                variant: "upcoming-inactive",
                content: (
                    <Typography.BodyMD>
                        An example with <code>upcoming-inactive</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 6",
                variant: "error",
                content: (
                    <Typography.BodyMD>
                        An example with <code>error</code> variant
                    </Typography.BodyMD>
                ),
            },
            {
                title: "Item 7",
                variant: "disabled",
                content: (
                    <Typography.BodyMD>
                        An example with <code>disabled</code> variant
                    </Typography.BodyMD>
                ),
            },
        ]}
    />
);

export const Variants: StoryObj<Component> = {
    render: (_args) => {
        return _Variants;
    },
};

export const Numeric: StoryObj<Component> = {
    render: (_args) => {
        return (
            <Timeline
                title="Steps to complete"
                items={[
                    {
                        title: "Step 1",
                        variant: "numeric",
                        content:
                            "Submit your application form with all required documents.",
                    },
                    {
                        title: "Step 2",
                        variant: "numeric",
                        content:
                            "Wait for confirmation email within 3-5 business days.",
                    },
                    {
                        title: "Step 3",
                        variant: "numeric",
                        content:
                            "Schedule an appointment at your nearest service centre.",
                    },
                    {
                        title: "Step 4",
                        variant: "numeric",
                        content:
                            "Attend the appointment and bring your original documents.",
                    },
                    {
                        title: "Step 5",
                        variant: "numeric",
                        content:
                            "Collect your completed documents or receive them by mail.",
                    },
                ]}
            />
        );
    },
};
