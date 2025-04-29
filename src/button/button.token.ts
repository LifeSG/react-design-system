import { getTokenValue } from "../shared/styles";
import { Colour, Components, Radius, ThemeStyleProps } from "../theme";

export const ButtonRadius = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-radius"]) {
        return getTokenValue(themeButton["button-radius"], props);
    }

    return Radius.sm;
};

export const ButtonDefaultColourBg = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-default-colour-bg"]) {
        return getTokenValue(themeButton["button-default-colour-bg"], props);
    }

    return Colour["bg-primary"];
};

export const ButtonDefaultColourBgHover = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-default-colour-bg-hover"]) {
        return getTokenValue(
            themeButton["button-default-colour-bg-hover"],
            props
        );
    }

    return Colour["bg-primary-hover"];
};

export const ButtonDefaultColourText = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-default-colour-text"]) {
        return getTokenValue(themeButton["button-default-colour-text"], props);
    }

    return Colour["text-inverse"];
};

export const ButtonSecondaryColourBorder = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-secondary-colour-border"]) {
        return getTokenValue(
            themeButton["button-secondary-colour-border"],
            props
        );
    }

    return Colour["border-primary"];
};

export const ButtonSecondaryColourText = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-secondary-colour-text"]) {
        return getTokenValue(
            themeButton["button-secondary-colour-text"],
            props
        );
    }

    return Colour["text-primary"];
};

export const ButtonLightColourText = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-light-colour-text"]) {
        return getTokenValue(themeButton["button-light-colour-text"], props);
    }

    return Colour["text-primary"];
};

export const ButtonLinkColourText = (props: ThemeStyleProps) => {
    const getButtonAttribute = Components["Button"];
    const themeButton = getButtonAttribute?.(props);
    if (themeButton?.["button-link-colour-text"]) {
        return getTokenValue(themeButton["button-link-colour-text"], props);
    }

    return Colour["text-primary"];
};
