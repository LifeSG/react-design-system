import styled, { css } from "styled-components";
import { Alert } from "../alert";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { ToggleStyleType } from "./types";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";

// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
    $indicator?: boolean;
}

interface ContainerStyleProps extends StyleProps {
    $styleType?: ToggleStyleType;
    $error?: boolean;
}

interface IndicatorLabelContainerStyleProps {
    $addPadding?: boolean;
}

interface LabelStyleProps extends StyleProps {
    $maxLines?: { desktop?: number; mobile?: number; tablet?: number };
}

interface ExpandButtonStyleProps extends StyleProps {
    $paddingTopRequired?: boolean;
}

interface ChildrenStyleProps extends StyleProps {
    $isFinalItem?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    width: 100%;

    // Content positioning style
    ${(props) => {
        if (!props.$indicator) {
            return css`
                justify-content: center;
            `;
        }
    }}

    // Background, Hover and Border style
    ${(props) => {
        switch (props.$styleType) {
            case "no-border": {
                if (props.$error) {
                    return css`
                        border-color: ${Color.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                        }
                    `;
                } else if (!props.$disabled) {
                    return css`
                        border-color: transparent;

                        :hover {
                            background: ${Color.Accent.Light[6]};
                        }
                    `;
                } else {
                    return css`
                        border-color: transparent;
                    `;
                }
            }

            default: {
                if (props.$disabled && !props.$selected) {
                    return css`
                        border-color: ${Color.Neutral[5]};
                    `;
                } else if (props.$disabled && props.$selected) {
                    return css`
                        border-color: ${Color.Neutral[4]};
                    `;
                } else if (props.$error) {
                    return css`
                        border-color: ${Color.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                        }
                    `;
                } else if (props.$selected) {
                    return css`
                        border-color: ${Color.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                        }
                    `;
                } else {
                    return css`
                        background: ${Color.Neutral[8]};
                        border-color: ${Color.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                            border-color: ${Color.Accent.Light[1]};
                        }
                    `;
                }
            }
        }
    }}
`;

export const Input = styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`;

export const Label = styled.label<LabelStyleProps>`
    ${(props) => {
        if (props.$selected && !props.$indicator) {
            return css`
                ${TextStyleHelper.getTextStyle("H4", "semibold")}
            `;
        } else {
            return css`
                ${TextStyleHelper.getTextStyle("H4", "regular")}
            `;
        }
    }}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${(props) => props.$maxLines?.desktop ?? "none"};
    ${MediaQuery.MaxWidth.tablet} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.tablet ?? "none"};
    }
    ${MediaQuery.MaxWidth.mobileL} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.mobile ?? "none"};
    }
    color: ${Color.Neutral[1]};

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Color.Primary};
            `;
        }
    }}
`;

export const SubLabel = styled.div<LabelStyleProps>`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${TextStyleHelper.getFontFamily("BodySmall", "semibold")}
        color: inherit;
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Color.Primary};
            `;
        } else {
            return css`
                color: ${Color.Neutral[1]};
            `;
        }
    }}
`;

export const HeaderContainer = styled.div<ContainerStyleProps>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${(props) => {
        switch (props.$styleType) {
            case "no-border": {
                if (props.$error) {
                    return css`
                        background: ${Color.Neutral[8]};
                    `;
                } else if (!props.$disabled) {
                    return css`
                        :hover {
                            background: ${Color.Accent.Light[6]};
                        }
                    `;
                } else {
                    return css``;
                }
            }
            default: {
                if (props.$disabled && !props.$selected) {
                    return css`
                        background: ${Color.Neutral[6]};
                    `;
                } else if (props.$disabled && props.$selected) {
                    return css`
                        background: ${Color.Neutral[6]};
                    `;
                } else if (props.$error) {
                    return css`
                        background: ${Color.Neutral[8]};
                    `;
                } else if (props.$selected) {
                    return css`
                        background: ${Color.Accent.Light[5]};
                    `;
                } else {
                    return css`
                        background: ${Color.Neutral[8]};
                    `;
                }
            }
        }
    }}
`;

export const IndicatorLabelContainer = styled.div<IndicatorLabelContainerStyleProps>`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${(props) =>
        props.$addPadding ? "0.6875rem 0rem 0.6875rem 1rem" : "0.6875rem 1rem"};
`;

export const RemoveButton = styled.button<ContainerStyleProps>`
    color: ${(props) =>
        props.$disabled ? Color.Neutral[3] : Color.Validation.Red.Icon};
    white-space: nowrap;
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ExpandButton = styled.button<ExpandButtonStyleProps>`
    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
    color: ${(props) => (props.disabled ? Color.Neutral[3] : Color.Primary)};
    ${TextStyleHelper.getTextStyle("H4", "semibold")}
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 0.6875rem;
    border: none;
    background: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    float: right;
    padding-top: ${(props) =>
        props.$paddingTopRequired ? "0.6875rem" : "0rem"};
`;

export const ErrorContainer = styled.div<StyleProps>`
    width: 100%;
    color: ${(props) => (props.$disabled ? Color.Neutral[3] : Color.Primary)};
    border: none;
    background: none;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    padding-top: 0.6875rem;
    padding-bottom: 0.5rem;
`;

export const AlertContainer = styled(Alert)`
    width: 100%;
    user-select: none;
`;

export const ChildrenContainer = styled.div`
    padding: 0 1rem;
`;

export const Children = styled.div<ChildrenStyleProps>`
    padding-top: 0.6875rem;
    padding-bottom: ${(props) => (props.$isFinalItem ? "0.6875rem" : "0.5rem")};
    ${applyHtmlContentStyle({ textSize: "BodySmall" })}

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Color.Neutral[3]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Color.Primary};
            `;
        } else {
            return css`
                color: ${Color.Neutral[1]};
            `;
        }
    }}
`;

export const ErrorText = styled(Text.H5)<StyleProps>`
    color: ${(props) =>
        props.$disabled ? Color.Neutral[3] : Color.Validation.Red.Text};
`;

export const ErrorListItem = styled.li<StyleProps>`
    color: ${(props) =>
        props.$disabled
            ? Color.Neutral[3]
            : Color.Validation.Red.Text} !important;
`;
