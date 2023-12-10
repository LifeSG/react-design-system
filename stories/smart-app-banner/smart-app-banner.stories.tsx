import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { SmartAppBanner } from "src/smart-app-banner";

type Component = typeof SmartAppBanner;

const meta: Meta<Component> = {
    title: "Modules/SmartAppBanner",
    component: SmartAppBanner,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        const [show, setShow] = useState(false);
        const toggleShow = () => {
            setShow(!show);
        };
        return (
            <div style={{ flex: 1, justifyContent: "center" }}>
                <Button.Default onClick={toggleShow}>
                    {show ? "Click to close" : "Click to open"}
                </Button.Default>
                <SmartAppBanner
                    show={show}
                    offset={0}
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
            </div>
        );
    },
};
