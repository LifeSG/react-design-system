import styled from "styled-components";
import { Button } from "../button/button";
import { Color } from "../color";
import { Text } from "../text";
import { DesignToken } from "src/design-token";

// =============================================================================
// STYLING
// =============================================================================

export const Label = styled(Text.Body)`
    white-space: nowrap;
`;

export const LabelDropdownDivider = styled(Text.Body)`
    white-space: nowrap;
    margin: 0 0.5rem;
`;

export const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PageSizeDropDownButton = styled(Button.Default)`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0.25rem 0.625rem;
    align-items: center;
    color: ${Color.Neutral[1]};
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    min-width: 7.125rem;
    padding: 0.25rem 1rem;

    span {
        display: inline-flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;

        svg {
            height: 1rem;
            width: 1rem;
            color: ${Color.Neutral[1]};
            margin-left: 0.5rem;
        }
    }

    :hover,
    :active,
    :focus {
        border: 1px solid ${Color.Neutral[5]};
        box-shadow: none;
    }
`;

export const DropdownSelectOption = styled.div`
    position: fixed;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    width: 8.875rem;
    margin: 0 0.625rem;
    margin-top: 3.8rem;

    /* :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    } */
`;
