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
        const [isAnimated, setIsAnimated] = useState(false);
        const onButtonPress = (isAnimated) => {
            setShow(!show);
            setIsAnimated(!!isAnimated);
        };
        return (
            <div style={{ flex: 1, justifyContent: "center" }}>
                <Button.Default
                    onClick={() => {
                        onButtonPress();
                    }}
                >
                    {show ? "Click to close" : "Click to open"}
                </Button.Default>
                <br />
                {!show && (
                    <Button.Default
                        onClick={() => {
                            onButtonPress(true);
                        }}
                    >
                        Click to open with animation
                    </Button.Default>
                )}
                <SmartAppBanner
                    show={show}
                    offset={0}
                    isAnimated={isAnimated}
                    link="https://www.google.com"
                    content={{
                        title: "LifeSG App",
                        message:
                            "Report neighbourhood issues in 3 simple steps",
                        buttonLabel: "Download",
                        buttonAriaLabel: "Download LifeSG App",
                        numberOfStars: 3.5,
                    }}
                    onBannerDismiss={() => setShow(false)}
                />
            </div>
        );
    },
};
