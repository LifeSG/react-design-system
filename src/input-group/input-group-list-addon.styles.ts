import styled from "styled-components";

import { Input } from "../input";
import { ExpandableElement } from "../shared/dropdown-list";
import { InputBox } from "../shared/input-wrapper";
import { Colour, Spacing } from "../theme";

// =============================================================================
// STYLING
// =============================================================================
export const FieldWrapper = styled(InputBox)`
    display: flex;
    align-items: center;

    &.fieldWrapperPositionRight {
        flex-direction: row-reverse;
    }
`;

export const StyledExpandableElement = styled(ExpandableElement)`
    &.expandableElementNoBorderRight {
        padding-right: 0;
    }

    &.expandableElementNoBorderLeft {
        padding-left: 0;
    }
`;

export const FieldSelector = styled.div`
    flex: 0 0 auto;
`;

export const FieldInput = styled(Input)`
    &.fieldInputReadOnly {
        padding: 0;
    }

    &.fieldInputNoBorderRight {
        padding-left: 0;
    }

    &.fieldInputNoBorderLeft {
        padding-right: 0;
    }

    &.fieldInputPositionRight {
        padding-left: ${Spacing["spacing-16"]};
    }

    &.fieldInputPositionLeft {
        padding-right: ${Spacing["spacing-16"]};
    }
`;

export const SelectorReadOnly = styled.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Spacing["spacing-12"]};
    color: ${Colour["text"]};
`;

export const Divider = styled.div`
    width: 1px;
    background: ${Colour["border"]};
    flex-shrink: 0;
    height: 1.25rem;

    &.dividerReadOnly {
        display: none;
    }

    &.dividerPositionRight {
        margin-left: ${Spacing["spacing-12"]};
    }

    &.dividerPositionLeft {
        margin-right: ${Spacing["spacing-12"]};
    }
`;
