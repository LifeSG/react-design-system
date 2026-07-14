import { button as cls } from "@lifesg/flagship-styles";

export type ButtonStyleType = "default" | "secondary" | "light" | "link";
export type ButtonSizeType = "large" | "default" | "small";
export type ButtonIconPosition = "left" | "right";

export interface ButtonClassOptions {
    styleType: ButtonStyleType;
    sizeType: ButtonSizeType;
    danger: boolean;
    disabled: boolean;
    focusableWhenDisabled: boolean;
    iconOnly: boolean;
    iconPosition: ButtonIconPosition;
    hasChildren: boolean;
}

export function getStyleClass(
    styleType: ButtonStyleType,
    danger: boolean,
    disabled: boolean,
    focusableWhenDisabled: boolean
): string {
    if (disabled && !focusableWhenDisabled) return cls.styleDisabled;
    switch (styleType) {
        case "secondary":
            return danger ? cls.styleSecondaryDanger : cls.styleSecondary;
        case "light":
            return danger ? cls.styleLightDanger : cls.styleLight;
        case "link":
            return danger ? cls.styleLinkDanger : cls.styleLink;
        default:
            return danger ? cls.styleDefaultDanger : cls.styleDefault;
    }
}

export function getSizeClass(
    sizeType: ButtonSizeType,
    iconOnly: boolean
): string {
    switch (sizeType) {
        case "small":
            return iconOnly ? cls.sizeSmallIconOnly : cls.sizeSmall;
        case "large":
            return iconOnly ? cls.sizeLargeIconOnly : cls.sizeLarge;
        default:
            return iconOnly ? cls.sizeDefaultIconOnly : cls.sizeDefault;
    }
}

export function getButtonClasses(opts: ButtonClassOptions): string {
    const style = getStyleClass(
        opts.styleType,
        opts.danger,
        opts.disabled,
        opts.focusableWhenDisabled
    );
    const size = getSizeClass(opts.sizeType, opts.iconOnly);
    const classes: string[] = [cls.root, style, size];
    if (opts.iconPosition === "right") classes.push(cls.iconRight);
    if (opts.hasChildren) classes.push(cls.hasMinWidth);
    return classes.join(" ");
}
