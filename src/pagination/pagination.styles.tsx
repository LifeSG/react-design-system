import styled, { css } from "styled-components";
import { Button } from "../button/button";
import { v2_Color } from "../v2_color";
import { Input } from "../input";
import { v2_MediaQuery } from "../v2_media";
import { ClickableIcon } from "../shared/clickable-icon";
import { v2_Text, v2_TextStyleHelper } from "../v2_text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}
interface ButtonProps {
    $position: string;
}

// =============================================================================
// STYLING
// =============================================================================
export const PaginationWrapper = styled.nav`
    display: flex;
`;

export const PaginationList = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${v2_MediaQuery.MaxWidth.tablet} {
        align-self: center;
    }
`;

export const PaginationMenu = styled.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`;

export const NavigationItem = styled(ClickableIcon)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${v2_Color.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${v2_Color.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${v2_Color.Accent.Light[1]};
    }
`;

export const NavigationButton = styled(ClickableIcon)<ButtonProps>`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${v2_Color.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${v2_Color.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${v2_Color.Accent.Light[1]};
    }
    ${(props) => {
        if (props.$position === "left") {
            return css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `;
        } else {
            return css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `;
        }
    }}

    ${v2_MediaQuery.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`;

export const PageItem = styled(Button.Default)<StyleProps>`
    background: ${(props) =>
        props.$selected ? v2_Color.Primary : v2_Color.Neutral[8]};
    border: 1px solid
        ${(props) => (props.$selected ? v2_Color.Primary : v2_Color.Neutral[5])};
    color: ${(props) =>
        props.$selected ? v2_Color.Neutral[8] : v2_Color.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${(props) =>
            props.$selected ? v2_Color.Neutral[8] : v2_Color.Neutral[1]};
        ${(props) => {
            if (props.$selected) {
                return css`
                    ${v2_TextStyleHelper.getTextStyle("Body", 700)};
                `;
            } else {
                return css`
                    ${v2_TextStyleHelper.getTextStyle("Body", 400)};
                `;
            }
        }}
    }
    :hover {
        box-shadow: none;

        background: ${(props) =>
            props.$selected ? v2_Color.Primary : v2_Color.Accent.Light[5]};
        border: 1px solid
            ${(props) =>
                props.$selected ? v2_Color.Primary : v2_Color.Accent.Light[5]};
        span {
            color: ${(props) =>
                props.$selected ? v2_Color.Neutral[8] : v2_Color.Primary};
            ${(props) => {
                if (props.$selected) {
                    return css`
                        ${v2_TextStyleHelper.getTextStyle("Body", 700)};
                    `;
                } else {
                    return css`
                        ${v2_TextStyleHelper.getTextStyle("Body", 600)};
                    `;
                }
            }}
        }
    }

    :active,
    :focus {
        background: ${(props) =>
            props.$selected ? v2_Color.Primary : v2_Color.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${v2_Color.Accent.Light[1]};
        span {
            color: ${(props) =>
                props.$selected ? v2_Color.Neutral[8] : v2_Color.Primary};

            ${(props) => {
                if (props.$selected) {
                    return css`
                        ${v2_TextStyleHelper.getTextStyle("Body", 700)};
                    `;
                } else {
                    return css`
                        ${v2_TextStyleHelper.getTextStyle("Body", 400)};
                    `;
                }
            }}
        }
    }
`;

export const EllipsisItem = styled(ClickableIcon)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${v2_Color.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${v2_Color.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${v2_Color.Accent.Light[1]};
    }
`;

export const EllipsisContainer = styled.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const PaginationMobileInput = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${v2_Color.Neutral[1]};

    display: flex;
    justify-content: center;
`;

export const Label = styled(v2_Text.Body)`
    white-space: nowrap;
`;

export const LabelDivider = styled(v2_Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`;

export const InputView = styled(Input)`
    ${v2_TextStyleHelper.getTextStyle("Body", 400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${v2_Color.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${v2_TextStyleHelper.getTextStyle("XSmall", 400)};
        }
    }
`;

export const Hover = styled.div`
    ${v2_TextStyleHelper.getTextStyle("XSmall", 400)};

    background-color: ${v2_Color.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${v2_Color.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`;

export const InputSelectWrapper = styled.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`;
