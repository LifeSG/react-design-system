import styled, { css } from "styled-components";
import { Color } from "../color";
import { Text, TextStyleHelper } from "../text";
import { MediaQuery } from "../media";
import { Alert } from "../alert";
// =============================================================================
// STYLE INTERFACES, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected?: boolean;
    $disabled?: boolean;
}

interface ContainerStyleProps extends StyleProps {
    $error?: boolean;
}

interface LabelStyleProps extends StyleProps {
    $maxLines?: { desktop?: number; mobile?: number };
}

interface ButtonStyleProps extends StyleProps {
    $show?: boolean;
}

interface ChildrenStyleProps extends StyleProps {
    $isNotFinalItem?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div<ContainerStyleProps>`
    width: 100%;
    position: relative;
    display: inline-flex;
    border-radius: 0.125rem;
    border-width: 0.063rem;
    border-style: solid;
    flex-direction: column;
    height: fit-content;

    // Background, Hover and Border style
    ${(props) => {
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
                    box-shadow: 0 0 0.25rem 0.063rem ${Color.Shadow.Red};
                }
            `;
        } else if (props.$selected) {
            return css`
                border-color: ${Color.Primary};

                :hover {
                    box-shadow: 0 0 0.25rem 0.063rem ${Color.Shadow.Accent};
                }
            `;
        } else {
            return css`
                background: ${Color.Neutral[8]};
                border-color: ${Color.Neutral[5]};

                :hover {
                    box-shadow: 0 0 0.25rem 0.063rem ${Color.Shadow.Accent};
                    border-color: ${Color.Accent.Light[1]};
                }
            `;
        }
    }}
`;

export const HeaderContainer = styled.div<ContainerStyleProps>`
    display: flex;
    padding: 0.688rem;
    align-items: flex-start;
    justify-content: space-between;
    ${(props) => {
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
    }}
`;

export const CompositeOptionSelector = styled.div<StyleProps>`
    display: flex;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    height: 100%;
    width: 100%;
`;
export const HeadingText = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonLabel = styled.label<StyleProps>`
    ${TextStyleHelper.getTextStyle("H4", "semibold")};
    line-height: 1.375rem;
    color: ${Color.Validation.Red[1]};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;
export const Label = styled.label<LabelStyleProps>`
    ${TextStyleHelper.getTextStyle("H4", "regular")}

    user-select: none;
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    -webkit-line-clamp: ${(props) => props.$maxLines?.desktop ?? "none"};
    ${MediaQuery.MaxWidth.tablet} {
        -webkit-line-clamp: ${(props) => props.$maxLines?.mobile ?? "none"};
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
export const SubLabel = styled(Label)`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    margin-top: 0.5rem;
`;

export const ViewMoreOrLessButtonLabel = styled(Text.H4)<StyleProps>`
    color: ${(props) => (props.$disabled ? Color.Neutral[3] : Color.Primary)};
    margin-right: 0.5rem;
`;

export const ButtonContainer = styled.button<ContainerStyleProps>`
    color: ${(props) =>
        props.$disabled ? Color.Neutral[3] : Color.Validation.Red.Icon};
    white-space: nowrap;
    height: fit-content;
    padding-top: 0rem;
    padding-bottom: 0rem;
    border: none;
    background: none;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;
export const ViewMoreOrLessButtonContainer = styled.button<ButtonStyleProps>`
    color: ${(props) => (props.$disabled ? Color.Neutral[3] : Color.Primary)};
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 0.688rem;
    border: none;
    background: none;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    float: right;
    display: ${(props) => (props.$show ? "flex" : "none")};
`;
export const ErrorListContainer = styled.div<ButtonStyleProps>`
    width: 100%;
    color: ${(props) => (props.$disabled ? Color.Neutral[3] : Color.Primary)};
    border: none;
    background: none;
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
    display: ${(props) => (props.$show ? "flex" : "none")};
    padding-top: 0.688rem;
    padding-bottom: ${(props) => (!props.$show ? "0.688rem" : "0.5rem")};
`;

export const AlertContainer = styled(Alert)`
    width: 100%;
    user-select: none;
`;
export const ChildrenContainer = styled.div`
    padding: 0 1rem;
`;

export const ErrorMessage = styled(Text.H6)`
    color: ${Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`;

export const Children = styled.div<ChildrenStyleProps>`
    ${TextStyleHelper.getTextStyle("BodySmall", "regular")}
    padding-top: 0.688rem;
    padding-bottom: ${(props) =>
        props.$isNotFinalItem ? "0.5rem" : "0.688rem"};
    display: ${(props) => (props.$selected ? "flex" : "none")};
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

export const ErrorListItem = styled(Text.H5)<StyleProps>`
    color: ${(props) => (props.$disabled ? Color.Neutral[3] : "#C60000")};
`;
export const ErrorListli = styled.li<StyleProps>`
    color: ${(props) =>
        props.$disabled ? Color.Neutral[3] : "#C60000"} !important;
`;
