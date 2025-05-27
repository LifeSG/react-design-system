import styled, { css } from "styled-components";
import { Alert } from "../alert";
import { applyHtmlContentStyle } from "../shared/html-content/html-content";
import { ToggleIcon } from "../shared/toggle-icon/toggle-icon";
import { TextList } from "../text-list";
import { Colour, Font, MediaQuery } from "@/theme";
import { Typography } from "../typography";
import { ToggleStyleType } from "./types";

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
    $useContentWidth?: boolean;
}

interface IndicatorLabelContainerStyleProps {
    $addPadding?: boolean;
}

interface LabelStyleProps {
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
    background: ${Colour.bg};

    ${(props) => {
        if (!props.$indicator) {
            return css`
                justify-content: center;
            `;
        }
    }}

    // Container min width to fit content
    ${(props) => {
        if (props.$useContentWidth) {
            return css`
                min-width: unset;
            `;
        }
    }}

    // apply container border and header background color
    ${(props) => {
        switch (props.$styleType) {
            case "no-border": {
                if (props.$error) {
                    if (props.$disabled) {
                        return css`
                            border-color: ${Colour["border-error"]};
                        `;
                    } else {
                        return css`
                            border-color: ${Colour["border-error"]};

                            &:has(${HeaderContainer}:hover) {
                                background: ${Colour["bg-hover-subtle"]};
                            }
                        `;
                    }
                }

                if (props.$disabled) {
                    if (props.$selected) {
                        return css`
                            border: none;
                            background: ${Colour["bg-selected-disabled"]};
                        `;
                    } else {
                        return css`
                            border: none;
                        `;
                    }
                }

                if (props.$selected) {
                    return css`
                        border: none;
                        background: ${Colour["bg-selected"]};

                        &:has(${HeaderContainer}:hover) {
                            background: ${Colour["bg-selected-hover"]};

                            & ${TextContainer} {
                                color: ${Colour["text-selected-hover"]};
                            }

                            & ${StyledToggleIcon} {
                                color: ${Colour["icon-selected-hover"]};
                            }
                        }
                    `;
                }

                return css`
                    border: none;

                    &:has(${HeaderContainer}:hover) {
                        background: ${Colour["bg-hover-subtle"]};
                    }
                `;
            }

            default: {
                if (props.$error) {
                    if (props.$disabled) {
                        return css`
                            border-color: ${Colour["border-error"]};
                        `;
                    } else {
                        return css`
                            border-color: ${Colour["border-error"]};

                            &:has(${HeaderContainer}:hover) {
                                background: ${Colour["bg-hover-subtle"]};
                            }
                        `;
                    }
                }

                if (props.$disabled) {
                    if (props.$selected) {
                        return css`
                            border-color: ${Colour["border-selected-disabled"]};
                            background: ${Colour["bg-selected-disabled"]};
                        `;
                    } else {
                        return css`
                            border-color: ${Colour["border-disabled"]};
                            background: ${Colour["bg-disabled"]};
                        `;
                    }
                }

                if (props.$selected) {
                    return css`
                        border-color: ${Colour["border-selected"]};
                        background: ${Colour["bg-selected"]};

                        &:has(${HeaderContainer}:hover) {
                            background: ${Colour["bg-selected-hover"]};

                            & ${TextContainer} {
                                color: ${Colour["text-selected-hover"]};
                            }

                            & ${StyledToggleIcon} {
                                color: ${Colour["icon-selected-hover"]};
                            }
                        }
                    `;
                }

                return css`
                    border-color: ${Colour.border};

                    &:has(${HeaderContainer}:hover) {
                        background: ${Colour["bg-hover-subtle"]};
                    }
                `;
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

export const TextContainer = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${(props) => {
        if (props.$disabled) {
            if (props.$selected) {
                return css`
                    color: ${Colour["text-selected-disabled"]};
                `;
            } else {
                return css`
                    color: ${Colour["text-disabled"]};
                `;
            }
        }

        if (props.$selected) {
            return css`
                color: ${Colour["text-selected"]};
            `;
        }

        return css`
            color: ${Colour.text};
        `;
    }}
`;

export const Label = styled.label<LabelStyleProps>`
    ${Font["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${(props) => props.$maxLines?.desktop ?? "none"};
    ${MediaQuery.MaxWidth.lg} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.tablet ?? "none"};
    }
    ${MediaQuery.MaxWidth.sm} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.mobile ?? "none"};
    }
`;

export const SubLabel = styled.div`
    ${Font["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Font["body-md-semibold"]}
    }
`;

export const HeaderContainer = styled.div<ContainerStyleProps>`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
        props.$disabled ? Colour["text-disabled"] : Colour["text-error"]};
    white-space: nowrap;
    ${Font["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

export const ExpandButton = styled.button<ExpandButtonStyleProps>`
    color: ${(props) =>
        props.disabled ? Colour["text-disabled"] : Colour["text-primary"]};
    ${Font["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Colour.bg};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${(props) =>
        props.$paddingTopRequired ? "0.6875rem" : "0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`;

export const ErrorContainer = styled.div<StyleProps>`
    width: 100%;
    color: ${(props) =>
        props.$disabled ? Colour["text-disabled"] : Colour["text-error"]};
    border: none;
    background: ${Colour.bg};
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
    background-color: ${Colour.bg};
    ${applyHtmlContentStyle({ textSize: "body-md" })}

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
        props.$disabled ? Colour["text-disabled"] : Colour["text-error"]};
`;

export const ErrorList = styled(TextList.Ul)<StyleProps>`
    color: ${(props) =>
        props.$disabled ? Colour["text-disabled"] : Colour["text-error"]};
`;

export const StyledToggleIcon = styled(ToggleIcon)<StyleProps>`
    ${(props) => {
        if (props.$disabled) {
            if (props.$selected) {
                return css`
                    color: ${Colour["icon-selected-disabled"]};
                `;
            } else {
                return css`
                    color: ${Colour["icon-disabled-subtle"]};
                `;
            }
        }

        if (props.$selected) {
            return css`
                color: ${Colour["icon-selected"]};
            `;
        }
        return css`
            color: ${Colour["icon-subtle"]};
        `;
    }};
`;
