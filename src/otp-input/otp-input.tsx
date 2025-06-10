import React, { useEffect, useRef, useState } from "react";
import { FormErrorMessage } from "src/form/form-label";
import { VisuallyHidden } from "../shared/accessibility";
import { SimpleIdGenerator, StringHelper } from "../util";
import {
    CTAButton,
    InputContainer,
    InputField,
    Wrapper,
} from "./otp-input.styles";
import { OtpInputProps } from "./types";

export const OtpInput = ({
    id,
    value = [],
    "data-testid": dataTestId,
    className,
    cooldownDuration,
    actionButtonProps,
    errorMessage,
    numOfInput,
    onChange,
    onCooldownStart,
    onCooldownEnd,
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
    const onChangeRef = useRef(onChange);

    const [otpValues, setOtpValues] = useState<string[]>(
        new Array(numOfInput).fill("")
    );
    const [countDown, setCountDown] = useState<number>(cooldownDuration);
    const [lastCtaTimestamp, setLastCtaTimestamp] = useState<Date>(new Date());
    const [internalId] = useState(() => SimpleIdGenerator.generate());

    const hasError = !!errorMessage;
    const errorId = `${internalId}-error`;
    const timerId = `${internalId}-timer`;

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        inputRefs?.current[0]?.focus();
        document.addEventListener("paste", handlePaste);
        return () => document.removeEventListener("paste", handlePaste);
    }, []);

    useEffect(() => {
        if (cooldownDuration !== 0) {
            if (onCooldownStart) onCooldownStart();
            const cleanup = beginCountdown();

            return () => cleanup();
        }
    }, [lastCtaTimestamp]);

    useEffect(() => {
        onChangeRef.current = onChange;
    }, [onChange]);

    useEffect(() => {
        if (value.length === numOfInput) {
            setOtpValues(value);
        }
    }, [value]);

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
                    onChange(newOtpValues);
                }
            }
        };

    const handleKeyDown =
        (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { key, code } = event;

            if (key === "Backspace" || code === "Backspace") {
                const newOtpValues = [...otpValues];
                if (newOtpValues[index] !== "") {
                    newOtpValues[index] = "";
                } else if (index !== 0) {
                    newOtpValues[index - 1] = "";
                    inputRefs.current[index - 1]?.focus();
                }

                setOtpValues(newOtpValues);

                if (onChange) {
                    onChange(newOtpValues);
                }
            } else if (event.code === "ArrowRight") {
                inputRefs.current[index + 1]?.focus();
            } else if (event.code === "ArrowLeft") {
                inputRefs.current[index - 1]?.focus();
            }
        };

    const handlePaste = (event: ClipboardEvent): void => {
        if (!event.clipboardData) return;

        const pastedValue = event.clipboardData.getData("text");
        const pastedValueArr = pastedValue.split("");
        if (pastedValue && validateUserInput(pastedValue, numOfInput)) {
            setOtpValues(pastedValueArr);
            if (onChangeRef.current) {
                onChangeRef.current(pastedValueArr);
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
        const interval = setInterval(() => {
            const currentTime = Date.now();
            const coolDownInMilliseconds = cooldownDuration * 1000;

            const timer = Math.ceil(
                (lastCtaTimestamp.valueOf() +
                    coolDownInMilliseconds -
                    currentTime) /
                    1000
            );
            setCountDown(timer);
            if (timer <= 0) {
                if (onCooldownEnd) onCooldownEnd();
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    };

    const generateId = (index: number, name: string, prefix?: string) => {
        return prefix
            ? `${prefix}-${name}-${index + 1}`
            : `${name}-${index + 1}`;
    };

    const displaySeconds = (time: number) => {
        return `${time} second${time === 1 ? "" : "s"}`;
    };

    const getCTALabelProps = (): Partial<
        React.HTMLAttributes<HTMLButtonElement>
    > => {
        return otherCtaProps.children
            ? { children: otherCtaProps.children }
            : {
                  children:
                      countDown > 0
                          ? `Resend OTP in ${displaySeconds(countDown)}`
                          : "Resend OTP",
                  // use a fixed label to avoid repeated screen reader updates when the button is focused
                  "aria-label":
                      countDown > 0
                          ? `Resend OTP in ${displaySeconds(cooldownDuration)}`
                          : "Resend OTP",
                  // use a secondary element to reflect the latest countdown
                  "aria-describedby": timerId,
              };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    return (
        <Wrapper id={id} data-testid={dataTestId} className={className}>
            <InputContainer
                role="group"
                aria-label={`${numOfInput}-digit OTP input field`}
            >
                {otpValues.map((data, index) => {
                    return (
                        <InputField
                            id={generateId(index, "otp-input", id)}
                            data-testid={generateId(
                                index,
                                "otp-input",
                                dataTestId
                            )}
                            aria-label={`${StringHelper.formatOrdinal(
                                index + 1
                            )} digit`}
                            aria-invalid={hasError}
                            aria-describedby={hasError ? errorId : undefined}
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            value={data}
                            error={hasError}
                            onChange={handleChange(index)}
                            onKeyDown={handleKeyDown(index)}
                            autoComplete="off"
                            {...otherProps}
                        />
                    );
                })}
            </InputContainer>
            {errorMessage && (
                <FormErrorMessage id={errorId}>{errorMessage}</FormErrorMessage>
            )}
            <CTAButton
                styleType={styleType}
                type="button"
                {...otherCtaProps}
                onClick={handleClick}
                disabled={disabled || isWithinCooldown()}
                {...getCTALabelProps()}
            ></CTAButton>
            <VisuallyHidden role="timer" id={timerId}>
                {displaySeconds(countDown)} remaining
            </VisuallyHidden>
            <VisuallyHidden aria-live="polite">
                {countDown > 0 ? "" : "Ready to resend OTP"}
            </VisuallyHidden>
        </Wrapper>
    );
};
