import { MinusSquareFillIcon } from "@lifesg/react-icons/minus-square-fill";
import styled, { css } from "styled-components";
import { Colour, Motion, Radius, Spacing } from "../../theme";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface ListItemStyleProps {
    $active?: boolean;
    $visible?: boolean;
    $toggleable?: boolean;
}

interface IndentStyleProps {
    $level?: number;
}

interface IndicatorStyleProps {
    $hasNestedSiblings?: boolean;
}

interface ExpandButtonStyleProps {
    $expanded?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================

// -----------------------------------------------------------------------------
// LIST ITEM STYLES
// -----------------------------------------------------------------------------

export const ListItemContainer = styled.li<ListItemStyleProps>`
    display: ${(props) => (props.$visible ? "flex" : "none")};
`;

export const ListItem = styled.div<ListItemStyleProps>`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Spacing["spacing-8"]};
    padding: ${Spacing["spacing-12"]} ${Spacing["spacing-8"]};
    cursor: ${(props) => (props.$toggleable ? "default" : "pointer")};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Radius["none"]};
    outline: none;

    ${(props) =>
        props.$active &&
        css`
            background: ${Colour["bg-hover"]};
        `}
`;

export const Indent = styled.div<IndentStyleProps>`
    height: 1px;
    width: calc((1lh + ${Spacing["spacing-8"]}) * ${(props) => props.$level});
`;

export const ExpandButton = styled.div<ExpandButtonStyleProps>`
    width: 1lh;
    height: 1lh;
    color: ${Colour["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Motion["duration-350"]}
            ${Motion["ease-standard"]};

        ${(props) => {
            if (props.$expanded) {
                return css`
                    transform: rotate(90deg);
                `;
            }
        }}
    }
`;

export const UnexpandableIndicator = styled.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Spacing["spacing-8"]};
`;

export const SelectionIndicator = styled.div<IndicatorStyleProps>`
    flex-shrink: 0;
    height: 1lh;
    width: ${(props) =>
        props.$hasNestedSiblings ? "1lh" : Spacing["spacing-16"]};

    display: flex;
    justify-content: center;
`;

export const CheckboxMixedIndicator = styled(MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Colour["icon-selected"]};
`;
