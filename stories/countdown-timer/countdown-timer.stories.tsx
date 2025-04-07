import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "src/button";
import { CountdownTimer } from "src/countdown-timer";
import { CountdownView } from "./doc-elements";

type Component = typeof CountdownTimer;

const meta: Meta<Component> = {
    title: "Feedback indicators/CountdownTimer",
    component: CountdownTimer,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <CountdownTimer
                show
                timer={15}
                notifyTimer={10}
                fixed={false}
                onNotify={() => console.log("Warning")}
                onFinish={() => console.log("Complete")}
                onTick={(seconds) =>
                    console.log(`Seconds remaining: ${seconds}`)
                }
            />
        );
    },
};

export const ScrollBehaviour: StoryObj<Component> = {
    render: () => {
        const [showTimer, setShowTimer] = useState(false);
        return (
            <CountdownView>
                <Button.Default onClick={() => setShowTimer(true)}>
                    Start
                </Button.Default>
                <CountdownTimer show={showTimer} timer={15} notifyTimer={10} />
            </CountdownView>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 500 } },
    },
};

export const CustomOffset: StoryObj<Component> = {
    render: () => {
        const [showTimer, setShowTimer] = useState(false);
        return (
            <CountdownView>
                <Button.Default onClick={() => setShowTimer(true)}>
                    Start
                </Button.Default>
                <CountdownTimer
                    show={showTimer}
                    timer={15}
                    notifyTimer={10}
                    offset={{ top: 16 }}
                    mobileOffset={{ top: 0 }}
                />
            </CountdownView>
        );
    },
    parameters: {
        layout: "fullscreen",
        docs: { story: { inline: false, iframeHeight: 500 } },
    },
};

export const Timestamp: StoryObj<Component> = {
    render: () => {
        const [showTimer, setShowTimer] = useState(false);
        const timestamp = Date.now() + 20000;
        return (
            <div>
                <Button.Default onClick={() => setShowTimer(true)}>
                    Start
                </Button.Default>
                <CountdownTimer
                    show={showTimer}
                    notifyTimer={10}
                    timestamp={timestamp}
                />
            </div>
        );
    },
};
