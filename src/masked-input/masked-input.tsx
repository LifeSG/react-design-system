import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import {
    ClickableErrorWrapper,
    ErrorIcon,
    ErrorLabel,
    ErrorTextContainer,
    IconContainer,
    InputGroupWrapper,
    LoadingLabel,
    LoadingWrapper,
    ReadOnlyClickable,
    ReadOnlyIconContainer,
    Spinner,
    TryAgainLabel,
} from "./masked-input.style";
import { MaskedInputProps } from "./types";
import { isEmpty } from "lodash";
import { StringHelper } from "../util";
import { VisuallyHidden } from "../shared/accessibility";

const Component = (
    {
        value,
        readOnly,
        "data-testid": dataTestId,
        maskRange,
        unmaskRange,
        maskRegex,
        maskTransformer,
        iconMask = <EyeSlashIcon />,
        iconUnmask = <EyeIcon />,
        iconActiveColor: maskIconActiveColor,
        iconInactiveColor: maskIconInactiveColor,
        maskChar = "•",
        error,
        disableMask,
        transformInput,
        loadState,
        onMask,
        onUnmask,
        onChange,
        onFocus,
        onBlur,
        onTryAgain,
        ...otherProps
    }: MaskedInputProps,
    ref: React.Ref<HTMLInputElement>
) => {
    // =============================================================================
    // CONST, STATE, REFS
    // =============================================================================
    const isEmptyReadOnlyState = readOnly && isEmpty(value);
    const [isMasked, setIsMasked] = useState<boolean>(!disableMask);
    const [updatedValue, setUpdatedValue] = useState<string>(value || "");
    const valueId = `${otherProps.id ?? dataTestId ?? "masked-input"}-value`;

    const inputRef = useRef<HTMLInputElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const tryAgainRef = useRef<HTMLButtonElement>(null);
    const readOnlyButtonRef = useRef<HTMLButtonElement>(null);
    const ariaLabelledBy = otherProps["aria-labelledby"];

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setUpdatedValue(value || "");
    }, [value]);

    useEffect(() => {
        if (!readOnly) return;

        if (loadState === "fail") {
            tryAgainRef.current?.focus();
        }

        if (loadState === "success") {
            readOnlyButtonRef.current?.focus();
        }
    }, [readOnly, loadState]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        toggleMasking(false);
        onFocus?.(event);
    };

    const handleBlur = (event?: React.FocusEvent<HTMLInputElement>) => {
        toggleMasking(true);
        onBlur?.(event!);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        switch (transformInput) {
            case "uppercase":
                value = value.toUpperCase();
                break;
            case "lowercase":
                value = value.toLowerCase();
                break;
            default:
                break;
        }

        setUpdatedValue(value);
        event.target.value = value;
        onChange?.(event);
    };

    const handleTryAgain = () => {
        if (readOnly) {
            onTryAgain?.();
        }
    };

    const handleToggleMask = () => {
        const nextMasked = !isMasked;

        toggleMasking(nextMasked);

        if (!nextMasked) {
            inputRef.current?.focus();
            return;
        }

        if (document.activeElement === inputRef.current) {
            inputRef.current?.blur();
            iconRef.current?.focus();
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const toggleMasking = (mask: boolean) => {
        setIsMasked((prev) => {
            if (prev === mask) return prev;

            if (mask) {
                onMask?.();
            } else {
                onUnmask?.();
            }
            return mask;
        });
    };

    const getValue = () => {
        if (isEmptyReadOnlyState) {
            return "-";
        }

        return isMasked && !disableMask
            ? StringHelper.maskValue(updatedValue, {
                  maskChar,
                  maskRange,
                  unmaskRange,
                  maskRegex,
                  maskTransformer,
              })
            : updatedValue;
    };

    const shouldDisableMasking = () =>
        !updatedValue?.toString().length || disableMask;

    const getValueDescription = () => {
        if (isEmptyReadOnlyState) {
            return "-";
        }

        if (isMasked && !disableMask) {
            const desc = StringHelper.getMaskedDescription(
                updatedValue,
                "masked",
                maskRange
            );

            return desc || "Masked value";
        }

        return updatedValue;
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================
    const renderIcon = () => {
        if (isEmptyReadOnlyState) {
            return <></>;
        }

        const isDisabled = shouldDisableMasking();

        return (
            <IconContainer
                data-testid={`icon-${isMasked ? "masked" : "unmasked"}`}
                onClick={!isDisabled ? handleToggleMask : undefined}
                $isDisabled={isDisabled}
                $inactiveColor={maskIconInactiveColor}
                $activeColor={maskIconActiveColor}
            >
                {isMasked ? iconUnmask : iconMask}
            </IconContainer>
        );
    };

    const renderReadOnlyButton = () => {
        if (shouldDisableMasking() || isEmptyReadOnlyState) {
            return <span>{getValue()}</span>;
        }

        return (
            <>
                <VisuallyHidden id={valueId}>
                    {getValueDescription()}
                </VisuallyHidden>
                <ReadOnlyClickable
                    ref={readOnlyButtonRef}
                    data-testid="masked-input-readonly-button"
                    onClick={handleToggleMask}
                    aria-busy={loadState === "loading"}
                    type="button"
                    aria-labelledby={[valueId, ariaLabelledBy]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <span>{getValue()}</span>
                    <ReadOnlyIconContainer>
                        {isMasked ? (
                            <EyeIcon data-testid="masked-icon" />
                        ) : (
                            <EyeSlashIcon data-testid="unmasked-icon" />
                        )}
                    </ReadOnlyIconContainer>
                </ReadOnlyClickable>
            </>
        );
    };

    const renderElement = () => {
        if (readOnly) {
            switch (loadState) {
                case "fail":
                    return (
                        <ClickableErrorWrapper
                            ref={tryAgainRef}
                            onClick={handleTryAgain}
                            data-testid="try-again-button"
                            type="button"
                        >
                            <ErrorTextContainer>
                                <ErrorIcon />
                                <ErrorLabel>Error</ErrorLabel>
                            </ErrorTextContainer>
                            <TryAgainLabel>Try again?</TryAgainLabel>
                        </ClickableErrorWrapper>
                    );
                case "loading":
                    return (
                        <LoadingWrapper>
                            <Spinner />
                            <LoadingLabel>Retrieving...</LoadingLabel>
                        </LoadingWrapper>
                    );
                case "success":
                default:
                    return renderReadOnlyButton();
            }
        }

        return (
            <InputGroupWrapper
                ref={inputRef}
                data-testid={`${dataTestId || "masked-input"}${
                    isMasked ? "-masked" : "-unmasked"
                }`}
                addon={{
                    type: "custom",
                    attributes: {
                        children: renderIcon(),
                    },
                    position: "right",
                    hideAriaVisibility: true,
                }}
                onFocus={!readOnly ? handleFocus : undefined}
                onBlur={!readOnly ? handleBlur : undefined}
                onClick={readOnly ? handleToggleMask : undefined}
                onChange={handleChange}
                value={getValue()}
                readOnly={readOnly}
                error={error}
                $isDisabled={shouldDisableMasking()}
                {...otherProps}
            />
        );
    };

    return <div aria-busy={loadState === "loading"}>{renderElement()}</div>;
};

export const MaskedInput = React.forwardRef(Component);
