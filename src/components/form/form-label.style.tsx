import styled from "styled-components";
import { Color } from "../styles/theme";
import { TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
export interface LabelProps {
    disabled?: boolean;
}

// =============================================================================
// STYLING
// =============================================================================
export const Label = styled.label<LabelProps>`
    ${TextStyleHelper.getTextStyle("H5", "semibold")}
    color: ${(props) =>
        props.disabled ? Color.Neutral[4](props) : Color.Neutral[3](props)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`;

export const TriggerArea = styled.div`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
`;

export const Icon = styled.img`
    height: 1rem;
    width: 1rem;
    flex-shrink: 0;
    vertical-align: text-top;
`;
