import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text, TextStyle, TextStyleHelper, TextWeight } from "../text";
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
}

interface LabelStyleProps extends StyleProps {}

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
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    padding: 0.6875rem 1rem;

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
                        background: ${Color.Neutral[8]};

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
                        background: ${Color.Neutral[6]};
                        border-color: ${Color.Neutral[5]};
                    `;
                } else if (props.$disabled && props.$selected) {
                    return css`
                        background: ${Color.Neutral[6]};
                        border-color: ${Color.Neutral[4]};
                    `;
                } else if (props.$error) {
                    return css`
                        background: ${Color.Neutral[8]};
                        border-color: ${Color.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                        }
                    `;
                } else if (props.$selected) {
                    return css`
                        background: ${Color.Accent.Light[5]};
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
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
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
