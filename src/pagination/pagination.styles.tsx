import styled, { css } from "styled-components";
import { Button } from "../button/button";
import { Color } from "../color";
import { IconButton } from "../icon-button";
import { MediaQuery } from "../media";
import { Text, TextStyleHelper } from "../text";
import { Input } from "../input";

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

export const PaginationWrapper = styled.div`
    display: flex;

    ${MediaQuery.MaxWidth.mobileS} {
        margin-left: -1.5rem;
    }
`;

export const PaginationList = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${MediaQuery.MaxWidth.tablet} {
        align-self: center;
    }
`;

export const PaginationMenu = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const NavigationItem = styled(IconButton)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;

    color: ${Color.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Color.Neutral[4]};
        cursor: not-allowed;
    }
`;

export const NavigationButton = styled(IconButton)<ButtonProps>`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;

    color: ${Color.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Color.Neutral[4]};
        cursor: not-allowed;
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

    ${MediaQuery.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`;

export const PageItem = styled(Button.Default)<StyleProps>`
    background: ${(props) =>
        props.$selected ? Color.Primary : Color.Neutral[8]};
    border: 1px solid
        ${(props) => (props.$selected ? Color.Primary : Color.Neutral[5])};
    color: ${(props) =>
        props.$selected ? Color.Neutral[8] : Color.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Neutral[1]};
        ${(props) => {
            if (props.$selected) {
                return css`
                    ${TextStyleHelper.getTextStyle("Body", 700)};
                `;
            } else {
                return css`
                    ${TextStyleHelper.getTextStyle("Body", 400)};
                `;
            }
        }}
    }
    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Primary};
        box-shadow: none;
    }
`;

export const EllipsisItem = styled(IconButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: not-allowed;
    color: ${Color.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :active,
    :focus {
        svg {
            color: ${Color.Neutral[3]};
        }
    }

    :
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

    button:nth-child(1) {
        opacity: 1;
        display: block;
    }

    button:nth-child(2) {
        opacity: 0;
        display: none;
    }
    :hover,
    :active,
    :focus {
        button:nth-child(1) {
            opacity: 0;
            display: none;
        }

        button:nth-child(2) {
            opacity: 1;
            display: block;
        }
    }
`;

export const PaginationMobileInput = styled.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Color.Neutral[1]};

    display: flex;
    justify-content: center;
`;

export const Label = styled(Text.Body)`
    white-space: nowrap;
    ${TextStyleHelper.getTextStyle("Body", 400)};
`;

export const LabelDivider = styled(Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
    ${TextStyleHelper.getTextStyle("Body", 400)};
`;

export const InputView = styled(Input)`
    ${TextStyleHelper.getTextStyle("Body", 400)};
    justify-content: center;
    //margin: 0 0.5rem;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${Color.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;
    }
`;

export const Hover = styled.div`
    ${TextStyleHelper.getTextStyle("XSmall", 400)};

    background-color: ${Color.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${Color.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`;
