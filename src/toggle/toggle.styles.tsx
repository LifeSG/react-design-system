import styled, { css } from "styled-components";
import { Alert } from "../alert";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { TextList } from "../text-list";
import { ToggleStyleType } from "./types";
import { Colour, Font } from "../theme";
import { MediaQuery } from "../theme";
import { Typography } from "../typography";

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
                        border-color: ${Colour["border-error"]};
                    `;
                } else if (!props.$disabled) {
                    return css`
                        border-color: transparent;

                        :hover {
                            background: ${Colour.bg};
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
                        border-color: ${Colour["border-disabled"]};
                    `;
                } else if (props.$disabled && props.$selected) {
                    return css`
                        border-color: ${Colour["border-selected-disabled"]};
                    `;
                } else if (props.$error) {
                    return css`
                        border-color: ${Colour["border-error"]};
                    `;
                } else if (props.$selected) {
                    return css`
                        border-color: ${Colour["border-selected"]};
                    `;
                } else {
                    return css`
                        background: ${Colour.bg};
                        border-color: ${Colour.border};

                        :hover {
                            border-color: ${Colour["border-hover-strong"]};
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
                ${Font["header-xs-semibold"]}
            `;
        } else {
            return css`
                ${Font["header-xs-regular"]}
            `;
        }
    }}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${(props) => props.$maxLines?.desktop ?? "none"};
    ${MediaQuery.MaxWidth.xl} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.tablet ?? "none"};
    }
    ${MediaQuery.MaxWidth.md} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.mobile ?? "none"};
    }
    color: ${Colour.text};

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Colour["text-disabled"]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Colour["text-selected"]};
            `;
        }
    }}
`;

export const SubLabel = styled.div<LabelStyleProps>`
    ${Font["body-lg-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Font["body-lg-semibold"]}
        color: inherit;
    }

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Colour["text-disabled"]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Colour["text-selected"]};
            `;
        } else {
            return css`
                color: ${Colour.text};
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
                        background: ${Colour.bg};
                    `;
                } else if (!props.$disabled) {
                    return css`
                        :hover {
                            background: ${Colour.bg};
                            border: ${Colour.border};
                        }
                    `;
                } else {
                    return css`
                        border: ${Colour["border-disabled"]};
                    `;
                }
            }
            default: {
                if (props.$disabled && !props.$selected) {
                    return css`
                        background: ${Colour["bg-disabled"]};
                    `;
                } else if (props.$disabled && props.$selected) {
                    return css`
                        background: ${Colour["bg-selected-disabled"]};
                    `;
                } else if (props.$error) {
                    return css`
                        background: ${Colour.bg};
                    `;
                } else if (props.$selected) {
                    return css`
                        background: ${Colour["bg-selected"]};
                    `;
                } else {
                    return css`
                        background: ${Colour.bg};
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

export const RemoveButton = styled.button<StyleProps>`
    color: ${(props) =>
        props.$disabled ? Colour["text-disabled"] : Colour.text};
    white-space: nowrap;
    ${Font["header-xs-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ExpandButton = styled.button<ExpandButtonStyleProps>`
    color: ${(props) =>
        props.disabled ? Colour["text-disabled"] : Colour.text};
    ${Font["header-xs-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${(props) =>
        props.$paddingTopRequired ? "0.6875rem" : "0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`;

export const ErrorContainer = styled.div<StyleProps>`
    width: 100%;
    color: ${(props) =>
        props.$disabled ? Colour["text-disabled"] : Colour.text};
    border: none;
    background: none;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`;

export const AlertContainer = styled(Alert)`
    width: 100%;
    user-select: none;
`;

export const Children = styled.div<ChildrenStyleProps>`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${(props) => (props.$isFinalItem ? "0.6875rem" : "0.5rem")};
    ${applyHtmlContentStyle({ textSize: "body-sm" })}

    ${(props) => {
        if (props.$disabled) {
            return css`
                color: ${Colour["text-disabled"]};
            `;
        } else if (props.$selected) {
            return css`
                color: ${Colour["text-selected"]};
            `;
        } else {
            return css`
                color: ${Colour.text};
            `;
        }
    }}
`;

export const ErrorText = styled(Typography.BodyMD)<StyleProps>`
    color: ${(props) =>
        props.$disabled ? Colour["text-disabled"] : Colour.text};
`;

export const ErrorList = styled(TextList.Ul)<StyleProps>`
    li {
        color: ${(props) =>
            props.$disabled ? Colour["text-disabled"] : Colour.text};
    }
`;
