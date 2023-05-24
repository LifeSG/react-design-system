import styled, { css } from "styled-components";
import { Button } from "../button/button";
import { Color } from "../color";
import { Text } from "../text";
import { DesignToken } from "src/design-token";
// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    $selected: boolean;
}
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
    margin-top: 8px;
`;

export const DropDownButton = styled(Button.Default)<StyleProps>`
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: 0rem 0.5rem;
    align-items: center;
    color: ${Color.Neutral[1]};
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    min-width: 9rem;
    padding: 0.25rem 1rem;
    height: 2.5rem;

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

    ${(props) => {
        if (props.$selected) {
            return css`
                border: 1px solid ${Color.Accent.Light[1]};
                box-shadow: ${DesignToken.InputBoxShadow};
                :hover,
                :active,
                :focus {
                    border: 1px solid ${Color.Accent.Light[1]};
                    box-shadow: ${DesignToken.InputBoxShadow};
                }
            `;
        } else {
            return css`
                :hover,
                :active,
                :focus {
                    border: 1px solid ${Color.Neutral[5]};
                    box-shadow: none;
                }
            `;
        }
    }}
`;

export const DropdownSelectOption = styled.div`
    position: absolute;
    background: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    width: 9rem;
    margin: 0 0.5rem;
    margin-top: 3rem;

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }
`;
