import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { OtpInput } from "src/otp-input";
import { StoryContainer } from "../storybook-common";

type Component = typeof OtpInput;

const meta: Meta<Component> = {
    title: "Modules/OtpInput",
    component: OtpInput,
};

export default meta;

export const Default: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <OtpInput numOfInput={6} cooldownDuration={60} />
            </StoryContainer>
        );
    },
};

export const WithErrorMessage: StoryObj<Component> = {
    render: () => {
        return (
            <StoryContainer>
                <OtpInput
                    numOfInput={6}
                    cooldownDuration={60}
                    errorMessage="Invalid otp. Try again."
                />
            </StoryContainer>
        );
    },
};

export const WithCustomActionButton: StoryObj<Component> = {
    render: () => {
        const numOfInput = 4;
        const [isInCooldown, setIsInCooldown] = useState(true);
        const [otpValues, setOtpValues] = useState(
            new Array(numOfInput).fill("")
        );
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};

export const WithCustomActionButtonSelfHandle: StoryObj<Component> = {
    render: () => {
        const [isInCooldown, setIsInCooldown] = useState(true);
        useEffect(() => {
            if (isInCooldown) {
                setTimeout(() => {
                    setIsInCooldown(false);
                }, 5000);
            }
        }, [isInCooldown]);
        return (
            <StoryContainer>
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
            </StoryContainer>
        );
    },
};
