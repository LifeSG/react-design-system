import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text";
import { IconButton } from "../icon-button";
import { Button } from "../button/button";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}
interface IconStyleProps {
    $disabled: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

export const PaginationWrapper = styled.div`
    display: flex;
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
    /* margin: 0 0.25rem; */
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
    border-radius: 0.5rem;
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
    border-radius: 0.5rem;
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
`;
