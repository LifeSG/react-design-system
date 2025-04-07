import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { SmartAppBanner } from "src/smart-app-banner";
import { FullWidthStoryDecorator } from "stories/storybook-common";

type Component = typeof SmartAppBanner;

const meta: Meta<Component> = {
    title: "Feedback indicators/SmartAppBanner",
    component: SmartAppBanner,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return (
            <SmartAppBanner
                show
                href="https://www.google.com"
                content={{
                    title: "LifeSG App",
                    message: "Report neighbourhood issues in 3 simple steps",
                    buttonLabel: "Download",
                    buttonAriaLabel: "Download LifeSG App",
                    numberOfStars: 3.5,
                }}
                onDismiss={() => {
                    // noop
                }}
            />
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 180 } },
    },
};

export const Animation: StoryObj<Component> = {
    render: (_args) => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };
        return (
            <>
                <Button.Default onClick={toggleShow}>
                    {show ? "Click to close" : "Click to open"}
                </Button.Default>
                <SmartAppBanner
                    show={show}
                    animated
                    href="https://www.google.com"
                    content={{
                        title: "LifeSG App",
                        message:
                            "Report neighbourhood issues in 3 simple steps",
                        buttonLabel: "Download",
                        buttonAriaLabel: "Download LifeSG App",
                        numberOfStars: 3.5,
                    }}
                    onDismiss={toggleShow}
                />
            </>
        );
    },
    decorators: [
        (Story) => (
            <div style={{ display: "flex", alignItems: "end", height: 200 }}>
                <Story />
            </div>
        ),
        FullWidthStoryDecorator(),
    ],
};
