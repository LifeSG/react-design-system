import styled, { css } from "styled-components";
import { Color } from "../color";
import { MediaQuery } from "../media";
import { Text } from "../text";

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

export const NavigationItem = styled(Text.Hyperlink.Small)<IconStyleProps>`
    display: flex;
    min-width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    justify-content: center;
    align-items: center;

    color: ${(props) => (props.$disabled ? Color.Neutral[4] : Color.Primary)};
    cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$disabled ? Color.Neutral[4] : Color.Primary};

        svg {
            color: ${(props) =>
                props.$disabled ? Color.Neutral[4] : Color.Primary};
        }
    }
`;

export const PageItem = styled(Text.Hyperlink.Default)<StyleProps>`
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

    :hover,
    :active,
    :focus {
        color: ${(props) =>
            props.$selected ? Color.Neutral[8] : Color.Primary};
    }
`;

export const EllipsisItem = styled(Text.Hyperlink.Default)`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2.5rem;
    height: 2.5rem;
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
