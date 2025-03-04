import React, { useEffect, useState } from "react";
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
    Spinner,
    TryAgainLabel,
} from "./masked-input.style";
import { MaskedInputProps } from "./types";
import { isEmpty } from "lodash";
import { StringHelper } from "../util";

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

    // =============================================================================
    // EFFECTS
    // =============================================================================
    useEffect(() => {
        setUpdatedValue(value || "");
    }, [value]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        toggleMasking(false);
        onFocus && onFocus(event);
    };

    const handleBlur = (event?: React.FocusEvent<HTMLInputElement>) => {
        toggleMasking(true);
        onBlur && onBlur(event!);
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
        onChange && onChange(event);
    };

    const handleTryAgain = () => {
        readOnly && onTryAgain && onTryAgain();
    };

    const handleToggleMask = () => {
        toggleMasking(!isMasked);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const toggleMasking = (mask: boolean) => {
        setIsMasked(mask);
        if (mask) {
            onMask && onMask();
        } else {
            onUnmask && onUnmask();
        }
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

    const renderElement = () => {
        if (readOnly) {
            switch (loadState) {
                case "fail":
                    return (
                        <ClickableErrorWrapper
                            onClick={handleTryAgain}
                            data-testid="try-again-button"
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
                    break;
            }
        }

        return (
            <InputGroupWrapper
                ref={ref}
                data-testid={`${dataTestId || "masked-input"}${
                    isMasked ? "-masked" : "-unmasked"
                }`}
                addon={{
                    type: "custom",
                    attributes: {
                        children: renderIcon(),
                    },
                    position: "right",
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

    return (
        <div aria-busy={loadState === "loading"} aria-live="polite">
            {renderElement()}
        </div>
    );
};

export const MaskedInput = React.forwardRef(Component);
