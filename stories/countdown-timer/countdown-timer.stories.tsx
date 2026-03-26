import type { Meta, StoryObj } from "@storybook/react-webpack5";
import dedent from "dedent";
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
        const [showTimer, setShowTimer] = useState(false);
        const [key, setKey] = useState(0);

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                }}
            >
                <div style={{ display: "flex", gap: 16 }}>
                    <Button.Default onClick={() => setShowTimer(true)}>
                        Start
                    </Button.Default>
                    <Button.Default onClick={() => setKey((k) => k + 1)}>
                        Restart
                    </Button.Default>
                </div>
                <CountdownTimer
                    key={key}
                    show={showTimer}
                    timer={60}
                    notifyTimer={30}
                    reminderInterval={20}
                    fixed={false}
                    onNotify={() => console.log("Warning")}
                    onFinish={() => console.log("Complete")}
                    onTick={(seconds) =>
                        console.log(`Seconds remaining: ${seconds}`)
                    }
                />
            </div>
        );
    },
    parameters: {
        docs: {
            source: {
                code: dedent`
                    <CountdownTimer
                        show={showTimer}
                        timer={60}
                        notifyTimer={30}
                        reminderInterval={20}
                        onNotify={() => console.log("Warning")}
                        onFinish={() => console.log("Complete")}
                        onTick={(seconds) => console.log(\`Seconds remaining: \${seconds}\`)}
                    />`,
            },
        },
    },
};

export const Timestamp: StoryObj<Component> = {
    render: () => {
        const [showTimer, setShowTimer] = useState(false);
        const [timestamp, setTimestamp] = useState(() => Date.now() + 20000);

        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                }}
            >
                <div style={{ display: "flex", gap: 16 }}>
                    <Button.Default onClick={() => setShowTimer(true)}>
                        Start
                    </Button.Default>
                    <Button.Default
                        onClick={() => setTimestamp(Date.now() + 20000)}
                    >
                        Restart
                    </Button.Default>
                </div>
                <CountdownTimer
                    key={timestamp}
                    show={showTimer}
                    timestamp={timestamp}
                    notifyTimer={10}
                />
            </div>
        );
    },
    parameters: {
        docs: {
            source: {
                code: dedent`
                    <CountdownTimer
                        show={showTimer}
                        timestamp={timestamp}
                        notifyTimer={10}
                    />`,
            },
        },
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
