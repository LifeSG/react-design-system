import styled from "styled-components";
import { Color } from "../color";
import { Text, TextStyleHelper } from "../text";

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface LabelProps {
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

export const ErrorMessage = styled(Text.H6)`
    color: ${Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
`;

export const Subtitle = styled(Text.XSmall)<LabelProps>`
    color: ${(props) =>
        props.disabled ? Color.Neutral[4](props) : Color.Neutral[3](props)};
    font-size: 1rem !important;
`;
