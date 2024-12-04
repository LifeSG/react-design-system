import { ChevronDownIcon } from "@lifesg/react-icons/chevron-down";
import styled, { css } from "styled-components";
import { V2_Color } from "../v2_color";
import { Selector as DropdownSelector } from "../shared/dropdown-wrapper/dropdown-wrapper.styles";
import { V2_Text } from "../v2_text/text";
import { V2_TextStyle } from "../v2_text/text-style";
import { V2_Transition } from "../v2_transition";
import { InputGroupAddonPosition } from "./types";

// =============================================================================
// STYLE INTERFACE, transient props are denoted with $
// See more https://styled-components.com/docs/api#transient-props
// =============================================================================
interface StyleProps {
    disabled?: boolean;
    $readOnly?: boolean;
    $expanded?: boolean;
    $position?: InputGroupAddonPosition;
}

interface DividerStyleProps {
    $readOnly?: boolean;
    $position?: InputGroupAddonPosition;
}

// =============================================================================
// STYLING
// =============================================================================
export const DisplayContainer = styled.div<StyleProps>`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${(props) => {
        if (props.$expanded) {
            return css`
                border-bottom: 1px solid ${V2_Color.Neutral[5](props)};
            `;
        }
    }}

    ${(props) => {
        if (props.$readOnly) {
            return css`
                border: 0;
                margin: 0;
            `;
        } else {
            switch (props.$position) {
                case "right":
                    return css`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `;
                default:
                    return css`
                        flex-direction: row;
                    `;
            }
        }
    }}
`;

export const Selector = styled(DropdownSelector)`
    padding: 0;
    width: auto;
`;

export const SelectorReadOnly = styled.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`;

export const IconContainer = styled.div<StyleProps>`
    transform: rotate(${(props) => (props.$expanded ? 180 : 0)}deg);
    transition: ${V2_Transition.Base};
    margin: 0 0.75rem;
`;

export const StyledChevronIcon = styled(ChevronDownIcon)`
    color: ${V2_Color.Neutral[3]};
    height: ${V2_TextStyle.Body.fontSize}rem;
    width: ${V2_TextStyle.Body.fontSize}rem;
    vertical-align: bottom;
`;

export const LabelContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
`;

export const ValueLabel = styled(V2_Text.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const PlaceholderLabel = styled(ValueLabel)`
    color: ${V2_Color.Neutral[3]};
`;

export const Divider = styled.div<DividerStyleProps>`
    width: 1px;
    background: ${V2_Color.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${(props) => {
        if (props.$readOnly) {
            return css`
                display: none;
            `;
        }
    }}

    ${(props) => {
        switch (props.$position) {
            case "right":
                return css`
                    margin: 0 0.75rem;
                `;
            default:
                return css`
                    margin: 0 0.75rem 0 0;
                `;
        }
    }}
`;
