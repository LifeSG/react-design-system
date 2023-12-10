import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/button";
import { Text } from "src/text";
import { Timeline } from "src/timeline";
import { StoryContainer } from "../storybook-common";

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
                                    <Text.Body>
                                        Just a regular text based item. Lorem
                                        ipsum dolor sit amet, consectetur.
                                    </Text.Body>
                                </>
                            ),
                        },
                        {
                            title: "Item 2",
                            content: (
                                <>
                                    <Text.Body>
                                        An example with a&nbsp;
                                        <Text.Hyperlink.Small>
                                            link
                                        </Text.Hyperlink.Small>
                                        .
                                    </Text.Body>
                                </>
                            ),
                        },
                        {
                            title: "Item 3",
                            content: (
                                <>
                                    <Text.Body>
                                        This one comes with an&nbsp;
                                    </Text.Body>
                                    <Text.Hyperlink.Default
                                        href="https://google.com.sg"
                                        rel="noreferrer"
                                        external
                                    >
                                        external link
                                    </Text.Hyperlink.Default>
                                    .
                                </>
                            ),
                        },
                        {
                            title: "Item 4",
                            content: (
                                <>
                                    <Text.Body>
                                        This item comes with an action button.
                                    </Text.Body>
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
                                <Text.Body>
                                    This one comes with status icons.
                                </Text.Body>
                            ),
                            statuses: [
                                { type: "light", label: "Status light" },
                                { type: "dark", label: "Status dark" },
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
                                <Text.Body>
                                    An example with <code>completed</code>{" "}
                                    variant
                                </Text.Body>
                            ),
                        },
                        {
                            title: "Item 2",
                            variant: "current",
                            content: (
                                <Text.Body>
                                    An example with <code>current</code> variant
                                </Text.Body>
                            ),
                        },
                        {
                            title: "Item 3",
                            variant: "upcoming-active",
                            content: (
                                <Text.Body>
                                    An example with <code>upcoming-active</code>{" "}
                                    variant
                                </Text.Body>
                            ),
                        },
                        {
                            title: "Item 4",
                            variant: "upcoming-inactive",
                            content: (
                                <Text.Body>
                                    An example with{" "}
                                    <code>upcoming-inactive</code> variant
                                </Text.Body>
                            ),
                        },
                        {
                            title: "Item 5",
                            variant: "upcoming-inactive",
                            content: (
                                <Text.Body>
                                    An example with{" "}
                                    <code>upcoming-inactive</code> variant
                                </Text.Body>
                            ),
                        },
                    ]}
                />
            </StoryContainer>
        );
    },
};
