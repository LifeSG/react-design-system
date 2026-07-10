import { ExclamationTriangleIcon } from "@lifesg/react-icons/exclamation-triangle";
import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import clsx from "clsx";
import { isEmpty } from "lodash";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";

import { InputGroup } from "../input-group";
import { concatIds, VisuallyHidden } from "../shared/accessibility";
import { ComponentLoadingSpinner } from "../shared/component-loading-spinner";
import { BasicButton } from "../shared/input-wrapper";
import { useApplyStyle } from "../theme";
import { Typography } from "../typography";
import { StringHelper, useId } from "../util";
import * as styles from "./masked-input.styles";
import type { MaskedInputProps } from "./types";

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
        className,
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
    const internalId = useId();
    const valueId = `${otherProps.id ?? internalId}-value`;

    const inputRef = useRef<HTMLInputElement>(null);
    const tryAgainRef = useRef<HTMLButtonElement>(null);
    const readOnlyButtonRef = useRef<HTMLButtonElement>(null);
    const iconContainerRef = useRef<HTMLDivElement>(null);
    const isMaskedRef = useRef<boolean>(!disableMask);
    const ariaLabelledBy = otherProps["aria-labelledby"];

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement, []);

    useApplyStyle(iconContainerRef, {
        [styles.tokens.iconContainer.inactiveColor]: maskIconInactiveColor,
        [styles.tokens.iconContainer.activeColor]: maskIconActiveColor,
    });

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

    const handleIconMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleToggleMask = () => {
        const nextMasked = !isMasked;

        toggleMasking(nextMasked);

        if (!nextMasked) {
            inputRef.current?.focus();
            return;
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================
    const toggleMasking = (mask: boolean) => {
        if (isMaskedRef.current === mask) return;

        isMaskedRef.current = mask;
        setIsMasked(mask);

        if (mask) {
            onMask?.();
        } else {
            onUnmask?.();
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
            <div
                ref={iconContainerRef}
                className={clsx(
                    styles.iconContainer,
                    isDisabled && styles.iconContainerDisabled
                )}
                data-testid={`icon-${isMasked ? "masked" : "unmasked"}`}
                onMouseDown={!isDisabled ? handleIconMouseDown : undefined}
                onClick={!isDisabled ? handleToggleMask : undefined}
                aria-hidden="true"
            >
                {isMasked ? iconUnmask : iconMask}
            </div>
        );
    };

    const renderReadOnlyButton = () => {
        const isButtonDisabled = shouldDisableMasking() || isEmptyReadOnlyState;

        return (
            <>
                <VisuallyHidden id={valueId}>
                    {getValueDescription()}
                </VisuallyHidden>
                <button
                    ref={readOnlyButtonRef}
                    className={styles.readOnlyClickable}
                    data-testid="masked-input-readonly-button"
                    onClick={!isButtonDisabled ? handleToggleMask : undefined}
                    type="button"
                    aria-labelledby={concatIds(valueId, ariaLabelledBy)}
                    aria-disabled={isButtonDisabled}
                >
                    <span className={styles.readOnlyValueText}>
                        {getValue()}
                    </span>
                    {!isButtonDisabled && (
                        <span className={styles.readOnlyIconContainer}>
                            {isMasked ? (
                                <EyeIcon data-testid="masked-icon" />
                            ) : (
                                <EyeSlashIcon data-testid="unmasked-icon" />
                            )}
                        </span>
                    )}
                </button>
            </>
        );
    };

    const renderElement = () => {
        if (readOnly) {
            switch (loadState) {
                case "fail":
                    return (
                        <BasicButton
                            ref={tryAgainRef}
                            className={styles.clickableErrorWrapper}
                            onClick={handleTryAgain}
                            data-testid="try-again-button"
                            type="button"
                        >
                            <span className={styles.errorTextContainer}>
                                <ExclamationTriangleIcon
                                    className={styles.errorIcon}
                                />
                                <span className={styles.errorLabel}>Error</span>
                            </span>
                            <span className={styles.tryAgainLabel}>
                                Try again?
                            </span>
                        </BasicButton>
                    );
                case "loading":
                    return (
                        <div className={styles.loadingWrapper}>
                            <ComponentLoadingSpinner
                                className={styles.spinner}
                            />
                            <Typography.BodyBL className={styles.loadingLabel}>
                                Retrieving...
                            </Typography.BodyBL>
                        </div>
                    );
                case "success":
                default:
                    return renderReadOnlyButton();
            }
        }

        return (
            <InputGroup
                ref={inputRef}
                className={clsx(styles.inputGroupWrapper, className)}
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
                {...otherProps}
            />
        );
    };

    return <div aria-busy={loadState === "loading"}>{renderElement()}</div>;
};

/**
 * A text input that masks sensitive values and allows toggling visibility.
 *
 * Use `MaskedInput` when collecting or displaying sensitive data such as
 * identity numbers or passwords.
 */
export const MaskedInput = React.forwardRef(Component);
