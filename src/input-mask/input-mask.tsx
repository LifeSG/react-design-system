import React, { useEffect, useState } from "react";
import { InputGroup } from "../input-group/input-group";
import { EyeIcon } from "@lifesg/react-icons/eye";
import { EyeSlashIcon } from "@lifesg/react-icons/eye-slash";
import { IconContainer } from "./input-mask.style";
import { InputMaskProps } from "./types";
import { isEmpty } from "lodash";

const Component = <T, V>(
    {
        value,
        readOnly,
        "data-testid": dataTestId,
        maskRange,
        unmaskRange,
        maskRegex,
        maskTransformer,
        onChange,
        iconMask = <EyeSlashIcon />,
        iconUnmask = <EyeIcon />,
        iconActiveColor: maskIconActiveColor,
        iconInactiveColor: maskIconInactiveColor,
        maskChar = "•",
        onMask,
        onUnmask,
        error,
        ...otherProps
    }: InputMaskProps<T, V>,
    ref: React.Ref<HTMLInputElement>
) => {
    const [isMasked, setIsMasked] = useState(true);
    const [updatedValue, setUpdatedValue] = useState(value || "");
    const isEmptyReadOnlyState = readOnly && isEmpty(value);

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

    const handleFocus = () => !readOnly && setIsMasked(false);
    const handleBlur = () => !readOnly && setIsMasked(true);

    const handleChange = (event) => {
        setUpdatedValue(event.target.value);
        onChange && onChange(event);
    };

    const handleMaskIconClick = () => {
        if (!isMaskIconDisabled()) {
            setIsMasked(!isMasked);
        }
    };

    // =============================================================================
    // HELPER FUNCTIONS
    // =============================================================================

    const getValue = () => {
        if (isEmptyReadOnlyState) {
            return "-";
        }

        return isMasked ? maskValue(updatedValue?.toString()) : updatedValue;
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

    const isMaskIconDisabled = () => !updatedValue?.toString().length || error;

    // =============================================================================
    // RENDER FUNCTIONS
    // =============================================================================

    const renderIcon = () =>
        !isEmptyReadOnlyState && (
            <IconContainer
                data-testid={`icon-${isMasked ? "masked" : "unmasked"}`}
                onClick={handleMaskIconClick}
                $isDisabled={isMaskIconDisabled()}
                $inactiveColor={maskIconInactiveColor}
                $activeColor={maskIconActiveColor}
            >
                {isMasked ? iconUnmask : iconMask}
            </IconContainer>
        );

    return (
        <InputGroup
            ref={ref}
            data-testid={`${dataTestId || "input-mask"}${
                isMasked ? "-masked" : "-unmasked"
            }`}
            addon={{
                type: "custom",
                attributes: {
                    children: renderIcon(),
                },
                position: "right",
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={getValue()}
            readOnly={readOnly}
            {...otherProps}
        />
    );
};

export const InputMask = React.forwardRef(Component);
