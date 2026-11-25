import styled, { css } from "styled-components";
import { Border, Colour, Font, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface StyleProps {
    $inactive?: boolean | undefined;
}

// =============================================================================
// STYLING
// =============================================================================
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    min-width: 0;
    gap: ${Spacing["spacing-8"]};
`;

export const Tag = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    gap: ${Spacing["spacing-4"]};
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    padding: 2px ${Spacing["spacing-8"]};
    border: ${Border["width-010"]} ${Border["solid"]}
        ${Colour["border-primary"]};
    border-radius: ${Radius["sm"]};
    background: ${Colour["bg-primary-subtlest"]};
    color: ${Colour["text-primary"]};
    ${Font["body-xs-semibold"]}

    ${(props) =>
        props.$inactive &&
        css`
            border-color: ${Colour["border-strong"]};
            background: ${Colour["bg-hover-neutral-strong"]};
            color: ${Colour["text-subtle"]};
        `}
`;

export const TagLabel = styled.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
`;

export const RemoveButton = styled.button`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0;
    border: none;
    border-radius: ${Radius["sm"]};
    background: transparent;
    color: inherit;
    cursor: pointer;

    svg {
        width: 1em;
        height: 1em;
    }

    &:focus-visible {
        outline: 2px solid ${Colour["focus-ring"]};
        outline-offset: 1px;
    }
`;

export const MoreEllipsis = styled.span`
    flex-shrink: 0;
    line-height: 1;
    transform: translateY(-0.25em);
`;
