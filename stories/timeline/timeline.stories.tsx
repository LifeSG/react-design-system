import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { v2_Text } from "src/v2_text";
import { Timeline } from "src/timeline";
import { StoryContainer } from "../storybook-common";
import { PlaceholderIcon } from "@lifesg/react-icons/placeholder";
import { PlusCircleFillIcon } from "@lifesg/react-icons/plus-circle-fill";

type Component = typeof Timeline;

const meta: Meta<Component> = {
    title: "Modules/Timeline",
    component: Timeline,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Timeline
                    title="What's next"
                    items={[
                        {
                            title: "Item 1",
                            content: (
                                <>
                                    <v2_Text.Body>
                                        Just a regular text based item. Lorem
                                        ipsum dolor sit amet, consectetur.
                                    </v2_Text.Body>
                                </>
                            ),
                        },
                        {
                            title: "Item 2",
                            content: (
                                <>
                                    <v2_Text.Body>
                                        An example with a&nbsp;
                                        <v2_Text.Hyperlink.Small>
                                            link
                                        </v2_Text.Hyperlink.Small>
                                        .
                                    </v2_Text.Body>
                                </>
                            ),
                        },
                        {
                            title: "Item 3",
                            content: (
                                <>
                                    <v2_Text.Body>
                                        This one comes with an&nbsp;
                                    </v2_Text.Body>
                                    <v2_Text.Hyperlink.Default
                                        href="https://google.com.sg"
                                        rel="noreferrer"
                                        external
                                    >
                                        external link
                                    </v2_Text.Hyperlink.Default>
                                    .
                                </>
                            ),
                        },
                        {
                            title: "Item 4",
                            content: (
                                <>
                                    <v2_Text.Body>
                                        This item comes with an action button.
                                    </v2_Text.Body>
                                    <Button.Default
                                        style={{ marginTop: "1rem" }}
                                        onClick={() => {
                                            alert("I was clicked");
                                        }}
                                    >
                                        Click me
                                    </Button.Default>
                                </>
                            ),
                        },
                        {
                            title: "Item 5",
                            content: (
                                <v2_Text.Body>
                                    This one comes with Pill DS icons.
                                </v2_Text.Body>
                            ),
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
                            content: (
                                <v2_Text.Body>
                                    This one comes with Pill DS icons with long
                                    status text.
                                </v2_Text.Body>
                            ),
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
            </StoryContainer>
        );
    },
};

export const Variants: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <Timeline
                    title="What's next"
                    items={[
                        {
                            title: "Item 1",
                            variant: "completed",
                            content: (
                                <v2_Text.Body>
                                    An example with <code>completed</code>{" "}
                                    variant
                                </v2_Text.Body>
                            ),
                        },
                        {
                            title: "Item 2",
                            variant: "current",
                            content: (
                                <v2_Text.Body>
                                    An example with <code>current</code> variant
                                </v2_Text.Body>
                            ),
                        },
                        {
                            title: "Item 3",
                            variant: "upcoming-active",
                            content: (
                                <v2_Text.Body>
                                    An example with <code>upcoming-active</code>{" "}
                                    variant
                                </v2_Text.Body>
                            ),
                        },
                        {
                            title: "Item 4",
                            variant: "upcoming-inactive",
                            content: (
                                <v2_Text.Body>
                                    An example with{" "}
                                    <code>upcoming-inactive</code> variant
                                </v2_Text.Body>
                            ),
                        },
                        {
                            title: "Item 5",
                            variant: "error",
                            content: (
                                <v2_Text.Body>
                                    An example with <code>error</code> variant
                                </v2_Text.Body>
                            ),
                        },
                        {
                            title: "Item 6",
                            variant: "disabled",
                            content: (
                                <v2_Text.Body>
                                    An example with <code>disabled</code>{" "}
                                    variant
                                </v2_Text.Body>
                            ),
                        },
                    ]}
                />
            </StoryContainer>
        );
    },
};
