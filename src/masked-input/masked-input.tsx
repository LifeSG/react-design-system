import React, { useEffect, useState } from "react";
import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import { IconContainer, InputGroupWrapper } from "./masked-input.style";
import { MaskedInputProps } from "./types";
import { isEmpty } from "lodash";

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
        onMask,
        onUnmask,
        onChange,
        onFocus,
        onBlur,
        error,
        disableMask,
        ...otherProps
    }: MaskedInputProps,
    ref: React.Ref<HTMLInputElement>
) => {
    const isEmptyReadOnlyState = readOnly && isEmpty(value);
    const [isMasked, setIsMasked] = useState(!disableMask);
    const [updatedValue, setUpdatedValue] = useState(value || "");

    useEffect(() => {
        if (isMasked) {
            onMask && onMask();
        } else {
            onUnmask && onUnmask();
        }
    }, [isMasked]);

    // =============================================================================
    // EVENT HANDLERS
    // =============================================================================

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsMasked(false);
        onFocus && onFocus(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsMasked(true);
        onBlur && onBlur(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedValue(event.target.value);
        onChange && onChange(event);
    };

    const toggleMasking = (event?: React.MouseEvent<HTMLInputElement>) => {
        setIsMasked(!isMasked);
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getValue = () => {
        if (isEmptyReadOnlyState) {
            return "-";
        }

        return isMasked && !disableMask
            ? maskValue(updatedValue?.toString())
            : updatedValue;
    };

    const maskValue = (value: string): string => {
        if (!value) {
            return value;
        }

        if (maskRange) {
            const { startIndex, endIndex } = determineStartAndEndIndex(
                maskRange[0],
                maskRange[1]
            );
            return (
                value.substring(0, startIndex) +
                maskChar.repeat(
                    value.substring(startIndex, endIndex + 1).length
                ) +
                value.substring(endIndex + 1)
            );
        } else if (unmaskRange) {
            const { startIndex, endIndex } = determineStartAndEndIndex(
                unmaskRange[0],
                unmaskRange[1]
            );
            return (
                maskChar.repeat(value.substring(0, startIndex).length) +
                value.substring(startIndex, endIndex + 1) +
                maskChar.repeat(value.substring(endIndex + 1).length)
            );
        } else if (maskRegex) {
            return value.replace(maskRegex, maskChar);
        } else if (maskTransformer) {
            return maskTransformer(value);
        }

        return value;
    };

    const determineStartAndEndIndex = (index0: number, index1: number) => {
        return index0 < index1
            ? { startIndex: index0, endIndex: index1 }
            : { startIndex: index1, endIndex: index0 };
    };

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderIcon = () => {
        const isDisabled = !updatedValue?.toString().length || disableMask;

        return (
            !isEmptyReadOnlyState && (
                <IconContainer
                    data-testid={`icon-${isMasked ? "masked" : "unmasked"}`}
                    onClick={!isDisabled ? toggleMasking : undefined}
                    $isDisabled={isDisabled}
                    $inactiveColor={maskIconInactiveColor}
                    $activeColor={maskIconActiveColor}
                >
                    {isMasked ? iconUnmask : iconMask}
                </IconContainer>
            )
        );
    };

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
            onFocus={!readOnly && handleFocus}
            onBlur={!readOnly && handleBlur}
            onClick={readOnly && toggleMasking}
            onChange={handleChange}
            value={getValue()}
            readOnly={readOnly}
            error={error}
            {...otherProps}
        />
    );
};

export const MaskedInput = React.forwardRef(Component);
