import { MinusSquareFillIcon } from "@lifesg/react-icons/minus-square-fill";
import { TickIcon } from "@lifesg/react-icons/tick";
import styled, { css } from "styled-components";
import { Color } from "../../color";

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
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${(props) => (props.$toggleable ? "default" : "pointer")};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${Color.Accent.Light[3]};

    ${(props) =>
        props.$active &&
        css`
            background: ${Color.Accent.Light[5]};
        `}
`;

export const Indent = styled.div<IndentStyleProps>`
    height: 1px;
    width: ${(props) => {
        let total = 0;
        for (let i = 0; i < props.$level; i++) {
            total += 1.625; // expand button
            total += 0.5; // space
        }
        return total;
    }}rem;
`;

export const ExpandButton = styled.div<ExpandButtonStyleProps>`
    width: 1.625rem;
    height: 1.625rem;
    color: ${Color.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

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
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`;

export const SelectionIndicator = styled.div<IndicatorStyleProps>`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${(props) => (props.$hasNestedSiblings ? "1.625rem" : "1rem")};

    display: flex;
    justify-content: center;
`;

export const SelectedIndicator = styled(TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${Color.Primary};
`;

export const CheckboxMixedIndicator = styled(MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${Color.Primary};
`;
