import React, { useEffect, useRef, useState } from "react";
import { OtpInputProps } from "./types";
import {
    CTAButton,
    ErrorContainer,
    InputContainer,
    InputField,
    Wrapper,
} from "./otp-input.styles";

export const OtpInput = ({
    cooldownDuration,
    actionButtonProps,
    errorMessage,
    numOfInput,
    onChange,
    ...otherProps
}: OtpInputProps) => {
    // =============================================================================
    // CONST, STATE, REF
    // =============================================================================
    const {
        disabled,
        onClick,
        styleType = "secondary",
        ...otherCtaProps
    } = actionButtonProps ?? {};
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [otpValues, setOtpValues] = useState<string[]>(
        new Array(numOfInput).fill("")
    );
    const [countDown, setCountDown] = useState<number>(cooldownDuration);
    const [enableCountDownTimer, setEnableCountDownTimer] =
        useState<boolean>(true);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        inputRefs?.current[0]?.focus();
        document.addEventListener("paste", handlePaste);
        return () => document.removeEventListener("paste", handlePaste);
    }, []);

    useEffect(() => {
        if (!enableCountDownTimer || disabled) {
            return;
        }
        let timer = cooldownDuration;
        setCountDown(timer);
        const interval = setInterval(() => {
            timer--;
            setCountDown(timer);
            if (timer === 0) {
                clearInterval(interval);
                setEnableCountDownTimer(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [enableCountDownTimer]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        const { key, code } = event;
        const validKey = [
            "Backspace",
            "Tab",
            "ShiftLeft",
            "ShiftRight",
            "Shift",
        ];
        if (!validKey.includes(code) || !validKey.includes(key)) {
            if (!RegExp(/^[0-9]+$/).test(key)) {
                event.preventDefault();
            }
        }

        const newOtpValues = [...otpValues];
        if (
            (code === "Backspace" || key === "Backspace") &&
            newOtpValues[index] !== ""
        ) {
            newOtpValues[index] = "";
        } else if (code === "Backspace" || key === "Backspace") {
            newOtpValues[index - 1] = "";
            inputRefs.current[index - 1]?.focus();
        }

        if (validateUserInput(key)) {
            newOtpValues[index] = key;
            inputRefs.current[index + 1]?.focus();
        }

        setOtpValues(newOtpValues);

        if (onChange) {
            onChange(newOtpValues.join(""));
        }
    };

    const handlePaste = (event: ClipboardEvent): void => {
        const pastedValue = event.clipboardData.getData("text");
        if (pastedValue && validateUserInput(pastedValue, numOfInput)) {
            setOtpValues(pastedValue.split(""));
            if (onChange) {
                onChange(pastedValue);
            }
        } else {
            event.preventDefault();
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setEnableCountDownTimer(true);
        if (onClick) {
            onClick(event);
        }
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const validateUserInput = (value: string, length = 1) => {
        if (!value) {
            return false;
        }
        return RegExp(`^[0-9]{${length}}$`).test(value);
    };

    const renderCTALabel = () => {
        return otherCtaProps.children
            ? `${otherCtaProps.children}`
            : `Resend OTP ${
                  countDown
                      ? `in ${countDown} second${countDown > 1 ? "s" : ""}`
                      : ""
              }`;
    };

    return (
        <Wrapper>
            <InputContainer>
                {otpValues.map((data, index) => {
                    return (
                        <InputField
                            key={index}
                            id={"otpValues-input"}
                            data-testid={"otpValues-input"}
                            ref={(el) => (inputRefs.current[index] = el)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type={"number"}
                            value={data}
                            error={!!errorMessage}
                            inputMode={"decimal"}
                            {...otherProps}
                        />
                    );
                })}
            </InputContainer>
            {errorMessage && (
                <ErrorContainer weight="semibold">
                    {errorMessage}
                </ErrorContainer>
            )}
            <CTAButton
                styleType={styleType}
                disabled={disabled || countDown > 0}
                onClick={handleClick}
                {...otherCtaProps}
            >
                {renderCTALabel()}
            </CTAButton>
        </Wrapper>
    );
};
