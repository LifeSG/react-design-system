import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { useEffect, useRef, useState } from "react";
import { OtpInput, OtpInputRef } from "src/otp-input";
import { StoryDecorator } from "stories/storybook-common";
import { CustomContent } from "./doc-elements";

type Component = typeof OtpInput;

const meta: Meta<Component> = {
    title: "Selection and input/OtpInput",
    component: OtpInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: (_args) => {
        return <OtpInput numOfInput={6} cooldownDuration={60} />;
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithErrorMessage: StoryObj<Component> = {
    render: (_args) => {
        return (
            <OtpInput
                numOfInput={6}
                cooldownDuration={60}
                errorMessage="Invalid otp. Try again."
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithPrefix: StoryObj<Component> = {
    render: (_args) => {
        return (
            <OtpInput
                numOfInput={6}
                cooldownDuration={60}
                prefix={{ value: "WGS", separator: "-" }}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithCustomActionButton: StoryObj<Component> = {
    render: (_args) => {
        const numOfInput = 4;
        const [isInCooldown, setIsInCooldown] = useState(true);
        const [otpValues, setOtpValues] = useState(
            new Array(numOfInput).fill("")
        );
        return (
            <OtpInput
                numOfInput={numOfInput}
                value={otpValues}
                cooldownDuration={5}
                onCooldownStart={() => setIsInCooldown(true)}
                onCooldownEnd={() => setIsInCooldown(false)}
                onChange={(value) => setOtpValues(value)}
                actionButtonProps={{
                    styleType: "light",
                    children: isInCooldown
                        ? "Cooling down..."
                        : "My custom button label",
                }}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithCustomActionButtonSelfHandle: StoryObj<Component> = {
    render: (_args) => {
        const [isInCooldown, setIsInCooldown] = useState(true);
        useEffect(() => {
            if (isInCooldown) {
                setTimeout(() => {
                    setIsInCooldown(false);
                }, 5000);
            }
        }, [isInCooldown]);
        return (
            <OtpInput
                numOfInput={6}
                cooldownDuration={0}
                actionButtonProps={{
                    styleType: "light",
                    children: isInCooldown
                        ? "Cooling down..."
                        : "My custom button label",
                    disabled: isInCooldown,
                    onClick: () => {
                        setIsInCooldown(true);
                    },
                }}
            />
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};

export const WithoutButton: StoryObj<Component> = {
    render: (_args) => {
        const ref = useRef<OtpInputRef>(null);
        const [countdown, setCountdown] = useState(5);

        return (
            <>
                <OtpInput
                    ref={ref}
                    numOfInput={6}
                    cooldownDuration={5}
                    otpOnly
                    onCooldownEnd={() => setCountdown(0)}
                    onCooldownStart={() => setCountdown(5)}
                    onCountdownChange={(remaining) => setCountdown(remaining)}
                />
                <CustomContent
                    onClick={() => ref.current?.startCooldown()}
                    countdown={countdown}
                />
            </>
        );
    },
    decorators: [StoryDecorator({ maxWidth: true })],
};
