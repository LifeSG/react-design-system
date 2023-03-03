import React, { useEffect, useRef, useState } from "react";
import { OtpInputProps } from "./types";
import {
    CTAButton,
    InputContainer,
    InputField,
    Wrapper,
} from "./otp-input.styles";

import { FormErrorMessage } from "src/form/form-label";

export const OtpInput = ({
    id,
    "data-testid": dataTestId,
    className,
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
    const [lastCtaTimestamp, setLastCtaTimestamp] = useState<Date | undefined>(
        new Date()
    );

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        inputRefs?.current[0]?.focus();
        document.addEventListener("paste", handlePaste);
        return () => document.removeEventListener("paste", handlePaste);
    }, []);

    useEffect(() => {
        if (countDown === cooldownDuration) {
            beginCountdown();
        }
    }, [countDown]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value.replace(/[^0-9]/g, "");
            if (validateUserInput(value)) {
                const newOtpValues = [...otpValues];

                newOtpValues[index] = value.substring(value.length - 1);
                inputRefs.current[index + 1]?.focus();

                setOtpValues(newOtpValues);

                if (onChange) {
                    onChange(newOtpValues.join(""));
                }
            }
        };

    const handleKeyDown =
        (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { key, code } = event;

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
        setOtpValues(new Array(numOfInput).fill(""));

        if (!isWithinCooldown()) {
            setLastCtaTimestamp(new Date());
            setCountDown(cooldownDuration);
        }

        if (onClick) {
            onClick(event);
        }
    };

    // =========================================================================
    // HELPER FUNCTIONS
    // =========================================================================
    const validateUserInput = (value: string, length = 1) =>
        !value ? false : RegExp(`^[0-9]{${length}}$`).test(value);

    const isWithinCooldown = (): boolean => {
        const currentTime = Date.now();
        const coolDownInMilliseconds = cooldownDuration * 1000;

        return (
            currentTime < lastCtaTimestamp.valueOf() + coolDownInMilliseconds
        );
    };

    const beginCountdown = () => {
        let timer = cooldownDuration;
        const interval = setInterval(() => {
            timer--;
            setCountDown(timer);
            if (timer === 0) {
                clearInterval(interval);
            }
        }, 1000);
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderCTALabel = () => {
        return otherCtaProps.children
            ? `${otherCtaProps.children}`
            : `Resend OTP${
                  countDown
                      ? ` in ${countDown} second${countDown > 1 ? "s" : ""}`
                      : ""
              }`;
    };

    const inputId = (index: number) =>
        id ? `${id}-otp-input-${index + 1}` : `otp-input-${index + 1}`;

    const inputDataTestId = (index: number) =>
        dataTestId
            ? `${dataTestId}-otpValues-input-${index + 1}`
            : `otpValues-input-${index + 1}`;

    return (
        <Wrapper id={id} data-testid={dataTestId} className={className}>
            <InputContainer>
                {otpValues.map((data, index) => {
                    return (
                        <InputField
                            id={inputId(index)}
                            data-testid={inputDataTestId(index)}
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            value={data}
                            error={!!errorMessage}
                            onChange={handleChange(index)}
                            onKeyDown={handleKeyDown(index)}
                            {...otherProps}
                        />
                    );
                })}
            </InputContainer>
            {errorMessage && (
                <FormErrorMessage>{errorMessage}</FormErrorMessage>
            )}
            <CTAButton
                styleType={styleType}
                disabled={disabled || isWithinCooldown()}
                onClick={handleClick}
                {...otherCtaProps}
            >
                {renderCTALabel()}
            </CTAButton>
        </Wrapper>
    );
};
