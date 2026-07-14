import React, { type ReactElement } from "react";
import {
    Pressable,
    Text,
    View,
    type AccessibilityProps,
    type StyleProp,
    type ViewStyle,
} from "react-native";
import { buttonStyles, SIZE_MAP } from "./button-styles";
import { LoadingSpinner } from "./LoadingSpinner";
import { ThemeColours } from "../theme-constants";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type ButtonStyleType = "default" | "secondary" | "light" | "link";
export type ButtonSizeType = "large" | "default" | "small";

export interface ButtonProps extends AccessibilityProps {
    /** Visual style variant */
    styleType?: ButtonStyleType;
    /** Size preset */
    sizeType?: ButtonSizeType;
    /** Destructive/danger colouring */
    danger?: boolean;
    /** Show a loading spinner in place of the icon */
    loading?: boolean;
    /** Visually and functionally disabled */
    disabled?: boolean;
    /** Keep the button focusable when disabled (a11y) */
    focusableWhenDisabled?: boolean;
    /** Side on which the icon is displayed */
    iconPosition?: "left" | "right";
    /** Optional icon element */
    icon?: ReactElement;
    /** Button label — omit for icon-only mode */
    children?: React.ReactNode;
    /** Press handler */
    onPress?: () => void;
    /** Optional extra container style */
    style?: StyleProp<ViewStyle>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getContainerStyles(
    styleType: ButtonStyleType,
    danger: boolean,
    pressed: boolean,
    isDisabled: boolean
) {
    if (isDisabled) {
        // Link + light disabled: keep transparent background
        if (styleType === "link" || styleType === "light") {
            return [
                buttonStyles.styleLight,
                buttonStyles.disabled,
                {
                    borderColor: "transparent" as const,
                    backgroundColor: "transparent" as const,
                },
            ];
        }
        return [buttonStyles.disabled];
    }

    switch (styleType) {
        case "secondary":
            if (danger) {
                return [
                    buttonStyles.styleSecondaryDanger,
                    pressed && buttonStyles.styleSecondaryDangerPressed,
                ];
            }
            return [
                buttonStyles.styleSecondary,
                pressed && buttonStyles.styleSecondaryPressed,
            ];
        case "light":
            return [
                buttonStyles.styleLight,
                pressed && buttonStyles.styleLightPressed,
            ];
        case "link":
            return [
                buttonStyles.styleLink,
                pressed && buttonStyles.styleLinkPressed,
            ];
        case "default":
        default:
            if (danger) {
                return [
                    buttonStyles.styleDefaultDanger,
                    pressed && buttonStyles.styleDefaultDangerPressed,
                ];
            }
            return [
                buttonStyles.styleDefault,
                pressed && buttonStyles.styleDefaultPressed,
            ];
    }
}

function getTextStyle(
    styleType: ButtonStyleType,
    danger: boolean,
    isDisabled: boolean
) {
    if (isDisabled) return buttonStyles.disabledText;

    switch (styleType) {
        case "secondary":
            return danger
                ? buttonStyles.styleSecondaryDangerText
                : buttonStyles.styleSecondaryText;
        case "light":
            return buttonStyles.styleLightText;
        case "link":
            return buttonStyles.styleLinkText;
        case "default":
        default:
            return danger
                ? buttonStyles.styleDefaultDangerText
                : buttonStyles.styleDefaultText;
    }
}

function getSpinnerColour(
    styleType: ButtonStyleType,
    danger: boolean,
    isDisabled: boolean
) {
    if (isDisabled) return ThemeColours.textDisabled;

    switch (styleType) {
        case "default":
            return ThemeColours.white;
        case "secondary":
            return danger ? ThemeColours.textError : ThemeColours.textPrimary;
        case "light":
        case "link":
            return ThemeColours.textPrimary;
        default:
            return ThemeColours.white;
    }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export function Button({
    styleType = "default",
    sizeType = "default",
    danger = false,
    loading = false,
    disabled = false,
    focusableWhenDisabled = false,
    iconPosition = "left",
    icon,
    children,
    onPress,
    style,
    ...a11yProps
}: ButtonProps) {
    const isIconOnly = !!icon && !children;
    const isDisabled = disabled || loading;
    const sizeConf = SIZE_MAP[sizeType];

    const sizeStyle =
        sizeType === "large"
            ? buttonStyles.sizeLarge
            : sizeType === "small"
            ? buttonStyles.sizeSmall
            : buttonStyles.sizeDefault;

    const iconOnlyStyle = isIconOnly
        ? sizeType === "large"
            ? buttonStyles.iconOnlyLarge
            : sizeType === "small"
            ? buttonStyles.iconOnlySmall
            : buttonStyles.iconOnlyDefault
        : undefined;

    const textSizeStyle =
        sizeType === "large"
            ? buttonStyles.textLarge
            : sizeType === "small"
            ? buttonStyles.textSmall
            : buttonStyles.textDefault;

    const iconElement = loading ? (
        <LoadingSpinner
            size={sizeConf.iconSize}
            colour={getSpinnerColour(styleType, danger, disabled)}
        />
    ) : icon ? (
        <View
            style={{ width: sizeConf.iconSize, height: sizeConf.iconSize }}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
        >
            {icon}
        </View>
    ) : null;

    return (
        <Pressable
            onPress={onPress}
            disabled={isDisabled && !focusableWhenDisabled}
            accessibilityRole="button"
            accessibilityState={{
                disabled: isDisabled,
                busy: loading,
            }}
            {...a11yProps}
            style={({ pressed }) => [
                buttonStyles.base,
                sizeStyle,
                iconOnlyStyle,
                ...getContainerStyles(styleType, danger, pressed, isDisabled),
                style,
            ]}
        >
            {iconPosition === "left" && iconElement}
            {children != null && (
                <Text
                    style={[
                        buttonStyles.textBase,
                        textSizeStyle,
                        getTextStyle(styleType, danger, isDisabled),
                    ]}
                >
                    {children}
                </Text>
            )}
            {iconPosition === "right" && iconElement}
        </Pressable>
    );
}
