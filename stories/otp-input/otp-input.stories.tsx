import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { OtpInput } from "src/otp-input";
import { StoryDecorator } from "stories/storybook-common";

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
